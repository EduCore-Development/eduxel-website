import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Features from "./pages/Features";
import Download from "./pages/Download";
import Installer from "./pages/Installer";
import Donate from "./pages/Donate";
import About from "./pages/About";
import Imprint from "./pages/Imprint";
import Privacy from "./pages/Privacy";
import WhmcsAddons from "./pages/WhmcsAddons";
import Team from "./pages/Team";
import Partners from "./pages/Partners";
import Faq from "./pages/Faq";
import NotFound from "./pages/NotFound";
import Redirect from "./components/Redirect";

const queryClient = new QueryClient();

const INSTALLER_URL = "https://raw.githubusercontent.com/EduCore-Development/eduxel-server-application-installer/main/install.sh";

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/features" element={<Features />} />
            <Route path="/download" element={<Download />} />
            <Route path="/installer" element={<Installer />} />
            <Route path="/i" element={<Redirect url={INSTALLER_URL} />} />
            <Route path="/installer/install.sh" element={<Redirect url={INSTALLER_URL} />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/about" element={<About />} />
            <Route path="/imprint" element={<Imprint />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/whmcs-addons" element={<WhmcsAddons />} />
            <Route path="/team" element={<Team />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/faq" element={<Faq />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
