import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.tsx";
import Privacy from "./components/Privacy.tsx";
import Terms from "./components/Terms.tsx";

const router = createBrowserRouter([
  {
    path: "/Challenge/",
    element: <App />,
    children: [
      {
        path: "/Challenge/",
        element: <Home />,
      },
      {
        path: "/Challenge/privacy",
        element: <Privacy />,
      },
      {
        path: "/Challenge/terms",
        element: <Terms />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
