import { useMemo } from "react";
import { SwitchSize, SwitchProps } from "./types";
import { SizeMap } from "./constants";
import ReactSwitch from "react-switch";
import { COLORS } from "../Colors";

export function Switch({
  checked,
  onChange,
  disabled = false,
  size = SwitchSize.Big,
  onColor = COLORS.BLACK[0],
  offColor = COLORS.GREY[20],
  onHandleColor = COLORS.GREY[0],
  offHandleColor = COLORS.GREY[0],
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
