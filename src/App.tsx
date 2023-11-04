import React from "react";
import { createRoot } from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Header } from "./components/header";

const AppLayout = () => {
  return (
    <div className="px-40 py-12">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const Home = () => {
  // Add a Body
  return <div></div>;
};

const About = () => {
  // Add a About
  return <div>This is About</div>;
};

const Contact = () => {
  // Add a Contact
  return <div>This is Contact</div>;
};

const Error = () => {
  return <div>404, Page not found</div>;
};

const Footer = () => {
  // Add a Footer
  return <div></div>;
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = createRoot(document.getElementById("root")!);
root.render(<RouterProvider router={appRouter} />);
