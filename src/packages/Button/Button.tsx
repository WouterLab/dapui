import cn from "classnames";
import { ButtonProps, ButtonShape, ButtonSize, ButtonVariant } from "./types";
import {
  Wrapper,
  cssBig,
  cssDisabled,
  cssRound,
  cssGhost,
  cssMedium,
  cssOutline,
  cssSmall,
} from "./styled";

export function Button({
  text,
  variant = ButtonVariant.Filled,
  shape = ButtonShape.Square,
  size = ButtonSize.Medium,
  className,
  disabled,
  onClick,
  ...rest
}: ButtonProps) {
  const getSize = () => {
    switch (size) {
      case ButtonSize.Big:
        return cssBig;
      case ButtonSize.Small:
        return cssSmall;
      default:
        return cssMedium;
    }
  };

  const getVariant = () => {
    switch (variant) {
      case ButtonVariant.Outline:
        return cssOutline;
      case ButtonVariant.Ghost:
        return cssGhost;
      default:
        return "";
    }
  };

  const buttonClass = cn(
    getVariant(),
    getSize(),
    {
      [cssDisabled]: disabled,
      [cssRound]: shape === ButtonShape.Round,
    },
    className,
  );

  return (
    <Wrapper className={buttonClass} onClick={onClick} disabled={disabled} {...rest}>
      {text}
    </Wrapper>
  );
}
