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

// The colored area that represents the "selected" item. This component pulls
// off a little trick with its children. When the colored area shifts
// according to the "selected" index, it needs to "reverse-shift" its children,
// so that the children appear to stay in the same space. This allows the
// cursor to "reveal" its children through "overflow:hidden".
export const SidebarCursor = ({
  height,
  index = 0,
  children,
}: Height & Index & ChildArray) => {
  const { pxy } = useSpring({
    pxy: height * index,
  });

  return (
    <animated.div
      className="w-full rounded-[12px] overflow-hidden"
      style={{
        height,
        background:
          "linear-gradient(225deg, #EF9383 0%, #FF4785 48.96%, #8C40D9 100%)",
        transform: pxy.to((n) => `translate3d(0px, ${n}px, 0px)`),
      }}
    >
      <animated.div
        style={{
          transform: pxy.to((n) => `translate3d(0px, ${n * -1}px, 0px)`),
        }}
      >
        {children}
      </animated.div>
    </animated.div>
  );
};

// The area around the "content" of a sidebar item. Controls the border and
// spacing around its children.
export const SidebarChildContainer = ({
  height,
  children,
}: Height & ChildArray) => (
  <div
    className={"w-full flex p-[20px] items-center focus:outline-none space-x-6"}
    style={{ height }}
  >
    {children}
  </div>
);

// A child-less div that acts as the click/hover target for the sidebar.
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
  ></button>
);

// A simple fixed-height image component.
export const SidebarIcon = ({ src }) => <img className="h-8" src={src}></img>;

// An empty div component to indicate "soft" selection of a sidebar item.
// Appropriate to be used as a "mouse-over" effect to indicate clickability.
export const SidebarFill = ({ height, isSelected }: Height & IsSelected) => (
  <div
    className={
      "w-full rounded-md transition-colors duration-100" +
      (isSelected ? " bg-gray-900" : "")
    }
    style={{
      height,
      backgroundColor: isSelected && "rgba(228, 228, 228, 0.1)",
    }}
  />
);

// The container around the full-height sidebar area. Controls the border
// and layout of sidebar menu items.
export const SidebarContainer = ({ children }: ChildArray | Child) => (
  <div
    className="w-[350px] h-full p-[20px] box-border flex justify-center"
    style={{ boxShadow: "inset -1px 0px 0px rgba(228, 228, 228, 0.2)" }}
  >
    <div className="w-full h-full relative">{children}</div>
  </div>
);

// The text content inside of a sidebar item. Controls font and color.
export const SidebarLabel = ({ children }: Child) => (
  <p
    className="text-white whitespace-nowrap"
    style={{ fontStyle: "normal", fontWeight: 600, fontSize: 16 }}
  >
    {children}
  </p>
);
