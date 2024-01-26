import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import { DetailPage } from "./routes/detail-page";
import { ErrorPage } from "./routes/error-page";
import { Header } from "./routes/header";
import { Homepage } from "./routes/homepage";
import { ChakraProvider } from "@chakra-ui/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "detail",
        element: <DetailPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ChakraProvider>
);
