import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./context/ThemeContext.jsx";

import { App } from "./App.jsx";
import { Body } from "./components/Body/Body.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Overview } from "./components/Overview/Overview.jsx";
import { Project } from "./components/Project/Project.jsx";
import { Achievement } from "./components/Achievement/Achievement.jsx";
import { Experience } from "./components/Experience/Experience.jsx";
import { Education } from "./components/Education/Education.jsx";
import { Contact } from "./components/Contact/Contact.jsx";
import { Resume } from "./components/Resume/Resume.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
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
            path: "/educations",
            element: <Education />,
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
      {
        path: "/projects/nestinn",
        element: <div>Nestinn</div>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
