import { DividerProps } from "./types";
import s from "./Divider.module.scss";
import cn from "classnames";

export function Divider({ color = "#e5e5e5", margin = 20, className }: DividerProps) {
  const dividerStyles = {
    backgroundColor: color,
    marginTop: margin,
    marginBottom: margin,
  };
  const dividerClassName = cn(s.divider, className);

  return <div className={dividerClassName} style={dividerStyles} />;
}
