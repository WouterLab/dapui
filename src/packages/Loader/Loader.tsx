import { COLORS } from "../Colors";
import { Wrapper } from "./styled";

export function Loader({ color = COLORS.NEUTRAL[80] }: { color?: string }) {
  return <Wrapper style={{ color: color }}></Wrapper>;
}
