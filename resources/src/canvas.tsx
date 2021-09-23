import React from "react";
import { Child, ChildArray } from "./types";

export const CanvasContainer = ({ children }: Child | ChildArray) => (
  <div className="w-full h-full flex items-center justify-center relative">
    {children}
  </div>
);

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
