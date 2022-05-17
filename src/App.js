import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Institution from "./pages/Institution";
import Institutions from "./pages/Institutions";
import Contact from "./pages/Contact";
import About from "./pages/About";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/institution" element={<Institution />} />
          <Route path="/institutions" element={<Institutions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}
