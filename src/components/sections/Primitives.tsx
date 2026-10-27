"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { Button, buttonVariants } from "@/components/ui/button";

const MAX = { maxWidth: "1200px" };

/* ---------- Layout container ---------- */
export const Container = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`mx-auto px-6 lg:px-12 ${className}`} style={MAX}>
    {children}
  </div>
);

/* ---------- Section wrapper ---------- */
export const Section = ({
  children,
  className = "",
  border = true,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  border?: boolean;
  id?: string;
}) => (
  <section id={id} className={`relative py-24 lg:py-32 ${border ? "border-t border-border" : ""} ${className}`}>
    <Container>{children}</Container>
  </section>
);

/* ---------- Eyebrow label ---------- */
export const Label = ({ children }: { children: React.ReactNode }) => (
  <span className="block text-sm text-muted-foreground">
    {children}
  </span>
);

/* ---------- CTA buttons ---------- */
export interface CtaConfig {
  label: string;
  to: string;
}

export const CtaRow = ({
  primary,
  secondary,
  className = "",
  secondaryVariant = "heroOutline",
}: {
  primary?: CtaConfig;
  secondary?: CtaConfig;
  className?: string;
  secondaryVariant?: VariantProps<typeof buttonVariants>["variant"];
}) => (
  <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
    {primary && (
      <Button asChild variant="hero" size="lg" className="group gap-2">
        <Link href={primary.to}>
          {primary.label}
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </Button>
    )}
    {secondary && (
      <Button asChild variant={secondaryVariant} size="lg">
        <Link href={secondary.to}>{secondary.label}</Link>
      </Button>
    )}
  </div>
);

/* ---------- Page hero ---------- */
const heroHaloPositions: Record<string, React.CSSProperties> = {
  "top-right": { top: "-35%", right: "-25%", width: "90%", height: "140%" },
  "top-left": { top: "-40%", left: "-28%", width: "95%", height: "150%" },
  "bottom-left": { bottom: "-60%", left: "-22%", width: "100%", height: "150%" },
  "bottom-right": { bottom: "-55%", right: "-30%", width: "105%", height: "155%" },
  center: { top: "-45%", left: "10%", width: "100%", height: "160%" },
};

export const PageHero = ({
  label,
  title,
  body,
  primary,
  secondary,
  halo = "top-right",
  side,
}: {
  label?: string;
  title: React.ReactNode;
  body?: React.ReactNode;
  primary?: CtaConfig;
  secondary?: CtaConfig;
  halo?: keyof typeof heroHaloPositions;
  side?: React.ReactNode;
}) => {
  const haloRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = haloRef.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      el.style.transform = `translate3d(0, ${window.scrollY * 0.25}px, 0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
  <section className="relative isolate overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
    <div
      ref={haloRef}
      aria-hidden="true"
      className="absolute pointer-events-none"
      style={{
        ...heroHaloPositions[halo],
        zIndex: 0,
        maskImage: "radial-gradient(closest-side, rgba(0,0,0,1), rgba(0,0,0,0) 100%)",
        WebkitMaskImage: "radial-gradient(closest-side, rgba(0,0,0,1), rgba(0,0,0,0) 100%)",
      }}
    >
      <div className="hero-halo w-full h-full" style={{ filter: "blur(72px)", opacity: 0.2 }} />
    </div>
    <Container className="relative z-10">
      <div className={side ? "grid gap-16 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-24 lg:items-center" : ""}>
        <div className="max-w-3xl">
          {label && <Label>{label}</Label>}
          <h1
            className="mt-4 text-foreground"
            style={{ fontSize: "clamp(2.64rem, 5.5vw, 57px)", lineHeight: 1.05, fontWeight: 500, letterSpacing: "-0.030em" }}
          >
            {title}
          </h1>
          {body && <p className="mt-6 text-lg text-steel leading-relaxed">{body}</p>}
          {(primary || secondary) && <CtaRow primary={primary} secondary={secondary} className="mt-8" />}
        </div>
        {side && (
          <div className="justify-self-start lg:justify-self-end">
            {side}
          </div>
        )}
      </div>
    </Container>
  </section>
  );
};

/* ---------- Section heading ---------- */
export const Heading = ({
  label,
  title,
  className = "",
}: {
  label?: React.ReactNode;
  title: React.ReactNode;
  className?: string;
}) => (
  <div className={className}>
    {label && <Label>{label}</Label>}
    <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground ${label ? "mt-4" : ""}`}>{title}</h2>
  </div>
);

/* ---------- Numbered steps ---------- */
export interface Step {
  number: string;
  title: string;
  desc: string;
}

export const Steps = ({ steps }: { steps: Step[] }) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {steps.map((step) => (
      <div key={step.number} className="group">
        <span className="text-sm text-primary font-medium">{step.number}</span>
        <h3 className="mt-3 text-xl font-medium text-foreground">{step.title}</h3>
        <p className="mt-2 text-muted-foreground leading-relaxed">{step.desc}</p>
      </div>
    ))}
  </div>
);

/* ---------- Feature / info card ---------- */
export const InfoCard = ({
  title,
  desc,
  highlight = false,
  image,
  plain = false,
  bare = false,
  icon,
}: {
  title: string;
  desc: React.ReactNode;
  highlight?: boolean;
  image?: { url: string; alt: string };
  plain?: boolean;
  bare?: boolean;
  icon?: React.ReactNode;
}) => (
  <div
    className={`${plain ? "rounded-sm" : bare ? "p-8 rounded" : "p-8 rounded border border-border bg-card hover:border-primary/30"} transition-colors duration-300 ${highlight && !plain ? "border-primary/40 bg-card" : ""}`}
  >
    {icon && <div className="mb-5">{icon}</div>}
    {image && (
      <div
        className={`relative overflow-hidden ${plain ? "z-10 rounded-sm aspect-[3/4] lg:aspect-auto lg:h-[420px] transition-[margin] duration-500 ease-out lg:group-hover:-mx-[15px]" : "rounded"}`}
      >
        <img
          src={image.url}
          alt={image.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500"
        />
      </div>
    )}
    <h3 className={image ? "mt-6 text-lg font-medium text-foreground" : "text-lg font-medium text-foreground"}>{title}</h3>
    <p className="mt-3 text-muted-foreground leading-relaxed text-[15px]">{desc}</p>
  </div>
);

/* ---------- Compliance / trust banner ---------- */
export const TrustBanner = ({ children }: { children: React.ReactNode }) => (
  <div className="p-6 rounded border border-border bg-card">
    <p className="text-sm text-foreground leading-relaxed">{children}</p>
  </div>
);

/* ---------- Final CTA section ---------- */
export const FinalCta = ({
  title,
  subtext,
  primary,
  secondary,
}: {
  title: React.ReactNode;
  subtext?: string;
  primary: CtaConfig;
  secondary?: CtaConfig;
}) => (
  <Section className="text-center">
    <h2 className="text-3xl sm:text-4xl lg:text-6xl font-medium text-foreground max-w-3xl mx-auto leading-[1.02]">
      {title}
    </h2>
    {subtext && <p className="mt-6 text-muted-foreground max-w-xl mx-auto leading-relaxed">{subtext}</p>}
    <CtaRow primary={primary} secondary={secondary} className="mt-10 justify-center" />
  </Section>
);
