import cn from "classnames";
import { TextTag } from "./types";
import s from "./Typography.module.scss";

export function H1({ children, className, ...args }: TextTag) {
  const h1normal = cn(s.h1, className);
  return (
    <h1 className={h1normal} {...args}>
      {children}
    </h1>
  );
}

export function H1Bold({ children, className, ...args }: TextTag) {
  const h1bold = cn(s.h1, s.bold, className);
  return (
    <h1 className={h1bold} {...args}>
      {children}
    </h1>
  );
}

export function H2({ children, className, ...args }: TextTag) {
  const h2normal = cn(s.h2, className);
  return (
    <h2 className={h2normal} {...args}>
      {children}
    </h2>
  );
}

export function H2Bold({ children, className, ...args }: TextTag) {
  const h2bold = cn(s.h2, s.bold, className);
  return (
    <h2 className={h2bold} {...args}>
      {children}
    </h2>
  );
}

export function H3({ children, className, ...args }: TextTag) {
  const h3normal = cn(s.h3, className);
  return (
    <h3 className={h3normal} {...args}>
      {children}
    </h3>
  );
}

export function H3Bold({ children, className, ...args }: TextTag) {
  const h3bold = cn(s.h3, s.bold, className);
  return (
    <h3 className={h3bold} {...args}>
      {children}
    </h3>
  );
}

export function H4({ children, className, ...args }: TextTag) {
  const h4normal = cn(s.h4, className);
  return (
    <h4 className={h4normal} {...args}>
      {children}
    </h4>
  );
}

export function H4Bold({ children, className, ...args }: TextTag) {
  const h4bold = cn(s.h4, s.bold, className);
  return (
    <h4 className={h4bold} {...args}>
      {children}
    </h4>
  );
}

export function P1({ children, className, ...args }: TextTag) {
  const p1normal = cn(s.p1, className);
  return (
    <p className={p1normal} {...args}>
      {children}
    </p>
  );
}

export function P2({ children, className, ...args }: TextTag) {
  const p2normal = cn(s.p2, className);
  return (
    <p className={p2normal} {...args}>
      {children}
    </p>
  );
}

export function P3({ children, className, ...args }: TextTag) {
  const p3normal = cn(s.p3, className);
  return (
    <p className={p3normal} {...args}>
      {children}
    </p>
  );
}

export function P4({ children, className, ...args }: TextTag) {
  const p4normal = cn(s.p4, className);
  return (
    <p className={p4normal} {...args}>
      {children}
    </p>
  );
}
