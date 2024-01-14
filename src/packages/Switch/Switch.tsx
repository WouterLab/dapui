import { useMemo } from "react";
import { SwitchSize, SwitchProps } from "./types";
import { SizeMap } from "./constants";
import ReactSwitch from "react-switch";

export function Switch({
  checked,
  onChange,
  disabled = false,
  size = SwitchSize.Big,
  onColor = "#2b2b2b",
  offColor = "#b0b0b0",
  onHandleColor = "#fff",
  offHandleColor = "#fff",
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
