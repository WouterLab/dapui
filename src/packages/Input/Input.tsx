import s from "./Input.module.scss";
import cn from "classnames";
import { InputProps, InputSize, InputVariant } from "./types";
import { ChangeEvent, useState } from "react";

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
        return s.big;
      case InputSize.Small:
        return s.small;
      default:
        return s.medium;
    }
  };

  const getVariant = () => {
    switch (variant) {
      case InputVariant.Outline:
        return s.outline;
      default:
        return s.filled;
    }
  };

  const inputClass = cn(
    s.input,
    getVariant(),
    getSize(),
    {
      [s.disabled]: disabled,
    },
    className,
  );

  return (
    <input
      value={inputValue}
      className={inputClass}
      disabled={disabled}
      onChange={handleChange}
      placeholder={placeholder}
      {...rest}
    />
  );
}
