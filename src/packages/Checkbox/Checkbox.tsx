import { CheckboxProps } from "./types";
import classNames from "classnames";
import { Wrapper, checkedStyles } from "./styled";

export const Checkbox = ({ checked, onChange, className }: CheckboxProps) => {
  const checkboxClassName = classNames(
    {
      [checkedStyles]: checked,
    },
    className,
  );
  return <Wrapper className={checkboxClassName} onClick={onChange}></Wrapper>;
};
