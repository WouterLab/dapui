import { SwitchSize } from "./types";

export const SizeMap: Record<
  SwitchSize,
  { height: number; width: number; handleDiameter: number }
> = {
  [SwitchSize.Small]: {
    width: 26,
    height: 14,
    handleDiameter: 10,
  },
  [SwitchSize.Big]: {
    width: 40,
    height: 22,
    handleDiameter: 18,
  },
};
