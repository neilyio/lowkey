/* import { hydrate, prerender as ssr } from "preact-iso"; */
/* import { ComponentChildren } from "preact" */

import React, { useState } from "react";
import { render } from "react-dom";
import iconBoldDiscovery from "./icons/bold/Discovery.svg";
import iconBoldEditSquare from "./icons/bold/Edit Square.svg";
import iconBoldVideo from "./icons/bold/Video.svg";
import "./global.css";
import { LayerStack, FadeBetween } from "./utilities"
import { CanvasContainer, CanvasLabel } from "./canvas"
import { SidebarCursor, SidebarContainer, SidebarFill, SidebarIcon, SidebarLabel, SidebarTarget  } from "./sidebar"

const AppContainer = ({ children }: any) => (
  <div className="w-full h-full bg-black flex">{children}</div>
);

const App = () => {
  const data = [
    { label: "Browse", icon: iconBoldDiscovery },
    { label: "Recordings", icon: iconBoldVideo },
    { label: "New Message", icon: iconBoldEditSquare },
  ];
  const height = 56;
  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <AppContainer>
      <SidebarContainer>
        <LayerStack>
          {data.map(({ label }, index) => (
            <SidebarFill
              key={label}
              height={height}
              selected={hovered === index}
            />
          ))}
          <SidebarCursor height={height} index={selected} />
          {data.map(({ label, icon }, index) => (
            <SidebarTarget
              key={label}
              height={height}
              onClick={() => setSelected(index)}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <SidebarIcon src={icon} />
              <SidebarLabel>{label}</SidebarLabel>
            </SidebarTarget>
          ))}
        </LayerStack>
      </SidebarContainer>
      <CanvasContainer>
        <FadeBetween selected={selected} config={{ duration: 300 }}>
          {data.map(({ label }) => (
            <CanvasLabel>{label}</CanvasLabel>
          ))}
        </FadeBetween>
      </CanvasContainer>
    </AppContainer>
  );
};

render(<App />, document.getElementsByTagName("body")[0]);
/* hydrate(<App />);
 *
 * export async function prerender(data: any) {
 *   return await ssr(<App {...data} />);
 * } */
