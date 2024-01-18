import { CheckboxProps } from "./types";
import classNames from "classnames";
import { Wrapper, cssChecked } from "./styled";

export const Checkbox = ({ checked, onChange, className }: CheckboxProps) => {
  const checkboxClassName = classNames(
    {
      [cssChecked]: checked,
    },
    className,
  );
  return <Wrapper className={checkboxClassName} onClick={onChange}></Wrapper>;
};
