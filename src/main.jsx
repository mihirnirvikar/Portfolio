import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PhotoProvider } from "react-photo-view";

import { App } from "./App.jsx";
import { BodyPage } from "./layout/BodyPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import { OverviewPage } from "./pages/OverviewPage.jsx";
import { ProjectPage } from "./pages/ProjectPage.jsx";
import { AchievementPage } from "./pages/AchievementPage.jsx";
import { ExperiencePage } from "./pages/ExperiencePage.jsx";
import { EducationPage } from "./pages/EducationPage.jsx";
import { ContactPage } from "./pages/ContactPage.jsx";
import { ResumePage } from "./pages/ResumePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <BodyPage />,
        children: [
          {
            index: true,
            element: <OverviewPage />,
          },
          {
            path: "/projects",
            element: <ProjectPage />,
          },
          {
            path: "/achievements",
            element: <AchievementPage />,
          },
          {
            path: "/experience",
            element: <ExperiencePage />,
          },
          {
            path: "/educations",
            element: <EducationPage />,
          },
          {
            path: "/resume",
            element: <ResumePage />,
          },
          {
            path: "/contact",
            element: <ContactPage />,
          },
        ],
      },
      {
        path: "/projects/:slug",
        element: <div>children of projects</div>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PhotoProvider
      speed={() => 800}
      maskColor="black"
      maskOpacity={0.8}
      loop={true}
    >
      <TooltipProvider>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </TooltipProvider>
    </PhotoProvider>
  </StrictMode>,
);
