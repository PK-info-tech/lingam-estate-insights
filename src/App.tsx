import { Suspense, lazy } from "react";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";

const Index = lazy(() => import("./pages/Index"));
const RegionsIndex = lazy(() => import("./pages/RegionsIndex"));
const RegionDetail = lazy(() => import("./pages/RegionDetail"));
const InsightsIndex = lazy(() => import("./pages/InsightsIndex"));
const InsightDetail = lazy(() => import("./pages/InsightDetail"));
const PropertiesIndex = lazy(() => import("./pages/PropertiesIndex"));
const PropertyDetail = lazy(() => import("./pages/PropertyDetail"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const LandDetailRedirect = () => {
  const { slug } = useParams<{ slug: string }>();
  return <Navigate to={slug ? `/properties/${slug}` : "/properties"} replace />;
};

const App = () => (
  <HelmetProvider>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter
            future={{
              v7_startTransition: true,
              v7_relativeSplatPath: true,
            }}
          >
            <Suspense fallback={<div className="min-h-screen bg-background" />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/lands" element={<Navigate to="/properties" replace />} />
                <Route path="/lands/:slug" element={<LandDetailRedirect />} />
                <Route path="/properties" element={<PropertiesIndex />} />
                <Route path="/properties/:slug" element={<PropertyDetail />} />
                <Route path="/regions" element={<RegionsIndex />} />
                <Route path="/regions/:slug" element={<RegionDetail />} />
                <Route path="/insights" element={<InsightsIndex />} />
                <Route path="/insights/:slug" element={<InsightDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </HelmetProvider>
);

export default App;
