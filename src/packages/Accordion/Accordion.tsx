import { AccordionProps, AccordionStep } from "./types";
import s from "./Accordion.module.scss";
import { H3 } from "../Typography";
import { HTMLAttributes, useRef, useState } from "react";
import cn from "classnames";
import { Divider } from "../Divider";

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
        fill='#000'
      />
    </svg>
  );
}

function Step({ title, content, arrowClassName, onChange, isOpenDefault }: AccordionStep) {
  const [isOpen, setIsOpen] = useState(isOpenDefault);
  const ContentRef = useRef<HTMLDivElement>(null);
  const contentClassName = cn(s.content, {
    [s.hidden]: !isOpen,
  });
  const arrowClass = cn(
    s.arrow,
    {
      [s.reverse]: isOpen,
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
        setCurrentMaxHeight(content.scrollHeight + 20 + "px");
      } else {
        setCurrentMaxHeight("0px");
      }
    }

    if (onChange !== undefined) onChange();
  };
  return (
    <div className={s.step}>
      <div className={s.header} onClick={toggleOpening}>
        <div className={s.title}>
          <H3>{title}</H3>
          <ArrowSvg className={arrowClass} />
        </div>
      </div>

      <div className={contentClassName} ref={ContentRef} style={{ maxHeight: currentMaxHeight }}>
        {content}
      </div>
    </div>
  );
}

export function Accordion({
  steps,
  className,
  dividerColor,
  defaultOpenedSteps,
  arrowClassName,
}: AccordionProps) {
  const accordionClassName = cn(s.accordion, className);

  return (
    <div className={accordionClassName}>
      {steps.map(({ title, content }, index) => {
        const lastIndex = steps.length - 1;
        const isOpened = defaultOpenedSteps?.includes(index);

        return (
          <>
            <Step
              title={title}
              key={index}
              content={content}
              arrowClassName={arrowClassName}
              isOpenDefault={isOpened}
            />
            {index !== lastIndex && <Divider margin={0} color={dividerColor} />}
          </>
        );
      })}
    </div>
  );
}
