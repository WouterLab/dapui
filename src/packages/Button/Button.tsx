import s from "./Button.module.scss";
import cn from "classnames";
import { ButtonProps, ButtonShape, ButtonSize, ButtonVariant } from "./types";

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
        return s.big;
      case ButtonSize.Small:
        return s.small;
      default:
        return s.medium;
    }
  };

  const getVariant = () => {
    switch (variant) {
      case ButtonVariant.Outline:
        return s.outline;
      case ButtonVariant.Ghost:
        return s.ghost;
      default:
        return s.filled;
    }
  };

  const buttonClass = cn(
    s.button,
    getVariant(),
    getSize(),
    {
      [s.disabled]: disabled,
      [s.round]: shape === ButtonShape.Round,
    },
    className,
  );

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled} {...rest}>
      {text}
    </button>
  );
}
