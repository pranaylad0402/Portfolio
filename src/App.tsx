import React from "react";
import { createRoot } from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const Header = () => {
  // Add a header
  return <div className="text-black font-bold text-2xl">This is Header</div>;
};

const Body = () => {
  // Add a Body
  return <div>This is Body</div>;
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
  return <div>This is Footer</div>;
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
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
