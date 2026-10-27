"use client";

import { useEffect, useRef, useState } from "react";
import { Section, Heading, PageHero, FinalCta } from "@/components/sections/Primitives";
import lucaImg from "@/assets/team/luca.jpg.asset.json";
import rossellaImg from "@/assets/team/rossella.jpg.asset.json";
import andreaImg from "@/assets/team/andrea.jpg.asset.json";
import alessiaImg from "@/assets/team/alessia.jpg.asset.json";
import htsiAward from "@/assets/htsi-award.jpg.asset.json";
import pressStartup from "@/assets/press-startupitalia.png.asset.json";
import startupItaliaEvent from "@/assets/team/startupitalia-event.gif.asset.json";
import pressCorriere from "@/assets/press-corriere.png.asset.json";
import pressSole24 from "@/assets/press-sole24ore.png.asset.json";
import pressAnsa from "@/assets/press-ansa.webp.asset.json";
import pressSky from "@/assets/press-skytg24.png.asset.json";
import pressHtsi from "@/assets/press-htsi.png.asset.json";
import pressFirst from "@/assets/press-firstonline.png.asset.json";
import pressLmf from "@/assets/press-lamiafinanza.jpg.asset.json";

const team = [
  { name: "Luca Pineider", role: "Founder & CEO", img: lucaImg.url },
  { name: "Rossella Destefani", role: "Co-Founder & Head of Communication", img: rossellaImg.url },
  { name: "Andrea Ciaccia", role: "CTO", img: andreaImg.url },
  { name: "Alessia Cuccu", role: "Head of Sales & Partnership", img: alessiaImg.url },
];

const advisors = [
  { name: "Ermanno Tedeschi", role: "Senior Art Advisor e Market Strategist" },
  { name: "Federico De Nardis", role: "Ex WPP, ex CEO Sub Saharan Africa di GroupM" },
  { name: "Sylvain Querne", role: "Business exec, GM, board member e advisor, ex Meta ed eBay" },
  { name: "Paolo Giordano", role: "Head of frog in Italy, Capgemini Invent" },
  { name: "Franco Broccardi", role: "Dottore commercialista, esperto di economia del settore culturale" },
];

const milestones = [
  { year: "2024", items: ["Dicembre, primo lancio a Roma Arte in Nuvola"] },
  {
    year: "2025",
    items: [
      "Fase pilota con la casa d'asta Sant'Agostino",
      "Prime transazioni",
      "Artpay FAST",
      "Partner fintech di The Other Art Fair",
      "Prime transazioni live in fiera",
      "Artmatch, il discovery tool con AI",
    ],
  },
  {
    year: "2026",
    items: [
      "Fase di attivazione Heylight",
      "Go-live Scalapay",
      "The Phair Art Fair",
    ],
  },
  {
    year: "2027",
    items: [
      "Integrazioni CRM più profonde",
      "Focus su case d'asta e partner del mondo arte e design",
    ],
  },
];

const press = [
  { name: "Corriere della Sera", logo: pressCorriere.url },
  { name: "Il Sole 24 Ore", logo: pressSole24.url },
  { name: "ANSA", logo: pressAnsa.url },
  { name: "Sky TG24", logo: pressSky.url },
  { name: "HTSI", logo: pressHtsi.url },
  { name: "StartupItalia Top 100", logo: pressStartup.url },
  { name: "First Online", logo: pressFirst.url },
  { name: "La Mia Finanza", logo: pressLmf.url },
];

const numbers = [
  { value: 50, suffix: "M+", prefix: "€", label: "Volume gestito" },
  { value: 20, suffix: "", prefix: "+", label: "Partner attivi" },
  { value: 2, suffix: "", prefix: "", label: "Case d'asta integrate" },
  { value: 2, suffix: "", prefix: "", label: "Art fair partnership" },
];

function Counter({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const duration = 2000;
            const start = performance.now();
            const animate = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setCount(Math.floor(eased * target));
              if (progress < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

const ChiSiamo = () => (
  <>
    <PageHero
      title="Perché nel mercato dell'arte si pagano ancora opere da migliaia di euro con bonifici manuali ed email?"
      body="Siamo una startup fintech di Cagliari e costruiamo il pagamento rateale per le case d'asta e per gli altri canali di vendita dell'arte, con la missione di portare in questo settore gli standard di pagamento che il commercio digitale usa da anni."
    />

    <Section>
      <Heading label="Team" title="Le persone dietro Artpay." />
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((m) => (
          <div key={m.name} className="text-center hover-scale">
            <img loading="lazy"
              src={m.img}
              alt={m.name}
              className="aspect-square w-full rounded-t-xl object-cover object-top"
            />
            <div className="rounded-b-xl bg-primary px-4 py-2.5 text-primary-foreground">
              <h3 className="text-base font-medium">{m.name}</h3>
            </div>
            <p className="mt-3 text-sm text-slate">{m.role}</p>
          </div>
        ))}
      </div>
      <div className="mt-12">
        <span className="text-sm font-medium text-primary">Advisor</span>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {advisors.map((a) => (
            <div key={a.name} className="text-center hover-scale">
              <div className="rounded-sm bg-midnight-ink py-2.5 text-primary-foreground">
                <h3 className="text-base font-medium">{a.name}</h3>
              </div>
              <p className="mt-3 text-sm text-slate leading-relaxed">{a.role}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>

    <Section>
      <Heading label="Milestone" title="Il percorso." />
      <div className="mt-12 relative pl-8 border-l-2 border-border">
        {milestones.map((m) => (
          <div key={m.year} className="mb-10 last:mb-0">
            <span className="block text-2xl font-medium text-primary mb-3">{m.year}</span>
            <ul className="space-y-3">
              {m.items.map((item) => (
                <li key={item} className="relative text-muted-foreground leading-relaxed">
                  <span className="absolute -left-[41px] top-1.5 h-3.5 w-3.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>

    <Section>
      <Heading label="Riconoscimenti" title="Premi e rassegna stampa." />
      <div className="mt-12 grid lg:grid-cols-2 gap-6 items-stretch">
        <div className="p-8 rounded border border-border bg-white flex flex-col">
          <img
            src={htsiAward.url}
            alt="HTSI Best Luxury Startup 2025"
            className="w-full rounded mb-6"
            loading="lazy"
          />
          <h3 className="mt-4 text-2xl font-medium text-foreground">Best Luxury Startup 2025</h3>
          <p className="mt-1 text-sm text-primary">How To Spend It, Il Sole 24 Ore</p>
          <p className="mt-4 text-muted-foreground leading-relaxed text-[15px]">
            Best Luxury Startup 2025, assegnato da How To Spend It, il supplemento luxury del Sole 24 Ore.</p>
        </div>
        <div className="p-8 rounded border border-border bg-white flex flex-col">
          <img
            src={startupItaliaEvent.url}
            alt="StartupItalia Top 100"
            className="w-full rounded mb-6"
            loading="lazy"
          />
          <h3 className="mt-4 text-2xl font-medium text-foreground">StartupItalia Top 100</h3>
          <p className="mt-1 text-sm text-primary">StartupItalia</p>
          <p className="mt-4 text-muted-foreground leading-relaxed text-[15px]">
            Artpay è stata selezionata tra le 100 startup italiane più interessanti dell'anno da StartupItalia, la principale
            community italiana dedicata all'innovazione e all'ecosistema startup.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <span className="text-xs text-slate">Rassegna stampa</span>
        <p className="mt-3 max-w-3xl text-muted-foreground leading-relaxed">
          Le principali testate italiane hanno raccontato Artpay come un caso di innovazione nel mercato dell'arte.</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {press.map((p) => (
            <div key={p.name} className="h-32 border border-border rounded bg-white flex items-center justify-center px-4">
              <img src={p.logo} alt={p.name} className="max-h-20 max-w-full object-contain" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </Section>

    <section>
      <div className="mx-auto px-6 lg:px-12 py-24 grid grid-cols-2 lg:grid-cols-4 gap-12" style={{ maxWidth: "1200px" }}>
        {numbers.map((n) => (
          <div key={n.label} className="text-center">
            <span className="block text-6xl font-medium text-midnight-ink tracking-tight">
              <Counter target={n.value} prefix={n.prefix} suffix={n.suffix} />
            </span>
            <span className="mt-3 block text-base text-slate">{n.label}</span>
          </div>
        ))}
      </div>
    </section>

    <FinalCta
      title="Costruiamo il pagamento delle aste."
      primary={{ label: "Richiedi una demo", to: "/demo" }}
      secondary={{ label: "Contattaci", to: "/contatti" }}
    />
  </>
);

export default ChiSiamo;
