import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { useState, useEffect } from "react";

export const ResumeViewer = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: (defaultTabs) => [defaultTabs[0], defaultTabs[1]],

    renderToolbar: (Toolbar) => (
      <Toolbar>
        {(slots) => {
          const {
            GoToPreviousPage,
            CurrentPageInput,
            NumberOfPages,
            ZoomOut,
            CurrentScale,
            ZoomIn,
            Download,
            Print,
            EnterFullScreen,
          } = slots;

          return (
            <div className="flex items-center gap-3 px-3 py-2 w-full justify-between  text-black mt-1">
              {/* Page Navigation */}
              <div className="flex flex-1 sm:flex-none items-center gap-1">
                <GoToPreviousPage />
                <CurrentPageInput /> / <NumberOfPages />
              </div>

              {/* Zoom Controls */}
              <div className="hidden items-center gap-1 lg:gap-4 flex-1 justify-center sm:flex">
                <ZoomOut />
                <CurrentScale />
                <ZoomIn />
              </div>

              {/* Actions */}
              <div className="flex items-center gap-1" />
              <EnterFullScreen />
              <Download />
              <Print />
            </div>
          );
        }}
      </Toolbar>
    ),
  });

  return (
    <div className="h-screen mt-8 ">
      <Viewer
        fileUrl="/MihirNirvikar.pdf"
        plugins={[defaultLayoutPluginInstance]}
      />
    </div>
  );
};
