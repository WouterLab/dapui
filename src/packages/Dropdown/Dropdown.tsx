import { DropdownProps } from "./types";
import { HTMLAttributes, useRef, useState } from "react";
import cn from "classnames";
import {
  Content,
  Header,
  Subtitle,
  Title,
  TitleWrapper,
  Wrapper,
  arrowStyles,
  hiddenStyles,
  reverseStyles,
} from "./styled";
import { COLORS } from "../Colors";

function ArrowSvg({ ...args }: HTMLAttributes<SVGElement>) {
  return (
    <svg
      fill='none'
      height='800px'
      width='800px'
      version='1.1'
      id='Layer_1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 330 330'
      xmlSpace='preserve'
      {...args}
    >
      <path
        id='XMLID_225_'
        d='M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z'
        fill={COLORS.BLACK[100]}
      />
    </svg>
  );
}

export function Dropdown({
  title,
  subtitle,
  children,
  isOpenDefault = false,
  className,
  arrowClassName,
  onChange,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(isOpenDefault);
  const ContentRef = useRef<HTMLDivElement>(null);
  const contentClassName = cn({
    [hiddenStyles]: !isOpen,
  });
  const arrowClass = cn(
    arrowStyles,
    {
      [reverseStyles]: isOpen,
    },
    arrowClassName,
  );
  const defaultMaxHeight = isOpen ? ContentRef.current?.scrollHeight : "0px";
  const [currentMaxHeight, setCurrentMaxHeight] = useState(defaultMaxHeight);

  const toggleOpening = () => {
    setIsOpen(!isOpen);
    const content = ContentRef.current;
    if (content) {
      if (currentMaxHeight === "0px") {
        setCurrentMaxHeight(content.scrollHeight + 30 + "px");
      } else {
        setCurrentMaxHeight("0px");
      }
    }

    if (onChange !== undefined) onChange();
  };

  return (
    <Wrapper className={className}>
      <Header onClick={toggleOpening}>
        <TitleWrapper>
          <Title>{title}</Title>
          <ArrowSvg className={arrowClass} />
        </TitleWrapper>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </Header>

      <Content
        className={contentClassName}
        ref={ContentRef}
        style={{ maxHeight: currentMaxHeight }}
      >
        {children}
      </Content>
    </Wrapper>
  );
}
