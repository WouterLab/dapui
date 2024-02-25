import { LinkProps } from "./types";
import { Wrapper, arrowStyles } from "./styled";
import { HTMLAttributes } from "react";
import { COLORS } from "../Colors";
import cn from "classnames";

function ArrowSvg({ ...args }: HTMLAttributes<SVGElement>) {
  return (
    <svg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' {...args}>
      <path
        strokeWidth={4}
        stroke={COLORS.NEUTRAL[60]}
        fill={COLORS.NEUTRAL[60]}
        d='M3.41,2H16V0H1A1,1,0,0,0,0,1V17H2V3.41L30.29,31.71l1.41-1.41Z'
      />
    </svg>
  );
}

export function Link({ className, children, noIcon, href, onClick }: LinkProps) {
  const arrowClassName = cn(arrowStyles, className);

  return (
    <Wrapper className={className} target='_blank' href={href} onClick={onClick}>
      <span>{children}</span>
      {!noIcon && <ArrowSvg className={arrowClassName} />}
    </Wrapper>
  );
}
