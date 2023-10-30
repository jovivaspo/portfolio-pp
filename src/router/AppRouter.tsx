import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Videography } from "../pages/Videography";
import { About } from "../pages/About";
import { Photography } from "../pages/Photography";
import { Colab } from "../pages/Colab";
import { Contact } from "../pages/Contact";
import { Designs } from "../pages/Designs";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/videography" element={<Videography />} />
      <Route path="/photography" element={<Photography />} />
      <Route path="/colab" element={<Colab />} />
      <Route path="/designs" element={<Designs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
