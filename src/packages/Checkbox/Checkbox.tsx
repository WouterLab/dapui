import { CheckboxProps } from "./types";
import s from "./Checkbox.module.scss";
import classNames from "classnames";

export const Checkbox = ({ checked, onChange, className }: CheckboxProps) => {
  const checkboxClassName = classNames(
    s.checkbox,
    {
      [s.checked]: checked,
    },
    className,
  );
  return <div className={checkboxClassName} onClick={onChange}></div>;
};
