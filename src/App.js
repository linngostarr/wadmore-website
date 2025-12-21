import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Science from "./pages/Science";
import Families from "./pages/Families";
import Schools from "./pages/Schools";
import Professional from "./pages/Professional";
import Contact from "./pages/Contact";
import Consulting from './pages/Consulting';
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
<Route path="/consulting" element={<Consulting />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
