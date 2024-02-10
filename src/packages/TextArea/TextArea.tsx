import cn from "classnames";
import { TextAreaProps, TextAreaSize, TextAreaVariant } from "./types";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import {
  Wrapper,
  bigStyles,
  disabledStyles,
  mediumStyles,
  outlineStyles,
  smallStyles,
} from "./styled";

export function TextArea({
  value,
  variant = TextAreaVariant.Filled,
  size = TextAreaSize.Medium,
  className,
  disabled,
  onChange,
  placeholder,
  onEnter,
  ...args
}: TextAreaProps) {
  const [TextAreaValue, setTextAreaValue] = useState(value || "");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(e.target.value);

    if (onChange) {
      onChange(e);
    }
  };

  const getSizeClassName = () => {
    switch (size) {
      case TextAreaSize.Big:
        return bigStyles;
      case TextAreaSize.Small:
        return smallStyles;
      default:
        return mediumStyles;
    }
  };

  const getVariantClassName = () => {
    switch (variant) {
      case TextAreaVariant.Outline:
        return outlineStyles;
      default:
        return "";
    }
  };

  const TextAreaClass = cn(
    getVariantClassName(),
    getSizeClassName(),
    {
      [disabledStyles]: disabled,
    },
    className,
  );

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      onEnter && onEnter();
    }
  };

  return (
    <Wrapper
      value={TextAreaValue}
      className={TextAreaClass}
      disabled={disabled}
      onChange={handleChange}
      placeholder={placeholder}
      onKeyDown={(e) => handleKeyDown(e)}
      {...args}
    />
  );
}
