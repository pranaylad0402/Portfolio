import React from "react";
import { createRoot } from "react-dom/client";
import {
  Link,
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useRouteError,
} from "react-router-dom";
import { About } from "./components/About";
import { Body } from "./components/Body";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/HeaderComponent";
import { TechStack } from "./components/TechStack";

const AppLayout = () => {
  return (
    <div className="px-40 py-12 bg-slate-900 min-h-screen text-white">
      <Header />
      <Outlet />
    </div>
  );
};

const Home = () => {
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
  const error = useRouteError();

  return (
    <>
      <div className="flex justify-center items-center h-screen  bg-slate-900">
        <div id="error-page">
          <h1 className="lg:text-6xl font-bold text-2xl text-white">Oops!</h1>
          <p className="text-xl text-white mt-4">
            Sorry, an unexpected error has occurred.
          </p>
          <p className="text-3xl text-white mt-4">
            {error.statusText || error.message}
          </p>
          <div className="mt-8">
            <Link
              to="/"
              className="px-5 py-2 bg-white rounded-md hover:bg-green-400 "
            >
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
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
