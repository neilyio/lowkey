import React from "react";
import { useSpring, animated } from "react-spring";
import {
  Height,
  Index,
  OnClick,
  Child,
  OnMouseEnter,
  OnMouseLeave,
  IsSelected,
  ChildArray,
} from "./types";

export const SidebarCursor = ({ height, index = 0, children }: Height & Index & ChildArray) => {
  const { pxy } = useSpring({ pxy: height * index });

  return (
    <animated.div
      className="w-full rounded-[12px] overflow-hidden"
      style={{
        height,
        background:
          "linear-gradient(225deg, #EF9383 0%, #FF4785 48.96%, #8C40D9 100%)",
       transform: pxy.to(n => `translate3d(0px, ${n}px, 0px)`),
      }}
    >
          <animated.div style={{
              transform: pxy.to(n => `translate3d(0px, ${n * -1}px, 0px)`),
          }}>{children}
          </animated.div>
    </animated.div>
  );
};

export const SidebarChildContainer = ({ height, children}: Height & ChildArray) => (
    <div
        className={"w-full flex p-[20px] items-center focus:outline-none space-x-6"}
        style={{ height }}
    >{children}</div>
)

export const SidebarTarget = ({
  height,
  onClick,
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
  </button>
);

export const SidebarIcon = ({ src }) => <img className="h-8" src={src}></img>;

export const SidebarFill = ({ height, isSelected }: Height & IsSelected) => (
  <div
    className={
      "w-full rounded-md transition-colors duration-100" +
      (isSelected ? " bg-gray-900" : "")
    }
    style={{ height, backgroundColor: isSelected && "rgba(228, 228, 228, 0.1)" }}
  />
);

export const SidebarContainer = ({ children }: ChildArray | Child) => (
  <div
    className="w-[350px] h-full p-[20px] box-border flex justify-center"
    style={{ boxShadow: "inset -1px 0px 0px rgba(228, 228, 228, 0.2)" }}
  >
    <div className="w-full h-full relative">{children}</div>
  </div>
);

export const SidebarLabel = ({ children }: Child) => (
  <p
    className="text-white whitespace-nowrap"
    style={{ fontStyle: "normal", fontWeight: 600, fontSize: 16 }}
  >
    {children}
  </p>
);
