import { HTMLAttributes } from "react";

export interface TextTag extends HTMLAttributes<HTMLParagraphElement> {
  children: string;
}
