import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Pricing from "./components/pages/Pricing";
import Contact from "./components/pages/Contact";
import Services from "./components/pages/Services";
import WhatsAppBtn from "./components/WhatsAppBtn";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      
      <Header />
      <WhatsAppBtn />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
