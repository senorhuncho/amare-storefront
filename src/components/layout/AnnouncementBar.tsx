import { Container } from "@/components/ui/Container";

export function AnnouncementBar() {
  return (
    <div className="border-b border-border/60 bg-porcelain/70">
      <Container className="flex min-h-10 items-center justify-center gap-3 py-1.5 text-center text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-muted sm:justify-between sm:text-[0.7rem]">
        <p>Free US shipping on orders over $35</p>
        <p className="hidden text-[0.64rem] tracking-[0.24em] text-muted lg:block">
          Soft shine, wherever you go.
        </p>
      </Container>
    </div>
  );
}
