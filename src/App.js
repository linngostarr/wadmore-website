import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Home from "./pages/Home";
import About from "./pages/About";
import Science from "./pages/Science";
import Families from "./pages/Families";
import Schools from "./pages/Schools";
import Professional from "./pages/Professional";
import Gifted2e from "./pages/Gifted2e";
import Contact from "./pages/Contact";
import Consulting from './pages/Consulting';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import FAQ from './pages/FAQ';
import Success from './pages/Success';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/science" element={<Science />} />
        <Route path="/families" element={<Families />} />
        <Route path="/schools" element={<Schools />} />
        <Route path="/professional" element={<Professional />} />
        <Route path="/gifted-2e" element={<Gifted2e />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      <Analytics />
    </Router>
  );
}

export default App;