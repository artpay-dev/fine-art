"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, QrCode, Check } from "lucide-react";
import { Section, Heading } from "@/components/sections/Primitives";
import operaBlue from "@/assets/opera-blue.jpg.asset.json";
import RibbonFlow from "@/components/RibbonFlow";

const cardSegments: [number, number][] = [[0.1, 0.3], [0.35, 0.55], [0.62, 0.85]];

const steps = [
  { number: "01", title: "Crea il link", desc: "Inserisci lotto, importo e commissioni e il link è pronto in circa 20 secondi." },
  { number: "02", title: "Invia", desc: "Condividi il link con il collezionista direttamente in sala,  o via WhatsApp, email o QR." },
  { number: "03", title: "Incassa", desc: "Il cliente sceglie la sua opzione di rateizzazione preferita e il partner finanziario versa il 100% dell'importo alla conferma del piano." },
];

const FastMockup = ({ index }: { index: number }) => {
  const base = "w-full h-full rounded-xl bg-white p-4 overflow-hidden flex flex-col shadow-lg shadow-[#0B1215]/10 ring-1 ring-black/5";
  if (index === 0) {
    return (
      <div className={`${base} !p-0`}>
        <img src={operaBlue.url} alt="Opera" className="w-full h-16 shrink-0 object-cover rounded-t-xl" />
        <div className="p-3 flex flex-col flex-1 min-h-0">
          <div className="space-y-2">
            <div>
              <span className="block text-[10px] text-muted-foreground">Importo</span>
              <div className="mt-0.5 flex items-center rounded border border-gray-200 bg-white px-2.5 py-1.5 text-sm font-semibold text-foreground">€ 24.000</div>
            </div>
            <div>
              <span className="block text-[10px] text-muted-foreground">Opera</span>
              <div className="mt-0.5 rounded border border-gray-200 bg-white px-2.5 py-1.5 text-xs text-foreground">Senza titolo, 2023</div>
            </div>
          </div>
          <div className="mt-auto pt-3 rounded bg-primary py-1.5 text-center text-xs font-semibold text-white transition-transform duration-300 group-hover:scale-[1.04] group-hover:shadow-lg group-hover:shadow-primary/30">Genera link →</div>
        </div>
      </div>
    );
  }
  if (index === 1) {
    return (
      <div className={`${base} items-end justify-center gap-1.5`}>
        <div className="max-w-[85%] rounded-xl rounded-br-sm bg-[#f0f2f5] px-3 py-2 text-[11px] leading-snug text-foreground transition-all duration-500 group-hover:-translate-y-0.5">
          Ecco il link per la tua opera 👇
        </div>
        <div className="max-w-[90%] rounded-xl rounded-br-sm bg-[#f0f2f5] px-3 py-2.5 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:shadow-md">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded bg-primary/10 text-primary transition-transform duration-500 group-hover:scale-110"><QrCode className="h-4 w-4" /></div>
            <div className="min-w-0 text-left">
              <div className="text-[11px] font-semibold text-foreground">pay.artpay.art/x8f2</div>
              <div className="text-[10px] text-muted-foreground">€ 24.000, fino a 84 mesi</div>
            </div>
          </div>
        </div>
        <div className="text-[9px] text-muted-foreground">Inviato via WhatsApp</div>
      </div>
    );
  }
  return (
    <div className={`${base} items-center justify-center text-center`}>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary/20"><Check className="h-6 w-6 transition-transform duration-500 group-hover:scale-125" /></div>
      <div className="mt-3 text-[10px] text-muted-foreground">Accreditato sul tuo conto</div>
      <div className="text-2xl font-bold text-foreground transition-transform duration-500 group-hover:scale-105">€ 24.000</div>
      <div className="mt-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-700 transition-colors duration-300 group-hover:bg-emerald-600 group-hover:text-white">100% versato subito</div>
    </div>
  );
};

const FastCard = ({ step, index }: { step: typeof steps[0]; index: number }) => {
  const [glowPos, setGlowPos] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setGlowPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseLeave = () => setGlowPos(null);

  return (
    <div
      className={`group relative flex flex-col h-[560px] rounded p-7 transition-transform duration-500 hover:scale-[1.02] bg-[length:200%_200%] animate-gradient-shift border shadow-[0_16px_48px_-12px_rgba(6,27,49,0.14)] ${glowPos ? "border-transparent" : "border-[#3D4FED]/10"}`}
      style={{
        backgroundImage:
          "linear-gradient(to top, #27339F 0%, #27339F 18%, #3D4FED 40%, #ffffff 62%, #ffffff 100%)",
        animationDuration: `${8 + index * 3}s`,
        animationDelay: `${index * -2.5}s`,
        animationDirection: index % 2 === 0 ? "alternate" : "alternate-reverse",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded opacity-90">
        <RibbonFlow height={560} lineCount={34} speed={0.5} segment={cardSegments[index]} phase={index * 2.3} />
      </div>
      {glowPos && (
        <div
          className="pointer-events-none absolute z-20 rounded transition-opacity duration-300"
          style={{
            inset: "-1px",
            padding: "1px",
            background: `radial-gradient(400px circle at ${glowPos.x}px ${glowPos.y}px, rgba(61,79,237,0.9) 0%, rgba(96,112,240,0.6) 40%, transparent 70%)`,
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
          }}
        />
      )}
      <div className="relative z-10 flex items-baseline gap-2">
        <span className="text-sm font-normal text-foreground/40">{step.number}</span>
        <h3 className="text-xl lg:text-[22px] font-medium text-foreground leading-tight">{step.title}</h3>
      </div>
      <div className="relative z-10 mt-5 flex-1 flex items-center justify-center overflow-hidden">
        <div className="w-full max-w-[220px] h-full max-h-[250px]">
          <FastMockup index={index} />
        </div>
      </div>
      <div className="relative z-10 mt-5">
        <p className="text-sm text-white leading-relaxed">{step.desc}</p>
      </div>
    </div>
  );
};

const FastShowcase = ({ title = "Dal martelletto al pagamento in venti secondi.", firstStep }: { title?: string; firstStep?: string }) => (
  <Section border={false}>
    <Heading label="Come funziona" title={title} />
    <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
      {steps.map((step, i) => (
        <FastCard key={step.number} step={i === 0 && firstStep ? { ...step, desc: firstStep } : step} index={i} />
      ))}
    </div>
    <Link href="/come-funziona" className="mt-10 inline-flex items-center gap-1.5 text-sm text-primary hover:gap-2.5 transition-all">
      Vedi il flusso completo <ArrowRight className="h-3.5 w-3.5" />
    </Link>
  </Section>
);

export default FastShowcase;
