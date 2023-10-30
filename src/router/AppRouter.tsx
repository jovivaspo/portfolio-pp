import {
  Navigate,
  Route,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home } from "../pages/Home";
import { Videography } from "../pages/Videography";
import { About } from "../pages/About";
import { Photography } from "../pages/Photography";
import { Colab } from "../pages/Colab";
import { Contact } from "../pages/Contact";
import { Designs } from "../pages/Designs";
import { Layout } from "../components/Layout";

export const router = createHashRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/videography" element={<Videography />} />
      <Route path="/photography" element={<Photography />} />
      <Route path="/colab" element={<Colab />} />
      <Route path="/designs" element={<Designs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  )
);
