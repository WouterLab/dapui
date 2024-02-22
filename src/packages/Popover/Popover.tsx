import { PopoverProps } from "./types";
import cn from "classnames";
import { Tooltip } from "react-tooltip";
import { popoverStyles } from "./styled";

export function Popover({
  anchor,
  children,
  className,
  placement,
  clickable,
  noArrow,
}: PopoverProps) {
  const popoverClassName = cn(popoverStyles, className);

  return (
    <Tooltip
      place={placement}
      clickable={clickable}
      noArrow={noArrow}
      id={anchor}
      className={popoverClassName}
    >
      {children}
    </Tooltip>
  );
}
