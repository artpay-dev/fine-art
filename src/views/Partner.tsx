"use client";

import { useEffect, useState } from "react";
import { Section, Heading, PageHero, FinalCta } from "@/components/sections/Primitives";
import logoSantander from "@/assets/santander.png";
import logoKlarna from "@/assets/klarna.webp";
import conformita from "@/assets/conformita-ccd2.png";

const partners = [
  {
    title: "Santander Consumer Finance",
    desc: "Uno dei principali operatori europei del credito al consumo, con importi e durate adatti al mercato dell'arte. Integrazione attiva.",
    logo: { url: logoSantander.src, alt: "Santander Consumer Finance" },
  },
  {
    title: "Klarna",
    desc: "BNPL per acquisti online e ticket più accessibili. Integrazione attiva.",
    logo: { url: logoKlarna.src, alt: "Klarna" },
  },
];

const Partner = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Nuovo partner in arrivo";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, 80 + Math.random() * 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <PageHero
      label="Partner finanziari"
      title="Partner finanziari regolamentati in un'unica interfaccia."
      body="Collaboriamo con i principali player finanziari per garantire sicurezza e affidabilità in ogni singola transazione."
    />

    <Section>
      <div className="grid md:grid-cols-3 gap-6">
        {partners.map((p) => (
          <div
            key={p.title}
            className="p-8 rounded border border-border bg-card transition-colors duration-300 hover:border-primary/30"
          >
            <div className="flex h-20 items-center justify-center">
              <img src={p.logo.url} alt={p.logo.alt} className="max-h-16 w-auto max-w-[230px] object-contain" loading="lazy" />
            </div>
            <h3 className="mt-6 text-lg font-medium text-foreground">{p.title}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed text-[15px]">{p.desc}</p>
          </div>
        ))}
        <div className="relative border border-dashed border-pewter/50 rounded bg-muted/40 flex flex-col items-center justify-center p-6">
          <span className="absolute top-3 right-3 text-[10px] font-semibold text-white bg-primary px-2 py-0.5 rounded">
            Novità
          </span>
          <span className="text-sm text-pewter font-mono text-center">
            {typedText}
            <span className="inline-block w-[2px] h-[1em] bg-pewter ml-0.5 align-middle animate-cursor-blink" />
          </span>
          <p className="mt-2 text-xs text-pewter/80 text-center max-w-[28ch]">{"\n"}</p>
        </div>
      </div>
    </Section>

    <Section>
      <div className="grid gap-12 lg:gap-20 lg:grid-cols-2 lg:items-center">
        <div className="overflow-hidden rounded shadow-lg shadow-[#0B1215]/5 ring-1 ring-black/5">
          <img
            src={(conformita as unknown as { src: string }).src}
            alt="Conformità CCD2"
            className="aspect-video w-full object-cover"
          />
        </div>
        <div>
          <Heading title="Progettato per la conformità alla CCD2." />
          <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
            <p>Il D.Lgs. 212/2025 regola gli intermediari del credito al consumo. Artpay fornisce la tecnologia, mentre credito e fondi restano in capo ai partner finanziari, con un processo digitale dalla firma all'onboarding tramite Stripe Connect.</p>
          </div>
        </div>
      </div>
    </Section>

    <FinalCta
      title="Vuoi capire come si applica alla tua casistica?"
      subtext="Ti spieghiamo architettura e flusso in una demo dedicata."
      primary={{ label: "Richiedi una demo", to: "/demo" }}
    />
  </>
  );
};

export default Partner;
