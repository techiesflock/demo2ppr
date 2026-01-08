import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProjectReports from "./pages/ProjectReports";
import ProjectReportDetail from "./pages/ProjectReportDetail";
import ExpertTalks from "./pages/ExpertTalks";
import Courses from "./pages/Courses";
import Suppliers from "./pages/Suppliers";
import Training from "./pages/Training";
import Dashboard from "./pages/Dashboard";
import Pricing from "./pages/Pricing";
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
          <Route path="/project-reports" element={<ProjectReports />} />
          <Route path="/project-reports/:id" element={<ProjectReportDetail />} />
          <Route path="/expert-talks" element={<ExpertTalks />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/training" element={<Training />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pricing" element={<Pricing />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
