import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutComponent from "./components/About";
import ContactComponent from "./components/Contact";
import ErrorComponent from "./components/ErrorPage";
import RestaurentHomeComponent from "./components/RestaurentHomeComponent";

const AppLayout = () => {
  return (
    <div>
      <HeaderComponent />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    errorElement: <ErrorComponent></ErrorComponent>,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: <AboutComponent />,
      },
      {
        path: "/contact",
        element: <ContactComponent />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurentHomeComponent />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
