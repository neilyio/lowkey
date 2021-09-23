import { ReactNodeArray, ReactNode } from "react";
import { UseTransitionProps, UseSpringProps } from "react-spring";

export type Height = { height?: number };
export type Index = { index?: number };
export type ZIndex = { zIndex?: number };
export type OnClick = { onClick?: () => any };
export type OnMouseEnter = { onMouseEnter?: () => any };
export type OnMouseLeave = { onMouseLeave?: () => any };
export type IsSelected = { isSelected: boolean };
export type Selected = { selected: number };
export type Child = { children: ReactNode };
export type ChildArray = { children: ReactNodeArray };
export type SpringConfig = Pick<UseSpringProps, "config">;
export type TransitionConfig = Pick<UseTransitionProps, "config">;
export type SidebarData = {
  sidebar: { label: string; bold: string; outline: string }[];
};
