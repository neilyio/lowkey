import React from "react";
import { useTransition, animated } from "react-spring";
import { clamp } from "lodash";

export const LayerStack = ({ children }: any) =>
  children.map((child, index) => (
    <div
      key={index}
      className="w-full h-full absolute"
      style={{ zIndex: index }}
    >
      {child}
    </div>
  ));


export const FadeBetween = ({ children, selected, config = {} }) => {
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
