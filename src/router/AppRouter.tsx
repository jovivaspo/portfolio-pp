import {
  Route,
  createBrowserRouter, createRoutesFromElements,
} from "react-router-dom";
import { Home } from "../pages/Home";
import { Layout } from "../components/Layout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
    </Route>
  )
);

