import React from "react";
import { createRoot } from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Header } from "./components/HeaderComponent";
import { Body } from "./components/Body";
import { Contact } from "./components/Contact";
import { TechStack } from "./components/TechStack";

const AppLayout = () => {
  return (
    <div className="px-40 py-12 bg-slate-900 min-h-screen text-white">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const Home = () => {
  // Add a Body
  return (
    <div>
      <Body />
      <TechStack />
    </div>
  );
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
        element: <Body />,
      },
      {
        path: "/techStack",
        element: <TechStack />,
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
