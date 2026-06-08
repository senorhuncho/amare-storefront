import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type StorefrontPlaceholderPageProps = {
  description: string;
  eyebrow: string;
  title: string;
};

export function StorefrontPlaceholderPage({
  description,
  eyebrow,
  title,
}: Readonly<StorefrontPlaceholderPageProps>) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="rounded-[2.25rem] border border-border/80 bg-porcelain px-6 py-10 shadow-[var(--shadow-soft)] sm:px-10 sm:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-[2.7rem] leading-none tracking-[-0.04em] text-espresso sm:text-[4rem]">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted">{description}</p>
          <div className="mt-8">
            <Button href="/">Return to homepage</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
