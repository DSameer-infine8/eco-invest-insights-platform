
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ESGTracker from "./pages/ESGTracker";
import GreenBonds from "./pages/GreenBonds";
import ImpactInvesting from "./pages/ImpactInvesting";
import SustainableBudgeting from "./pages/SustainableBudgeting";
import CarbonOffset from "./pages/CarbonOffset";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/esg-tracker" element={<ESGTracker />} />
          <Route path="/green-bonds" element={<GreenBonds />} />
          <Route path="/impact-investing" element={<ImpactInvesting />} />
          <Route path="/sustainable-budgeting" element={<SustainableBudgeting />} />
          <Route path="/carbon-offset" element={<CarbonOffset />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
