import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Overview } from "./components/Overview/Overview.jsx";
import { Project } from "./components/Project/Project.jsx";
import { Achievement } from "./components/Achievement/Achievement.jsx";
import { Experience } from "./components/Experience/Experience.jsx";
import { Contact } from "./components/Contact/Contact.jsx";
import { Resume } from "./components/Resume/Resume.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Overview />,
      },
      {
        path: "/projects",
        element: <Project />,
      },
      {
        path: "/achievements",
        element: <Achievement />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
