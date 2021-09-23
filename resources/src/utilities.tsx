import React, { Fragment } from "react";
import { useTransition, animated } from "react-spring";
import { clamp } from "lodash";
import { ChildArray, Selected, TransitionConfig } from "./types";

export const LayerStack = ({ children }: ChildArray) => (
  <Fragment>
    {children.map((child, index) => (
      <div
        key={index}
        className="w-full h-full absolute"
        style={{ zIndex: index }}
      >
        {child}
      </div>
    ))}
  </Fragment>
);

export const FadeBetween = ({
  children,
  selected,
  config = {},
}: ChildArray & Selected & TransitionConfig) => {
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
