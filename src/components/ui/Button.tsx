import type { MouseEventHandler, ReactNode } from "react";

import Link, { type LinkProps } from "next/link";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "text";
type ButtonSize = "sm" | "md" | "lg";
type NativeButtonType = "button" | "submit" | "reset";

type SharedButtonProps = {
  "aria-label"?: string;
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

type ButtonLinkProps = SharedButtonProps & {
  href: LinkProps["href"];
  prefetch?: LinkProps["prefetch"];
  rel?: string;
  replace?: LinkProps["replace"];
  scroll?: LinkProps["scroll"];
  target?: string;
};

type ButtonActionProps = SharedButtonProps & {
  disabled?: boolean;
  href?: undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: NativeButtonType;
};

type ButtonProps = ButtonLinkProps | ButtonActionProps;

function isButtonLink(props: ButtonProps): props is ButtonLinkProps {
  return typeof props.href !== "undefined";
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 text-sm",
  md: "min-h-11 px-5 text-sm sm:text-[0.95rem]",
  lg: "min-h-12 px-6 text-base",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-wine text-porcelain shadow-[var(--shadow-card)] hover:bg-berry focus-visible:ring-2 focus-visible:ring-wine/20",
  secondary:
    "border border-border bg-porcelain text-espresso hover:bg-ivory focus-visible:ring-2 focus-visible:ring-wine/15",
  ghost:
    "bg-transparent text-espresso hover:bg-porcelain/80 focus-visible:ring-2 focus-visible:ring-wine/15",
  text: "bg-transparent px-0 text-espresso hover:text-wine",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-[0.01em] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-45";

export function Button(props: Readonly<ButtonProps>) {
  const {
    children,
    className,
    fullWidth = false,
    size = "md",
    variant = "primary",
  } = props;

  const classes = cn(
    baseClasses,
    variant === "text" ? "min-h-0 rounded-none px-0 py-0" : sizeClasses[size],
    variantClasses[variant],
    fullWidth && "w-full",
    className,
  );

  if (isButtonLink(props)) {
    const { href, prefetch, rel, replace, scroll, target } = props;

    return (
      <Link
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

  const actionProps = props as ButtonActionProps;
  const { disabled, onClick, type = "button" } = actionProps;

  return (
    <button className={classes} disabled={disabled} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
