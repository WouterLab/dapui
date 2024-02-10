import { CheckboxProps, CheckboxVariant } from "./types";
import classNames from "classnames";
import { Wrapper, checkStyles, outlineStyles } from "./styled";
import { HTMLAttributes } from "react";
import { COLORS } from "..";

function CheckSvg({
  markColor,
  ...args
}: HTMLAttributes<SVGElement> & { markColor: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 30 30'
      width='28px'
      height='28px'
      className={checkStyles}
      {...args}
    >
      <path
        d='M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z'
        fill={markColor}
      />
    </svg>
  );
}

export const Checkbox = ({
  checked,
  onChange,
  className,
  variant = CheckboxVariant.Filled,
  markColor = COLORS.NEUTRAL[90],
}: CheckboxProps) => {
  const checkboxClassName = classNames(
    {
      [outlineStyles]: variant === CheckboxVariant.Outline,
    },
    className,
  );
  return (
    <Wrapper className={checkboxClassName} onClick={onChange}>
      {checked && <CheckSvg markColor={markColor} />}
    </Wrapper>
  );
};
