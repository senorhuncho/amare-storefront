import { Container } from "@/components/ui/Container";

export function AnnouncementBar() {
  return (
    <div className="border-b border-border/80 bg-porcelain/90">
      <Container className="flex min-h-11 items-center justify-center gap-3 py-2 text-center text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-muted sm:justify-between">
        <p>Free US shipping on orders over $35</p>
        <p className="hidden text-[0.68rem] tracking-[0.26em] text-rose lg:block">
          Soft shine, wherever you go.
        </p>
      </Container>
    </div>
  );
}
