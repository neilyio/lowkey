import React from "react";

export const CanvasContainer = ({ children }: any) => (
  <div className="w-full h-full flex items-center justify-center relative">
    {children}
  </div>
);



export const CanvasLabel = ({ children }) => (
  <p
    className="text-white text-center whitespace-nowrap"
    style={{
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 48,
    }}
  >
    {children}
  </p>
);
