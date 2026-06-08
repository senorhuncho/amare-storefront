import type { MouseEventHandler, ReactNode } from "react";

import Link, { type LinkProps } from "next/link";

import { cn } from "@/lib/utils";

type IconButtonVariant = "ghost" | "solid";
type IconButtonSize = "sm" | "md";
type NativeButtonType = "button" | "submit" | "reset";

type SharedIconButtonProps = {
  "aria-label": string;
  children: ReactNode;
  className?: string;
  size?: IconButtonSize;
  variant?: IconButtonVariant;
};

type IconButtonLinkProps = SharedIconButtonProps & {
  href: LinkProps["href"];
  prefetch?: LinkProps["prefetch"];
  rel?: string;
  replace?: LinkProps["replace"];
  scroll?: LinkProps["scroll"];
  target?: string;
};

type IconButtonActionProps = SharedIconButtonProps & {
  disabled?: boolean;
  href?: undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: NativeButtonType;
};

type IconButtonProps = IconButtonLinkProps | IconButtonActionProps;

function isIconButtonLink(props: IconButtonProps): props is IconButtonLinkProps {
  return typeof props.href !== "undefined";
}

const variantClasses: Record<IconButtonVariant, string> = {
  ghost:
    "border border-transparent bg-transparent text-espresso hover:border-border/70 hover:bg-porcelain/84",
  solid: "border border-border/80 bg-porcelain/88 text-espresso hover:bg-ivory",
};

const sizeClasses: Record<IconButtonSize, string> = {
  sm: "h-10 w-10",
  md: "h-11 w-11",
};

const baseClasses =
  "inline-flex items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine/20 disabled:cursor-not-allowed disabled:opacity-45";

export function IconButton(props: Readonly<IconButtonProps>) {
  const { children, className, size = "md", variant = "ghost" } = props;

  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if (isIconButtonLink(props)) {
    const { href, prefetch, rel, replace, scroll, target } = props;

    return (
      <Link
        aria-label={props["aria-label"]}
        className={classes}
        href={href}
        prefetch={prefetch}
        rel={rel}
        replace={replace}
        scroll={scroll}
        target={target}
      >
        {children}
      </Link>
    );
  }

  const actionProps = props as IconButtonActionProps;
  const { disabled, onClick, type = "button" } = actionProps;

  return (
    <button
      aria-label={props["aria-label"]}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
