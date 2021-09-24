import React from "react";
import { Child, ChildArray } from "./types";

// The "canvas" is the non-sidebar area of the app. As the app grows, this
// area may hold the main "working environment" for the user.
// Controls the layout of its children.
export const CanvasContainer = ({ children }: Child | ChildArray) => (
  <div className="w-full h-full flex items-center justify-center relative">
    {children}
  </div>
);

// The "title" component of the canvas area. This is expected to match the
// label of the selected item in the sidebar area.
export const CanvasLabel = ({ children }: Child) => (
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
