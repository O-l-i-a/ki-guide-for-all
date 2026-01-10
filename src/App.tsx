import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LehrerPage from "./pages/LehrerPage";
import SchuelerPage from "./pages/SchuelerPage";
import StudentenPage from "./pages/StudentenPage";
import ProfessorenPage from "./pages/ProfessorenPage";
import NewsPage from "./pages/NewsPage";
import RichtlinienPage from "./pages/RichtlinienPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/lehrer" element={<LehrerPage />} />
          <Route path="/schueler" element={<SchuelerPage />} />
          <Route path="/studenten" element={<StudentenPage />} />
          <Route path="/professoren" element={<ProfessorenPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/richtlinien" element={<RichtlinienPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
