import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RegionsIndex from "./pages/RegionsIndex";
import RegionDetail from "./pages/RegionDetail";
import InsightsIndex from "./pages/InsightsIndex";
import InsightDetail from "./pages/InsightDetail";
import PropertiesIndex from "./pages/PropertiesIndex";
import PropertyDetail from "./pages/PropertyDetail";
import LandsIndex from "./pages/LandsIndex";
import LandDetail from "./pages/LandDetail";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/lands" element={<LandsIndex />} />
            <Route path="/lands/:slug" element={<LandDetail />} />
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
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
