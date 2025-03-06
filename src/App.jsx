import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./pages/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Countries from "./pages/countries";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/countries" element={<Countries />} />
      </Routes>
    </Router>
  );
}

export default App;




