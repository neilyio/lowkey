// @ts-nocheck

// At runtime, the imports below will be strings of the file paths,
// But TypeScript, by default, doesn't recognize the esbuild "loader" imports
// for things like fonts, icons, and css.
// To keep our configuraton simple for this demo, I've consolidated all the
// problematic imports into this @ts-nocheck file, so they can be passed as
// arguments to properly type-safe components.
import React from "react";
import { render } from "react-dom";
import "../dist/css/global.css";
import iconBoldDiscovery from "../dist/icons/bold/Discovery.svg";
import iconBoldEditSquare from "../dist/icons/bold/Edit Square.svg";
import iconBoldVideo from "../dist/icons/bold/Video.svg";
import iconOutlineDiscovery from "../dist/icons/outline/Discovery.svg";
import iconOutlineEditSquare from "../dist/icons/outline/Edit Square.svg";
import iconOutlineVideo from "../dist/icons/outline/Video.svg";
import { App } from "./app"


render(<App sidebar={[
    { label: "Browse", bold: iconBoldDiscovery, outline: iconOutlineDiscovery },
    { label: "Recordings", bold: iconBoldVideo, outline: iconOutlineVideo },
    {
      label: "New Message",
      bold: iconBoldEditSquare,
      outline: iconOutlineEditSquare,
    },
  ]}/>, document.getElementById("app"));
