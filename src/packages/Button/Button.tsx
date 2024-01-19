import cn from "classnames";
import { ButtonProps, ButtonShape, ButtonSize, ButtonVariant } from "./types";
import {
  Wrapper,
  bigStyles,
  disabledStyles,
  roundStyles,
  ghostStyles,
  mediumStyles,
  outlineStyles,
  smallStyles,
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
        return bigStyles;
      case ButtonSize.Small:
        return smallStyles;
      default:
        return mediumStyles;
    }
  };

  const getVariant = () => {
    switch (variant) {
      case ButtonVariant.Outline:
        return outlineStyles;
      case ButtonVariant.Ghost:
        return ghostStyles;
      default:
        return "";
    }
  };

  const buttonClass = cn(
    getVariant(),
    getSize(),
    {
      [disabledStyles]: disabled,
      [roundStyles]: shape === ButtonShape.Round,
    },
    className,
  );

  return (
    <Wrapper className={buttonClass} onClick={onClick} disabled={disabled} {...rest}>
      {text}
    </Wrapper>
  );
}
