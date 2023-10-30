import { Outlet, ScrollRestoration } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <div className="mt-24 md:mt-32">
        <Footer />
      </div>
      <ScrollRestoration />
    </>
  );
};
