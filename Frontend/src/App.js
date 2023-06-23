import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import { HeroPage, RegisterPage } from "./Pages/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <hr />
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/login" element={<RegisterPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
