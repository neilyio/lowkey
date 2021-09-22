/* import { hydrate, prerender as ssr } from "preact-iso"; */
/* import { ComponentChildren } from "preact" */

import React, { useState } from "react";
import { render } from "react-dom";
import { useSpring, useTransition, animated } from "react-spring";
import { clamp } from "lodash";
import iconBoldDiscovery from "./icons/bold/Discovery.svg";
import iconBoldEditSquare from "./icons/bold/Edit Square.svg";
import iconBoldVideo from "./icons/bold/Video.svg";
import "./global.css";

type Height = { height?: number };
type Index = { index?: number };
type ZIndex = { zIndex?: number };
type OnClick = { onClick?: () => any };
type OnMouseEnter = { onMouseEnter?: () => any };
type OnMouseLeave = { onMouseLeave?: () => any };
type Child = { children: React.ReactElement };
type Selected = { selected: boolean };

const SidebarCursor = ({ height, index = 0 }: Height & Index) => {
  const spring = useSpring({ y: height * index });
  return (
    <animated.div
      className="w-full rounded-[12px]"
      style={{
        height,
        background:
          "linear-gradient(225deg, #EF9383 0%, #FF4785 48.96%, #8C40D9 100%)",
        ...spring,
      }}
    ></animated.div>
  );
};

const SidebarTarget = ({
  height,
  onClick,
  children,
  onMouseEnter,
  onMouseLeave,
}: Height & OnClick & Child & OnMouseEnter & OnMouseLeave) => (
  <button
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className={"w-full flex p-[20px] items-center focus:outline-none space-x-6"}
    style={{ height }}
  >
    {children}
  </button>
);

const SidebarIcon = ({ src }) => <img className="h-8" src={src}></img>;

const SidebarFill = ({ height, selected }: Height & Selected) => (
  <div
    className={
      "w-full rounded-md transition-colors duration-100" +
      (selected ? " bg-gray-900" : "")
    }
    style={{ height, backgroundColor: selected && "rgba(228, 228, 228, 0.1)" }}
  />
);

const LayerStack = ({ children }: any) =>
  children.map((child, index) => (
    <div
      key={index}
      className="w-full h-full absolute"
      style={{ zIndex: index }}
    >
      {child}
    </div>
  ));

const SidebarContainer = ({ children }: any) => (
  <div
    className="w-[350px] h-full p-[20px] box-border flex justify-center"
    style={{ boxShadow: "inset -1px 0px 0px rgba(228, 228, 228, 0.2)" }}
  >
    <div className="w-full h-full relative">{children}</div>
  </div>
);

const CanvasContainer = ({ children }: any) => (
  <div className="w-full h-full flex items-center justify-center relative">
    {children}
  </div>
);

const AppContainer = ({ children }: any) => (
  <div className="w-full h-full bg-black flex">{children}</div>
);

const SidebarLabel = ({ children }) => (
  <p
    className="text-white whitespace-nowrap"
    style={{ fontStyle: "normal", fontWeight: 600, fontSize: 16 }}
  >
    {children}
  </p>
);

const CanvasLabel = ({ children }) => (
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

const FadeBetween = ({ children, selected, config = {} }) => {
  const transitions = useTransition(
    children[clamp(selected, 0, children.length - 1)],
    {
      key: selected,
      initial: { opacity: 1 },
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      config,
    }
  );

  return transitions((style, child) => (
    <div className="absolute">
      <animated.div className="" style={{ ...style }}>
        {child}
      </animated.div>
    </div>
  ));
};

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
