import cn from "classnames";
import { InputProps, InputSize, InputVariant } from "./types";
import { ChangeEvent, useState } from "react";
import { Wrapper, cssBig, cssDisabled, cssMedium, cssOutline, cssSmall } from "./styled";

export function Input({
  value,
  variant = InputVariant.Filled,
  size = InputSize.Medium,
  className,
  disabled,
  onChange,
  placeholder,
  ...rest
}: InputProps) {
  const [inputValue, setInputValue] = useState(value || "");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);

    if (onChange) {
      onChange(e);
    }
  };

  const getSize = () => {
    switch (size) {
      case InputSize.Big:
        return cssBig;
      case InputSize.Small:
        return cssSmall;
      default:
        return cssMedium;
    }
  };

  const getVariant = () => {
    switch (variant) {
      case InputVariant.Outline:
        return cssOutline;
      default:
        return "";
    }
  };

  const inputClass = cn(
    getVariant(),
    getSize(),
    {
      [cssDisabled]: disabled,
    },
    className,
  );

  return (
    <Wrapper
      value={inputValue}
      className={inputClass}
      disabled={disabled}
      onChange={handleChange}
      placeholder={placeholder}
      {...rest}
    />
  );
}
