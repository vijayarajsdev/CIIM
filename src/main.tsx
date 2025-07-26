import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import { RouterProvider } from "react-router-dom";
import { Router } from "./Router/Router";
import { AuthProvider } from "./Router/AuthProvider";
import SmallScreenBlocker from "./Components/layout/SmallScreenBlocker";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={Router} />
      <SmallScreenBlocker />
    </AuthProvider>
  </StrictMode>
);
