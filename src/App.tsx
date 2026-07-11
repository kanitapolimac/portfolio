import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CaseTelemeet from "./pages/case-telemeet";
import CaseCarea from "./pages/case-carea";
import CaseStoreIntelligence from "./pages/case-store-intelligence";
import CaseAirdomo from "./pages/case-airdomo";
import CaseSystemAkvile from "./pages/case-system-akvile";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-telemeet" element={<CaseTelemeet />} />
        <Route path="/case-carea" element={<CaseCarea />} />
        <Route
          path="/case-store-intelligence"
          element={<CaseStoreIntelligence />}
        />
        <Route path="/case-airdomo" element={<CaseAirdomo />} />
        <Route path="/case-system-akvile" element={<CaseSystemAkvile />} />
      </Routes>
      <BackToTop />
    </BrowserRouter>
  );
}
