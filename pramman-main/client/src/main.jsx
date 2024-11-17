import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginForm from "./components/auth/LoginForm.jsx";
import RegisterForm from "./components/auth/RegisterForm.jsx";
import AuthComponent from "./pages/AuthPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import DashboardPage from "./components/dashboard/DashboardPage.jsx";
import Organisation from "./components/dashboard/Organisation.jsx";
import Event from "./components/dashboard/Event.jsx";
import Certificate from "./components/dashboard/Certificate.jsx";
import Template from "./components/dashboard/Template.jsx";
import AppCenter from "./components/dashboard/AppCenter.jsx";
import LogOut from "./components/dashboard/LogOut.jsx";
import About from "./pages/About.jsx";
import Pricing from "./pages/Pricing.jsx";
import Helpline from "./pages/Helpline.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/auth",
    element: <AuthComponent />,
    children: [
      {
        path: "login",
        element: <LoginForm />,
      },
      {
        path: "register",
        element: <RegisterForm />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "organisation",
        element: <Organisation />,
      },
      {
        path: "events",
        element: <Event />,
      },
      {
        path: "templates",
        element: <Template />,
      },
      {
        path: "certificates",
        element: <Certificate />,
      },
      {
        path: "appCenter",
        element: <AppCenter />,
      },
      {
        path: "logout",
        element: <LogOut />,
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
  {
    path: "/helpline",
    element: <Helpline />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
