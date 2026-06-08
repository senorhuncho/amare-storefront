import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ContainerProps = ComponentPropsWithoutRef<"div"> & {
  children: ReactNode;
};

export function Container({
  children,
  className,
  ...props
}: Readonly<ContainerProps>) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}
