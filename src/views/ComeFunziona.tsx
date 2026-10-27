"use client";

import { useState } from "react";
import {
  Zap,
  Users,
  Link as LinkIcon,
  CalendarRange,
  LayoutDashboard,
  ShoppingCart,
  Check,
  QrCode,
  ArrowRight,
  Store,
  User,
  type LucideIcon,
} from "lucide-react";
import { Section, Heading, PageHero, FinalCta, Container } from "@/components/sections/Primitives";
import RibbonFlow from "@/components/RibbonFlow";
import artpayLogo from "@/assets/artpay-logo.png.asset.json";
import operaBlue from "@/assets/opera-blue.jpg.asset.json";

type MockupVariant = "genera" | "invia" | "incassi" | "ricevi" | "piano" | "conferma";

interface Flow {
  number: string;
  title: string;
  desc: string;
  mockup: MockupVariant;
}

const sellerFlow: Flow[] = [
  { number: "01", title: "Crea il link", desc: "Apri Artpay FAST e inserisci importo, opera e commissioni. Il link è pronto in circa 20 secondi.", mockup: "genera" },
  { number: "02", title: "Il collezionista sceglie", desc: "Riceve il link per WhatsApp, email o QR e sceglie piano e partner dal telefono, senza scaricare app.", mockup: "invia" },
  { number: "03", title: "Incassi subito", desc: "Il partner finanziario versa il 100% dell'importo e il rapporto con il collezionista resta diretto.", mockup: "incassi" },
];


const buyerFlow: Flow[] = [
  { number: "01", title: "Ricevi il link", desc: "Vedi l'opera, il prezzo e le opzioni di finanziamento disponibili.", mockup: "ricevi" },
  { number: "02", title: "Scegli la rata", desc: "Scegli una durata da 3 a 84 mesi e vedi l'importo mensile in tempo reale.", mockup: "piano" },
  { number: "03", title: "L'opera è tua", desc: "Il partner finanziario approva la richiesta e il pagamento al merchant viene confermato.", mockup: "conferma" },
];

type FeatureMockupVariant = "fast" | "crm" | "checkout" | "piani" | "widget" | "dashboard";

const features: { title: string; desc: string; icon: LucideIcon; mockup: FeatureMockupVariant; span?: string }[] = [
  { title: "Artpay FAST", desc: "Genera un link di pagamento in circa 20 secondi e condividilo per WhatsApp, email o QR.", icon: Zap, mockup: "fast", span: "lg:col-span-2" },
  { title: "Mini-CRM integrato", desc: "Tieni traccia di chi ha ricevuto un link, chi ha chiesto informazioni e chi è interessato a un'opera.", icon: Users, mockup: "crm" },
  { title: "Checkout con il tuo marchio", desc: "Il collezionista paga con carta, bonifico, BNPL o finanziamento in una pagina che porta il marchio del merchant.", icon: LinkIcon, mockup: "checkout" },
  { title: "Piani fino a 84 mesi", desc: "Il collezionista sceglie una durata da 3 a 84 mesi, in base al partner finanziario e al proprio profilo.", icon: CalendarRange, mockup: "piani" },
  { title: "Widget nel checkout", desc: "Inserisci le rate direttamente nella piattaforma che usi già per vendere.", icon: ShoppingCart, mockup: "widget" },
  { title: "Dashboard", desc: "Transazioni, interazioni ed export contabile sono in un unico posto, con notifiche in tempo reale.", icon: LayoutDashboard, mockup: "dashboard", span: "lg:col-span-2" },
];

/* ---------- UI mockups (pure CSS) ---------- */
const StepMockup = ({ variant }: { variant: MockupVariant }) => {
  const base = "w-full h-full rounded-xl bg-white p-4 overflow-hidden flex flex-col shadow-lg shadow-[#0B1215]/10 ring-1 ring-black/5";
  switch (variant) {
    case "genera":
      return (
        <div className={base}>
          <span className="text-[11px] font-semibold text-primary">Artpay FAST</span>
          <div className="mt-3 space-y-2.5">
            <div>
              <span className="block text-[10px] text-muted-foreground">Importo</span>
              <div className="mt-1 flex items-center rounded border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-foreground">€ 24.000</div>
            </div>
            <div>
              <span className="block text-[10px] text-muted-foreground">Opera</span>
              <div className="mt-1 rounded border border-gray-200 bg-white px-3 py-2 text-xs text-foreground">Senza titolo, 2023</div>
            </div>
          </div>
          <div className="mt-auto rounded bg-primary py-2 text-center text-xs font-semibold text-white transition-transform duration-300 group-hover:scale-[1.04] group-hover:shadow-lg group-hover:shadow-primary/30">Genera link →</div>
        </div>
      );
    case "invia":
      return (
        <div className={`${base} items-center justify-center gap-2`}>
          <div className="max-w-[85%] rounded-lg rounded-br-sm bg-primary px-3 py-2 text-center text-[11px] leading-snug text-white transition-all duration-500 group-hover:-translate-y-0.5">
            Ecco il link per la tua opera 👇
          </div>
          <div className="max-w-[90%] rounded-lg bg-white border border-gray-200 px-3 py-2.5 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:border-primary/40 group-hover:shadow-md">
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
    case "incassi":
      return (
        <div className={`${base} items-center justify-center text-center`}>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary/20"><Check className="h-6 w-6 transition-transform duration-500 group-hover:scale-125" /></div>
          <div className="mt-3 text-[10px] text-muted-foreground">Accreditato sul tuo conto</div>
          <div className="text-2xl font-bold text-foreground transition-transform duration-500 group-hover:scale-105">€ 24.000</div>
          <div className="mt-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">100% versato subito</div>
        </div>
      );
    case "ricevi":
      return (
        <div className={base}>
          <div className="h-24 w-full rounded bg-gradient-to-br from-[#3D4FED] via-[#6070F0] to-[#c77dff] bg-[length:200%_200%] animate-gradient-shift" />
          <div className="mt-3 text-sm font-semibold text-foreground">Senza titolo, 2023</div>
          <div className="text-[11px] text-muted-foreground">Merchant Esempio</div>
          <div className="mt-auto flex items-end justify-between">
            <div>
              <div className="text-[10px] text-muted-foreground">Prezzo</div>
              <div className="text-lg font-bold text-foreground">€ 24.000</div>
            </div>
            <div className="rounded bg-primary px-3 py-1.5 text-[11px] font-semibold text-white transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-primary/30">Finanzia</div>
          </div>
        </div>
      );
    case "piano":
      return (
        <div className={base}>
          <span className="text-[11px] font-semibold text-foreground">Scegli il piano</span>
          <div className="mt-4">
            <div className="flex items-center justify-between text-[10px] text-muted-foreground"><span>3 mesi</span><span>84 mesi</span></div>
            <div className="relative mt-2 h-1.5 rounded-full bg-gray-200">
              <div className="absolute inset-y-0 left-0 w-1/3 rounded-full bg-primary transition-all duration-700 ease-out group-hover:w-1/2" />
              <div className="absolute -top-1 left-1/3 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-primary bg-white transition-all duration-700 ease-out group-hover:left-1/2" />
            </div>
            <div className="mt-1 text-center text-[11px] font-semibold text-primary">36 mesi</div>
          </div>
          <div className="mt-auto rounded border border-gray-200 bg-white p-3 text-center transition-all duration-500 group-hover:border-primary/40 group-hover:shadow-md">
            <div className="text-[10px] text-muted-foreground">Rata mensile</div>
            <div className="text-xl font-bold text-foreground">€ 690<span className="text-xs font-medium text-muted-foreground">/mese</span></div>
          </div>
        </div>
      );
    case "conferma":
      return (
        <div className={`${base} items-center justify-center text-center`}>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white transition-transform duration-500 group-hover:scale-110 group-hover:animate-[pulse_1.5s_ease-in-out_infinite]"><Check className="h-6 w-6 transition-transform duration-500 group-hover:scale-125" /></div>
          <div className="mt-3 text-sm font-semibold text-foreground">Acquisto confermato</div>
          <div className="mt-1 text-[11px] text-muted-foreground leading-snug">L'opera è tua.<br />Pagamento al merchant confermato.</div>
          <div className="mt-3 rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">36 rate da € 690</div>
        </div>
      );
  }
};

const FlowCard = ({ step }: { step: Flow }) => {
  const [glowPos, setGlowPos] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setGlowPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      className={`group relative flex flex-col h-[560px] rounded p-7 transition-transform duration-500 hover:scale-[1.02] bg-gradient-to-t from-[#D9DEFC] via-[#ECEEFE] to-white bg-[length:200%_200%] animate-gradient-shift border ${glowPos ? "border-transparent" : "border-[#3D4FED]/10"}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setGlowPos(null)}
    >
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
      <span className="relative z-10 text-sm font-normal text-muted-foreground/70">{step.number}</span>
      <h3 className="relative z-10 mt-1 text-xl lg:text-[22px] font-medium text-foreground leading-tight">{step.title}</h3>
      <div className="relative z-10 mt-5 flex-1 flex items-center justify-center overflow-hidden">
        <div className="w-full max-w-[220px] h-full max-h-[250px]">
          <StepMockup variant={step.mockup} />
        </div>
      </div>
      <p className="relative z-10 mt-5 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
    </div>
  );
};

const FlowGrid = ({ steps }: { steps: Flow[] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 [&>*]:min-w-0">
    {steps.map((step) => (
      <FlowCard key={step.number} step={step} />
    ))}
  </div>
);


const FeatureMockup = ({ variant }: { variant: FeatureMockupVariant }) => {
  const base = "h-full w-full rounded-xl bg-white p-4 shadow-lg shadow-[#0B1215]/10 ring-1 ring-black/5 overflow-hidden";
  switch (variant) {
    case "fast":
      return (
        <div className={`${base} flex gap-4`}>
          <div className="flex-1">
            <span className="text-[10px] font-semibold text-primary">Artpay FAST</span>
            <div className="mt-2 rounded border border-gray-200 px-2.5 py-1.5">
              <div className="text-[8px] text-muted-foreground">Importo</div>
              <div className="text-xs font-semibold text-foreground">€ 24.000</div>
            </div>
            <div className="mt-2 rounded border border-gray-200 px-2.5 py-1.5">
              <div className="text-[8px] text-muted-foreground">Opera</div>
              <div className="truncate text-[10px] text-foreground">Senza titolo, 2023</div>
            </div>
          </div>
          <div className="flex shrink-0 items-center text-primary transition-transform duration-500 group-hover:translate-x-1">
            <ArrowRight className="h-4 w-4" />
          </div>
          <div className="flex flex-1 items-center">
            <div className="w-full rounded border border-gray-200 bg-white p-2.5 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:border-primary/40 group-hover:shadow-md">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-primary/10 text-primary transition-transform duration-500 group-hover:scale-110"><QrCode className="h-4 w-4" /></div>
                <div className="min-w-0">
                  <div className="truncate text-[10px] font-semibold text-foreground">pay.artpay.art/x8f2</div>
                  <div className="truncate text-[9px] text-muted-foreground">€ 24.000, fino a 84 mesi</div>
                </div>
              </div>
              <div className="mt-2 rounded bg-primary py-1.5 text-center text-[10px] font-semibold text-white transition-transform duration-300 group-hover:scale-[1.02]">Condividi</div>
            </div>
          </div>
        </div>
      );
    case "crm":
      return (
        <div className={base}>
          <span className="text-[10px] font-semibold text-foreground">Contatti recenti</span>
          <div className="mt-2.5 space-y-2">
            {[
              { init: "MR", name: "Marco Rossi", status: "Ha ricevuto il link", active: true },
              { init: "AB", name: "Anna Bianchi", status: "Interessata", active: false },
              { init: "RV", name: "Riccardo Verdi", status: "Info richieste", active: false },
            ].map((c) => (
              <div key={c.name} className={`flex items-center gap-2 rounded border px-2.5 py-1.5 transition-all duration-500 ${c.active ? "border-primary/40 bg-primary/5 group-hover:shadow-md" : "border-gray-200"}`}>
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[9px] font-semibold text-primary transition-transform duration-500 group-hover:scale-110">{c.init}</div>
                <span className="flex-1 truncate text-[10px] font-medium text-foreground">{c.name}</span>
                <span className="shrink-0 rounded-full bg-primary/10 px-2 py-0.5 text-[8px] font-semibold text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">{c.status}</span>
              </div>
            ))}
          </div>
        </div>
      );
    case "checkout":
      return (
        <div className={base}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="h-3 w-3 rounded-sm bg-primary" />
              <span className="text-[10px] font-semibold text-foreground">Merchant Esempio</span>
            </div>
            <span className="text-[9px] text-muted-foreground">Checkout</span>
          </div>
          <div className="mt-2.5 space-y-1.5">
            <div className="flex items-center gap-2 rounded border border-gray-200 px-2.5 py-1">
              <div className="h-2.5 w-2.5 rounded-full border border-gray-300" />
              <span className="text-[10px] text-muted-foreground">Carta</span>
            </div>
            <div className="flex items-center gap-2 rounded border border-gray-200 px-2.5 py-1">
              <div className="h-2.5 w-2.5 rounded-full border border-gray-300" />
              <span className="text-[10px] text-muted-foreground">Bonifico</span>
            </div>
            <div className="flex items-center gap-2 rounded border border-primary bg-primary/5 px-2.5 py-1 transition-all duration-500 group-hover:shadow-md">
              <div className="h-2.5 w-2.5 rounded-full border-[3px] border-primary" />
              <span className="text-[10px] font-semibold text-foreground">36 rate da € 690/mese</span>
            </div>
          </div>
          <div className="mt-2.5 rounded bg-primary py-1.5 text-center text-[10px] font-semibold text-white transition-transform duration-300 group-hover:scale-[1.02]">Conferma pagamento</div>
        </div>
      );
    case "piani":
      return (
        <div className={`${base} flex flex-col`}>
          <span className="text-[10px] font-semibold text-foreground">Scegli il piano</span>
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {["12 mesi", "24 mesi", "36 mesi", "60 mesi", "84 mesi"].map((m, i) => (
              <span key={m} className={`rounded border px-2 py-1 text-[9px] transition-colors duration-300 ${i === 2 ? "border-primary bg-primary font-semibold text-white" : "border-gray-200 text-muted-foreground"}`}>{m}</span>
            ))}
          </div>
          <div className="mt-auto rounded border border-gray-200 bg-white p-2.5 text-center transition-all duration-500 group-hover:border-primary/40 group-hover:shadow-md">
            <div className="text-[9px] text-muted-foreground">Rata mensile</div>
            <div className="text-lg font-bold text-foreground">€ 690<span className="text-[10px] font-medium text-muted-foreground">/mese</span></div>
          </div>
        </div>
      );
    case "widget":
      return (
        <div className={`${base} flex flex-col`}>
          <div className="flex items-center gap-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-gray-300" />
            <div className="h-1.5 w-1.5 rounded-full bg-gray-300" />
            <div className="h-1.5 w-1.5 rounded-full bg-gray-300" />
          </div>
          <div className="mt-2 flex items-center gap-2.5">
            <div className="h-11 w-11 shrink-0 rounded bg-gradient-to-br from-[#3D4FED] via-[#6070F0] to-[#c77dff] bg-[length:200%_200%] animate-gradient-shift" />
            <div className="min-w-0">
              <div className="truncate text-[10px] font-semibold text-foreground">Senza titolo, 2023</div>
              <div className="text-[9px] text-muted-foreground">€ 24.000</div>
            </div>
          </div>
          <div className="mt-auto rounded border border-primary/40 bg-primary/5 p-2.5 transition-all duration-500 group-hover:border-primary group-hover:shadow-md">
            <div className="text-[9px] font-semibold text-primary">Rate con Artpay</div>
            <div className="text-[10px] text-foreground">36 rate da <span className="font-semibold">€ 690/mese</span></div>
            <div className="mt-1.5 rounded bg-primary py-1 text-center text-[9px] font-semibold text-white transition-transform duration-300 group-hover:scale-[1.02]">Finanzia ora</div>
          </div>
        </div>
      );
    case "dashboard":
      return (
        <div className={`${base} flex gap-4`}>
          <div className="w-2/5 space-y-2">
            {[
              { label: "Incassato", value: "€ 184.500" },
              { label: "Link inviati", value: "62" },
              { label: "Approvazione", value: "87%" },
            ].map((s) => (
              <div key={s.label} className="rounded border border-gray-200 px-2.5 py-1.5 transition-all duration-500 group-hover:border-primary/30">
                <div className="text-[8px] text-muted-foreground">{s.label}</div>
                <div className="text-xs font-bold text-foreground">{s.value}</div>
              </div>
            ))}
          </div>
          <div className="flex-1 rounded border border-gray-200 p-2.5 transition-all duration-500 group-hover:border-primary/30">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-semibold text-foreground">Transazioni</span>
              <span className="text-[8px] text-muted-foreground">Ultimi 30 giorni</span>
            </div>
            <div className="mt-2 flex h-16 items-end gap-1.5">
              {[35, 55, 40, 70, 50, 80, 60, 100, 65, 85].map((h, i) => (
                <div key={i} className={`flex-1 rounded-sm transition-all duration-700 ${i === 7 ? "bg-primary" : "bg-primary/20"}`} style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="mt-1 flex justify-between text-[7px] text-muted-foreground"><span>1</span><span>15</span><span>30</span></div>
          </div>
        </div>
      );
  }
};

/* ---------- Hero phone mockup (9:18, scheda opera) ---------- */
const HeroMockup = () => (
  <div className="group relative w-[270px] sm:w-[300px]">
    <div
      aria-hidden="true"
      className="absolute -inset-10 rounded-full opacity-60 transition-opacity duration-500 group-hover:opacity-80"
      style={{ background: "radial-gradient(closest-side, rgba(61,79,237,0.35), rgba(61,79,237,0) 75%)", filter: "blur(48px)" }}
    />
    <div className="relative flex aspect-[9/18] w-full flex-col rounded-[32px] bg-white shadow-2xl shadow-[#0B1215]/15 ring-1 ring-black/5 transition-all duration-500 ease-out group-hover:-translate-y-1.5 group-hover:shadow-[#0B1215]/25">
      <div className="flex justify-center px-6 pb-4 pt-5">
        <div
          aria-hidden="true"
          className="h-4 w-[55px] bg-primary transition-opacity duration-300 group-hover:opacity-80"
          style={{
            WebkitMaskImage: `url(${artpayLogo.url})`,
            maskImage: `url(${artpayLogo.url})`,
            WebkitMaskSize: "contain",
            maskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
          }}
        />
      </div>
      <div className="mx-4 h-[230px] sm:h-[250px] shrink-0">
        <div className="h-full w-full overflow-hidden rounded-[14px] shadow-lg shadow-[#0B1215]/10 ring-1 ring-black/5">
          <img
            src={operaBlue.url}
            alt="Opera"
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />
        </div>
      </div>
      <div className="flex min-h-0 flex-1 flex-col px-6 pt-4">
        <div className="text-lg font-medium leading-tight text-foreground">Sky, 2030</div>
        <div className="mt-0.5 text-sm text-steel">Luke P.</div>
        <div className="mt-auto pb-4 text-2xl font-semibold text-foreground">12.000 €</div>
      </div>
      <div className="px-6 pb-6">
        <div className="ml-auto flex w-fit cursor-default items-center justify-center gap-1.5 rounded bg-primary px-7 py-2.5 text-xs font-medium text-white transition-colors duration-300 group-hover:bg-primary-dark">
          Paga a rate
          <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  </div>
);

const ComeFunziona = () => (
  <>
      <PageHero
        label={"\n"}
        title="Il pagamento rateale nel flusso di vendita."
      body="Uno strumento dedicato al mercato dell'arte, per snellire la fase post-vendita."
      primary={{ label: "Richiedi una demo", to: "/demo" }}
      side={<HeroMockup />}
    />

    <Section border={false}>
      <Heading
        label={
          <span className="flex items-center gap-2">
            <Store className="h-[18px] w-[18px] text-primary" aria-hidden="true" />
            <span className="text-primary">Per il merchant</span>
          </span>
        }
        title="Il merchant dà l'opportunità di pagare a rate."
      />
      <div className="mt-14">
        <FlowGrid steps={sellerFlow} />
      </div>
    </Section>

    <Section>
      <Heading
        label={
          <span className="flex items-center gap-2">
            <User className="h-[18px] w-[18px] text-primary" aria-hidden="true" />
            <span className="text-primary">Per il collezionista</span>
          </span>
        }
        title="Il collezionista sceglie la rata."
      />
      <div className="mt-14">
        <FlowGrid steps={buyerFlow} />
      </div>
    </Section>

    <div className="relative -my-6 w-full overflow-hidden">
      <RibbonFlow height={210} lineCount={36} />
    </div>

    <Section>
      <Heading title="Una piattaforma semplice e completa." />
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <div
              key={f.title}
              className={`group min-w-0 flex flex-col p-6 sm:p-8 rounded border border-[#3D4FED]/10 bg-gradient-to-t from-[#D9DEFC] via-[#ECEEFE] to-white bg-[length:200%_200%] animate-gradient-shift transition-colors duration-300 hover:border-primary/40 ${f.span ?? ""}`}
            >
              <div className="mb-6 h-52">
                <FeatureMockup variant={f.mockup} />
              </div>
              <span className="flex h-12 w-12 items-center justify-center rounded bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-medium text-foreground">{f.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed text-[15px]">{f.desc}</p>
            </div>
          );
        })}
      </div>
    </Section>

    <FinalCta
      title="Scopri Artpay in azione."
      subtext="Ti mostriamo il flusso completo nel tuo flusso di vendita."
      primary={{ label: "Richiedi una demo", to: "/demo" }}
    />
  </>
);

export default ComeFunziona;
