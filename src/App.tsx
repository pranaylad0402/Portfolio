import React from "react";
import { createRoot } from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Header } from "./components/HeaderComponent";
import { Body } from "./components/Body";
import { Contact } from "./components/Contact";
import { TechStack } from "./components/TechStack";
import { Footer } from "./components/Footer";
import { About } from "./components/About";

const AppLayout = () => {
  return (
    <div className="px-40 py-12 bg-slate-900 min-h-screen text-white">
      <Header />
      <Outlet />
    </div>
  );
};

const Home = () => {
  // Add a Body
  return (
    <div>
      <Body />
      <div className="text-center">
        <TechStack />
      </div>
      <div className="text-center">
        <About />
      </div>
      <Footer />
    </div>
  );
};

const Error = () => {
  return <div>404, Page not found</div>;
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
