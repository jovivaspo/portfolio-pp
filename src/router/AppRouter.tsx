import {
  Route,
  createBrowserRouter, createRoutesFromElements,
} from "react-router-dom";
import { Home } from "../pages/Home";
import { Layout } from "../components/Layout";
import { Videography } from "../pages/Videography";
import { About } from "../pages/About";
import { Photography } from "../pages/Photography";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/videography" element={<Videography />} />
      <Route path="/photography" element={<Photography />} />
      <Route path="/about" element={<About />} />
    </Route>
  ),
  {basename: "/portfolio-pp"},
);

