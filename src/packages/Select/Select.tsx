import cn from "classnames";
import { SelectProps } from "./types";
import { Wrapper, disabledStyles } from "./styled";

export function Select({ text, className, disabled, onClick, ...rest }: SelectProps) {
  const selectClassName = cn(
    {
      [disabledStyles]: disabled,
    },
    className,
  );

  return (
    <Wrapper className={selectClassName} onClick={onClick} disabled={disabled} {...rest}>
      {text}
    </Wrapper>
  );
}
