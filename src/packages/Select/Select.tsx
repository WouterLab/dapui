import cn from "classnames";
import { SelectProps, SelectShape, SelectSize, SelectVariant } from "./types";
import {
  bigStyles,
  selectStyles,
  disabledStyles,
  mediumStyles,
  menuListStyles,
  menuStyles,
  optionStyles,
  outlineStyles,
  roundStyles,
  smallStyles,
  arrowActiveStyles,
  arrowStyles,
} from "./styled";
import ReactSelect from "react-select";

export function Select({
  options,
  className,
  variant = SelectVariant.Filled,
  shape = SelectShape.Square,
  disabled,
  size = SelectSize.Medium,
  ...args
}: SelectProps) {
  const getSize = () => {
    switch (size) {
      case SelectSize.Big:
        return bigStyles;
      case SelectSize.Small:
        return smallStyles;
      default:
        return mediumStyles;
    }
  };

  const selectClassName = cn(
    selectStyles,
    getSize(),
    {
      [disabledStyles]: disabled,
      [roundStyles]: shape === SelectShape.Round,
      [outlineStyles]: variant === SelectVariant.Outline,
    },
    className,
  );

  const optionClassName = cn(
    optionStyles,
    getSize(),
    {
      [roundStyles]: shape === SelectShape.Round,
      [outlineStyles]: variant === SelectVariant.Outline,
    },
    className,
  );

  return (
    <ReactSelect
      options={options}
      classNames={{
        control: () => selectClassName,
        menu: () => menuStyles,
        menuList: () => menuListStyles,
        option: () => optionClassName,
        indicatorsContainer: (state) =>
          state.selectProps.menuIsOpen ? arrowActiveStyles : arrowStyles,
      }}
      unstyled
      isSearchable={false}
      {...args}
    />
  );
}
