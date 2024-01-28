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
  onColor = COLORS.NEUTRAL[70],
  offColor = COLORS.NEUTRAL[40],
  onHandleColor = COLORS.NEUTRAL[10],
  offHandleColor = COLORS.NEUTRAL[0],
}: SwitchProps) {
  const { height, width, handleDiameter } = useMemo(
    () => SizeMap[size],
    [size],
  );

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
