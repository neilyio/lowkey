import React, { useState } from "react";
import { render } from "react-dom";
import iconBoldDiscovery from "./icons/bold/Discovery.svg";
import iconBoldEditSquare from "./icons/bold/Edit Square.svg";
import iconBoldVideo from "./icons/bold/Video.svg";
import iconOutlineDiscovery from "./icons/outline/Discovery.svg";
import iconOutlineEditSquare from "./icons/outline/Edit Square.svg";
import iconOutlineVideo from "./icons/outline/Video.svg";
import "./global.css";
import { LayerStack, FadeBetween } from "./utilities";
import { CanvasContainer, CanvasLabel } from "./canvas";
import {
  SidebarCursor,
  SidebarContainer,
  SidebarFill,
  SidebarIcon,
  SidebarLabel,
  SidebarTarget,
  SidebarChildContainer,
} from "./sidebar";

const AppContainer = ({ children }) => (
  <div className="w-full h-full bg-black flex">{children}</div>
);

const App = () => {
  const data = [
    { label: "Browse", bold: iconBoldDiscovery, outline: iconOutlineDiscovery },
    { label: "Recordings", bold: iconBoldVideo, outline: iconOutlineVideo },
    {
      label: "New Message",
      bold: iconBoldEditSquare,
      outline: iconOutlineEditSquare,
    },
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
          {data.map(({ label, outline }) => (
            <SidebarChildContainer key={label} height={height} >
              <SidebarIcon src={outline} />
              <SidebarLabel>{label}</SidebarLabel>
            </SidebarChildContainer>
          ))}
          <SidebarCursor height={height} index={selected}>
            {data.map(({ label, bold }) => (
              <SidebarChildContainer key={label} height={height}>
                <SidebarIcon src={bold} />
                <SidebarLabel>{label}</SidebarLabel>
              </SidebarChildContainer>
            ))}
          </SidebarCursor>
          {data.map(({ label }, index) => (
            <SidebarTarget
              key={label}
              height={height}
              onClick={() => setSelected(index)}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
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
