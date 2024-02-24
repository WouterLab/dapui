import { TemplateProps } from "./types";
import cn from "classnames";
import { Wrapper, templateStyles } from "./styled";

export function Template({ className }: TemplateProps) {
  const templateClassName = cn(templateStyles, className);

  return (
    <Wrapper className={templateClassName}>Example Template component for development</Wrapper>
  );
}
