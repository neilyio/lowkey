import React, { useState } from "react";
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
import { SidebarData } from "./types"

const AppContainer = ({ children }) => (
  <div className="w-full h-full bg-black flex">{children}</div>
);

export const App = ({ sidebar }: SidebarData) => {
  const height = 56;
  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <AppContainer>
      <SidebarContainer>
        <LayerStack>
          {sidebar.map(({ label }, index) => (
            <SidebarFill
              key={label}
              height={height}
              isSelected={hovered === index}
            />
          ))}
          {sidebar.map(({ label, outline }) => (
            <SidebarChildContainer key={label} height={height} >
              <SidebarIcon src={outline} />
              <SidebarLabel>{label}</SidebarLabel>
            </SidebarChildContainer>
          ))}
          <SidebarCursor height={height} index={selected}>
            {sidebar.map(({ label, bold }) => (
              <SidebarChildContainer key={label} height={height}>
                <SidebarIcon src={bold} />
                <SidebarLabel>{label}</SidebarLabel>
              </SidebarChildContainer>
            ))}
          </SidebarCursor>
          {sidebar.map(({ label }, index) => (
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
          {sidebar.map(({ label }) => (
            <CanvasLabel key={label}>{label}</CanvasLabel>
          ))}
        </FadeBetween>
      </CanvasContainer>
    </AppContainer>
  );
};
