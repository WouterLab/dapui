import { useMemo } from "react";
import { SwitchSize, SwitchProps } from "./types";
import { SizeMap } from "./constants";
import ReactSwitch from "react-switch";
import { COLORS_DEFAULT } from "../Colors";

export function Switch({
  checked,
  onChange,
  disabled = false,
  size = SwitchSize.Big,
  onColor = COLORS_DEFAULT.BLACK.LIGHT,
  offColor = COLORS_DEFAULT.GREY.LIGHT,
  onHandleColor = COLORS_DEFAULT.WHITE.LIGHT,
  offHandleColor = COLORS_DEFAULT.WHITE.LIGHT,
}: SwitchProps) {
  const { height, width, handleDiameter } = useMemo(() => SizeMap[size], [size]);

  return (
    <ReactSwitch
      handleDiameter={handleDiameter}
      height={height}
      width={width}
      uncheckedIcon={false}
      checkedIcon={false}
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      onColor={onColor}
      offColor={offColor}
      onHandleColor={onHandleColor}
      offHandleColor={offHandleColor}
    />
  );
}
