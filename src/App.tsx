import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppProvider } from "@/context/AppContext";
import Navbar from "@/components/Navbar";
import LandingPage from "@/pages/LandingPage";
import Dashboard from "@/pages/Dashboard";
import ScholarshipsPage from "@/pages/ScholarshipsPage";
import CareerSurveyPage from "@/pages/CareerSurveyPage";
import LoansPage from "@/pages/LoansPage";
import SchemesPage from "@/pages/SchemesPage";
import DocumentsPage from "@/pages/DocumentsPage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppProvider>
      <TooltipProvider>
        <Sonner />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/scholarships" element={<ScholarshipsPage />} />
            <Route path="/career-survey" element={<CareerSurveyPage />} />
            <Route path="/loans" element={<LoansPage />} />
            <Route path="/schemes" element={<SchemesPage />} />
            <Route path="/documents" element={<DocumentsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AppProvider>
  </QueryClientProvider>
);

export default App;
