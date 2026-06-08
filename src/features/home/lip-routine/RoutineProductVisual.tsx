import { ResponsiveImagePlaceholder } from "@/components/ui/ResponsiveImagePlaceholder";
import type { Product } from "@/lib/commerce";

type RoutineProductVisualProps = {
  featured?: boolean;
  product: Product;
};

const stepLabelByRoutine: Record<NonNullable<Product["routineStep"]>, string> = {
  prep: "Step-ready concept art",
  define: "Outline-led concept art",
  gloss: "Finish-first concept art",
};

export function RoutineProductVisual({
  featured = false,
  product,
}: Readonly<RoutineProductVisualProps>) {
  return (
    <div className="relative">
      <ResponsiveImagePlaceholder
        caption={
          product.routineStep
            ? stepLabelByRoutine[product.routineStep]
            : "Provisional routine visual pending verified product media."
        }
        className={featured ? "bg-gradient-to-br from-porcelain to-blush/25" : undefined}
        detail={product.finish.replace("-", " ")}
        label={product.imageDescriptor.label}
        ratio={featured ? "portrait" : "landscape"}
        tone={product.imageDescriptor.tone}
      />
    </div>
  );
}
