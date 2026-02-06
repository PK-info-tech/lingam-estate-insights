"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { MapPin, Maximize2, Minimize2, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";
import type { Property } from "@/data/properties";

interface PropertyMapProps {
  property: Property;
  className?: string;
}

// Major city coordinates
const majorCities = {
  chennai: { lat: 13.0827, lng: 80.2707, name: { en: "Chennai", ta: "சென்னை" } },
  bengaluru: { lat: 12.9716, lng: 77.5946, name: { en: "Bengaluru", ta: "பெங்களூரு" } },
  salem: { lat: 11.6643, lng: 78.146, name: { en: "Salem", ta: "சேலம்" } },
};

export const PropertyMap = ({ property, className }: PropertyMapProps) => {
  const { t, i18n } = useTranslation();
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const leafletRef = useRef<typeof import("leaflet") | null>(null);
  const propertyMarkerRef = useRef<L.Marker | null>(null);
  const cityMarkersRef = useRef<Record<string, L.Marker>>({});
  const distanceMarkersRef = useRef<L.Marker[]>([]);
  const lastPropertySlugRef = useRef<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "200px" });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const currentLang = i18n.language as "en" | "ta";

  useEffect(() => {
    if (!isInView) return;
    // Dynamically import Leaflet
    const loadMap = async () => {
      setMapLoaded(false);
      const L = await import("leaflet");
      await import("leaflet/dist/leaflet.css");
      leafletRef.current = L;

      if (!mapRef.current || mapInstanceRef.current) return;

      // Initialize map
      const map = L.map(mapRef.current, {
        center: [property.coordinates.lat, property.coordinates.lng],
        zoom: 10,
        zoomControl: true,
        attributionControl: true,
      });

      // Add tile layer (OpenStreetMap)
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 18,
      }).addTo(map);

      // Custom marker icon
      const propertyIcon = L.divIcon({
        className: "custom-marker",
        html: `<div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg border-2 border-white">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        </div>`,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
      });

      // Add property marker
      const propertyMarker = L.marker([property.coordinates.lat, property.coordinates.lng], { icon: propertyIcon })
        .addTo(map)
        .bindPopup(`<div class="text-sm font-medium">${property.title[currentLang] || property.title.en}</div>`);
      propertyMarkerRef.current = propertyMarker;

      // Add city markers and connection lines
      Object.entries(majorCities).forEach(([key, city]) => {
        // City marker
        const cityIcon = L.divIcon({
          className: "city-marker",
          html: `<div class="w-6 h-6 bg-muted rounded-full flex items-center justify-center shadow border border-border">
            <div class="w-2 h-2 bg-foreground/50 rounded-full"></div>
          </div>`,
          iconSize: [24, 24],
          iconAnchor: [12, 12],
        });

        const cityMarker = L.marker([city.lat, city.lng], { icon: cityIcon })
          .addTo(map)
          .bindPopup(`<div class="text-sm">${city.name[currentLang]}</div>`);
        cityMarkersRef.current[key] = cityMarker;

        // Connection line
        const connectivity = property.connectivity[key as keyof typeof majorCities];
        if (connectivity && typeof connectivity === "object") {
          const polyline = L.polyline(
            [
              [property.coordinates.lat, property.coordinates.lng],
              [city.lat, city.lng],
            ],
            {
              color: key === "chennai" ? "hsl(21, 69%, 54%)" : "#a1a1a1",
              weight: 2,
              opacity: 0.6,
              dashArray: "5, 10",
            }
          ).addTo(map);

          // Add distance label at midpoint
          const midLat = (property.coordinates.lat + city.lat) / 2;
          const midLng = (property.coordinates.lng + city.lng) / 2;
          
          const distanceMarker = L.marker([midLat, midLng], {
            icon: L.divIcon({
              className: "distance-label",
              html: `<div class="bg-background/90 backdrop-blur-sm px-2 py-1 text-xs border border-border rounded shadow-sm">
                ${connectivity.distance}
              </div>`,
              iconSize: [80, 24],
              iconAnchor: [40, 12],
            }),
          }).addTo(map);
          distanceMarkersRef.current.push(distanceMarker);
        }
      });

      // Fit bounds to show all markers
      const bounds = L.latLngBounds([
        [property.coordinates.lat, property.coordinates.lng],
        ...Object.values(majorCities).map((c) => [c.lat, c.lng] as [number, number]),
      ]);
      map.fitBounds(bounds, { padding: [50, 50] });

      mapInstanceRef.current = map;
      lastPropertySlugRef.current = property.slug;
      setMapLoaded(true);
    };

    loadMap();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
        propertyMarkerRef.current = null;
        cityMarkersRef.current = {};
        distanceMarkersRef.current = [];
        lastPropertySlugRef.current = null;
      }
    };
  }, [property, isInView]);

  useEffect(() => {
    if (!leafletRef.current) return;
    if (propertyMarkerRef.current) {
      propertyMarkerRef.current.setPopupContent(
        `<div class="text-sm font-medium">${property.title[currentLang] || property.title.en}</div>`
      );
    }
    Object.entries(majorCities).forEach(([key, city]) => {
      const marker = cityMarkersRef.current[key];
      if (marker) {
        marker.setPopupContent(`<div class="text-sm">${city.name[currentLang]}</div>`);
      }
    });
  }, [currentLang, property]);

  // Handle fullscreen toggle
  useEffect(() => {
    if (mapInstanceRef.current) {
      setTimeout(() => {
        mapInstanceRef.current?.invalidateSize();
      }, 100);
    }
  }, [isFullscreen]);

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display text-2xl">{t("property.map")}</h2>
        <button
          onClick={() => setIsFullscreen(!isFullscreen)}
          className="p-2 hover:bg-muted transition-colors"
          aria-label={isFullscreen ? "Exit fullscreen" : "View fullscreen"}
        >
          {isFullscreen ? (
            <Minimize2 className="w-5 h-5" />
          ) : (
            <Maximize2 className="w-5 h-5" />
          )}
        </button>
      </div>

      <div
        className={cn(
          "relative bg-muted transition-all duration-300",
          isFullscreen
            ? "fixed inset-0 z-50"
            : "aspect-video"
        )}
      >
        {/* Loading State */}
        {!mapLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5 animate-pulse" />
              <span>{t("property.loadingMap")}</span>
            </div>
          </div>
        )}

        {/* Map Container */}
        <div ref={mapRef} className="w-full h-full" />

        {/* Fullscreen close button */}
        {isFullscreen && (
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 z-[1000] p-3 bg-background shadow-lg hover:bg-muted transition-colors"
            aria-label="Close fullscreen"
          >
            <Minimize2 className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-primary rounded-full" />
          <span>{t("property.propertyLocation")}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-muted border border-border rounded-full" />
          <span>{t("property.majorCities")}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 border-t-2 border-dashed border-primary/60" />
          <span>{t("property.connectivityLines")}</span>
        </div>
      </div>
    </div>
  );
};
