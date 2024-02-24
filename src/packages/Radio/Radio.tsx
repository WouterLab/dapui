import { RadioProps, RadioSize } from "./types";
import cn from "classnames";
import {
  Input,
  Label,
  Wrapper,
  bigLabelStyles,
  bigRadioStyles,
  mediumLabelStyles,
  mediumRadioStyles,
  smallLabelStyles,
  smallRadioStyles,
} from "./styled";

export function Radio({
  label,
  className,
  labelClassName,
  checked,
  setChecked,
  value,
  size,
}: RadioProps) {
  const getRadioSizeClassName = () => {
    switch (size) {
      case RadioSize.Big:
        return bigRadioStyles;
      case RadioSize.Small:
        return smallRadioStyles;
      default:
        return mediumRadioStyles;
    }
  };

  const getLabelSizeClassName = () => {
    switch (size) {
      case RadioSize.Big:
        return bigLabelStyles;
      case RadioSize.Small:
        return smallLabelStyles;
      default:
        return mediumLabelStyles;
    }
  };

  const radioClassName = cn(getRadioSizeClassName(), className);

  const labelClass = cn(getLabelSizeClassName(), labelClassName);

  const handleClick = () => {
    setChecked(value);
  };

  return (
    <Wrapper onClick={handleClick}>
      <Input className={radioClassName} type='radio' checked={checked} value={value} />
      <Label className={labelClass}>{label}</Label>
    </Wrapper>
  );
}
