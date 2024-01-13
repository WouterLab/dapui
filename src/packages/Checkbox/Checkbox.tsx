import { CheckboxProps } from "./types";
import s from "./Checkbox.module.scss";

export const Checkbox = ({ checked, onChange }: CheckboxProps) => {
  return (
    <>
      <div
        className={`${s.checkbox} ${checked ? s.checked : ""}`}
        onClick={onChange}
      ></div>
    </>
  );
};
