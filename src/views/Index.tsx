"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowRight, ArrowUpRight, QrCode, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import GalleryLogos from "@/components/GalleryLogos";
import { Container, Section, Heading, Label, CtaRow, FinalCta, TrustBanner, InfoCard } from "@/components/sections/Primitives";
import htsiAward from "@/assets/htsi-award.jpg.asset.json";
import santanderLogo from "@/assets/santander.png.asset.json";
import pressCorriere from "@/assets/press-corriere.png.asset.json";
import pressSole24 from "@/assets/press-sole24ore.png.asset.json";
import pressAnsa from "@/assets/press-ansa.webp.asset.json";
import pressSky from "@/assets/press-skytg24.png.asset.json";
import pressHtsi from "@/assets/press-htsi.png.asset.json";
import pressStartup from "@/assets/press-startupitalia.png.asset.json";
import pressFirst from "@/assets/press-firstonline.png.asset.json";
import pressLmf from "@/assets/press-lamiafinanza.jpg.asset.json";
import heroVideo from "@/assets/hero.mp4.asset.json";
import heroPoster from "@/assets/hero-poster.jpg.asset.json";
import EcosystemDiagram from "@/components/EcosystemDiagram";
import RibbonFlow from "@/components/RibbonFlow";
import santagostinoLogo from "@/assets/logo-santagostino.png.asset.json";
import finarteLogo from "@/assets/logo-finarte.webp.asset.json";
import galleriaAbbondio from "@/assets/galleria-abbondio.jpg.asset.json";
import fabbricaEos from "@/assets/fabbrica-eos.jpg.asset.json";
import galleriaFerrero from "@/assets/galleria-ferrero.jpg.asset.json";
import deChirico from "@/assets/de-chirico.jpg.asset.json";
import crag from "@/assets/crag.jpg.asset.json";
import umbertoBenappi from "@/assets/umberto-benappi.png.asset.json";
import theOthersLogo from "@/assets/logo-theothers.png.asset.json";
import thePhairLogo from "@/assets/logo-thephair.png.asset.json";
import operaBlue from "@/assets/opera-blue.jpg.asset.json";
import channelGallerie from "@/assets/exhibition-hall.jpg.asset.json";
import channelFiere from "@/assets/spiral-gallery.jpg.asset.json";
import channelEcommerce from "@/assets/ecommerce.jpg.asset.json";

const stats = [
  { value: "€50M+", label: "Volume di transazioni gestito" },
  { value: "84 mesi", label: "Durata massima delle rate" },
  { value: "20 sec", label: "Per generare un link" },
  { value: "0", label: "Fondi detenuti da Artpay" },
];

const problemIcons = [
  {
    label: "Tempo",
    svg: (
      <div className="flex h-14 w-14 items-center justify-center rounded-md border border-primary/40 bg-primary/5 text-primary transition-transform duration-300 ease-out hover:scale-110 hover:border-primary">
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
          <circle cx="12" cy="12" r="9" stroke="currentColor" className="text-primary" />
          <path d="M12 7v5h4" stroke="currentColor" className="text-primary-dark" />
        </svg>
      </div>
    ),
  },
  {
    label: "Credito",
    svg: (
      <div className="flex h-14 w-14 items-center justify-center rounded-md border border-primary/40 bg-primary/5 text-primary transition-transform duration-300 ease-out hover:scale-110 hover:border-primary">
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
          <rect x="2.5" y="5.5" width="19" height="13" rx="1.5" stroke="currentColor" className="text-primary" />
          <path d="M2.5 10h19" stroke="currentColor" className="text-primary-dark" />
        </svg>
      </div>
    ),
  },
  {
    label: "Ritiri",
    svg: (
      <div className="flex h-14 w-14 items-center justify-center rounded-md border border-primary/40 bg-primary/5 text-primary transition-transform duration-300 ease-out hover:scale-110 hover:border-primary">
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
          <path d="M3.5 7.5 12 3l8.5 4.5v9L12 21l-8.5-4.5z" stroke="currentColor" className="text-primary" />
          <path d="M3.5 7.5 12 12l8.5-4.5M12 12v9" stroke="currentColor" className="text-primary-dark" />
        </svg>
      </div>
    ),
  },
];
const problems = [
  { title: "Tempo", desc: "Il pagamento deve arrivare entro pochi giorni e questo mette sotto pressione molti collezionisti." },
  { title: "Credito", desc: "Il finanziamento si cerca fuori dal flusso dell'asta, con passaggi che rallentano l'acquisto." },
  { title: "Ritiri", desc: "Un lotto che torna in magazzino costa tempo, denaro e reputazione, e una rata scelta al momento giusto aiuta a evitarlo." },
];

const steps = [
  { number: "01", title: "Crea il link", desc: "Inserisci lotto, importo e commissioni e il link è pronto in circa 20 secondi." },
  { number: "02", title: "Invia", desc: "Condividi il link in sala, per WhatsApp, email o QR e il collezionista lo apre dal browser del telefono." },
  { number: "03", title: "Incassa", desc: "Il partner finanziario versa il 100% dell'importo alla conferma del piano." },
];


const valueIcons = [
  {
    label: "Fiducia",
    svg: (
      <div className="flex h-14 w-14 items-center justify-center rounded-md border border-primary/40 bg-primary/5 text-primary transition-transform duration-300 ease-out hover:scale-110 hover:border-primary">
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
          <path d="M12 3l7.5 3v5.5c0 4.5-3 8-7.5 9.5C7.5 19.5 4.5 16 4.5 11.5V6z" stroke="currentColor" className="text-primary" />
          <path d="M8.75 11.75l2.25 2.25 4.25-4.25" stroke="currentColor" className="text-primary-dark" />
        </svg>
      </div>
    ),
  },
  {
    label: "Velocità",
    svg: (
      <div className="flex h-14 w-14 items-center justify-center rounded-md border border-primary/40 bg-primary/5 text-primary transition-transform duration-300 ease-out hover:scale-110 hover:border-primary">
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
          <path d="M13 3L5 13.5h5.5L9.5 21l8-10.5H12z" stroke="currentColor" className="text-primary" />
          <path d="M13 3l4.5 7.5H12z" stroke="currentColor" className="text-primary-dark" />
        </svg>
      </div>
    ),
  },
  {
    label: "Accessibilità",
    svg: (
      <div className="flex h-14 w-14 items-center justify-center rounded-md border border-primary/40 bg-primary/5 text-primary transition-transform duration-300 ease-out hover:scale-110 hover:border-primary">
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
          <rect x="4.5" y="3.5" width="12" height="17" rx="1.5" stroke="currentColor" className="text-primary" />
          <path d="M16.5 12h4.5M18.5 9.5l2.5 2.5-2.5 2.5" stroke="currentColor" className="text-primary-dark" />
        </svg>
      </div>
    ),
  },
  {
    label: "Trasparenza",
    svg: (
      <div className="flex h-14 w-14 items-center justify-center rounded-md border border-primary/40 bg-primary/5 text-primary transition-transform duration-300 ease-out hover:scale-110 hover:border-primary">
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
          <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" stroke="currentColor" className="text-primary" />
          <circle cx="12" cy="12" r="3" stroke="currentColor" className="text-primary-dark" />
        </svg>
      </div>
    ),
  },
];

const values = [
  { title: "Fiducia", desc: "Le transazioni d'arte valgono cifre importanti, per questo uniamo relazioni umane durature a processi digitali chiari." },
  { title: "Velocità", desc: "Un ritardo in trattativa può diventare un'opportunità persa, quindi costruiamo strumenti snelli che rispettano il tempo di case d'asta e collezionisti." },
  { title: "Accessibilità", desc: "Rendiamo più semplice l'ingresso ai collezionisti più giovani, collegandoli a chi il mercato lo conosce e lo vive da tempo." },
  { title: "Trasparenza", desc: "Definiamo condizioni chiare per chi vende, chi compra e chi mette a disposizione il capitale, così ciascuno sa cosa aspettarsi fin dall'inizio." },
];

const channels = [
  { title: "Gallerie", desc: "Artpay FAST porta il pagamento rateale nella vendita in galleria e il collezionista resta tuo.", to: "/soluzioni/gallerie", image: channelGallerie, alt: "Sala espositiva con opere appese alle pareti" },
  { title: "Fiere", desc: "Lo stand diventa un checkout digitale e le trattative restano aperte dopo la fiera.", to: "/soluzioni/fiere", image: channelFiere, alt: "Sala espositiva con pareti bianche e opere in mostra" },
  { title: "E-commerce arte e collectibles", desc: "Un'API di pagamento rateale per marketplace, e-commerce e software del settore.", to: "/soluzioni/piattaforme", image: channelEcommerce, alt: "Laptop illuminato nel buio con schermo acceso" },
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


const FastMockup = ({ index }: { index: number }) => {
  const base = "w-full h-full rounded-xl bg-white p-4 overflow-hidden flex flex-col shadow-lg shadow-[#0B1215]/10 ring-1 ring-black/5";
  if (index === 0) {
    return (
      <div className={`${base} !p-0`}>
        <img loading="lazy" src={operaBlue.url} alt="Opera" className="w-full h-16 shrink-0 object-cover rounded-t-xl" />
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
      className={`group relative flex flex-col h-[560px] rounded p-7 transition-transform duration-500 hover:scale-[1.02] bg-[length:140%_140%] animate-gradient-shift border shadow-[0_16px_48px_-12px_rgba(6,27,49,0.14)] ${glowPos ? "border-transparent" : "border-[#3D4FED]/10"}`}
      style={{
        backgroundImage:
          "linear-gradient(to top, #27339F 0%, #27339F 18%, #3D4FED 40%, #ffffff 62%, #ffffff 100%)",
        animationDuration: `${22 + index * 6}s`,
        animationDelay: `${index * -2.5}s`,
        animationDirection: index % 2 === 0 ? "alternate" : "alternate-reverse",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
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

const Index = () => {
  const [typedText, setTypedText] = useState("");
  const [typedHouse, setTypedHouse] = useState("");
  const fullText = "Nuovo partner in arrivo";
  const fullTextHouse = "Nuova casa d'asta in arrivo";

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

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedHouse(fullTextHouse.slice(0, index + 1));
      index++;
      if (index >= fullTextHouse.length) {
        clearInterval(interval);
      }
    }, 80 + Math.random() * 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary grain min-h-screen flex flex-col">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideo.url}
          poster={heroPoster.url}
          preload="metadata"
          autoPlay
          muted
          loop
          playsInline
          style={{ zIndex: 0 }}
        />
        <div className="absolute inset-0 bg-primary/60" style={{ zIndex: 0 }} />
        <div className="hero-halo absolute inset-0 opacity-60 pointer-events-none" style={{ zIndex: 0 }} />

        <div className="relative z-10 flex-1 flex items-center pt-20 pb-4">
          <Container className="w-full">
            <div className="max-w-3xl pointer-events-none">
              <h1 className="mt-4 text-white" style={{ fontSize: "clamp(2.75rem, 9vw, 96px)", lineHeight: 1.02, fontWeight: 500, letterSpacing: "-0.03em" }}>
                Il pagamento rateale per il mercato dell'arte.
              </h1>
              <p className="mt-6 text-lg text-white/80 max-w-2xl leading-relaxed">
                Artpay porta il finanziamento e la rateizzazione nel momento dell'acquisto.
              </p>
              <CtaRow primary={{ label: "Richiedi una demo", to: "/demo" }} secondary={{ label: "Come funziona", to: "/come-funziona" }} className="mt-8 pointer-events-auto" secondaryVariant="heroOutlineLight" />
            </div>
          </Container>
        </div>

        {/* Stats strip inside hero */}
        <div className="relative z-10 border-t border-white/15">
          <Container className="py-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="text-center opacity-0 animate-fade-in"
                style={{ animationDelay: `${300 + i * 150}ms`, animationFillMode: "forwards" }}
              >
                <span className="block text-2xl lg:text-3xl font-medium text-white">{s.value}</span>
                <span className="text-sm text-white/70">{s.label}</span>
              </div>
            ))}
          </Container>
        </div>
      </section>

      {/* Missione */}
      <Section border={false}>
        <Label>La nostra missione</Label>
        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground max-w-4xl leading-[1.1]">
          <span className="text-primary">Portiamo nel mercato dell'arte</span> i pagamenti che il commercio digitale utilizza da anni.
        </h2>
        <p className="mt-8 text-xl text-foreground leading-snug max-w-3xl">
          Artpay è il financing layer per le case d'asta e, più in generale, per il mercato dell'arte e dei collectibles. Integriamo i partner finanziari più competitivi direttamente nel flusso dell'asta, con soluzioni di pagamento sicure e veloci.
        </p>
        <p className="mt-4 text-xl text-muted-foreground leading-snug max-w-3xl">
          Vogliamo che comprare un'opera sia facile, veloce e alla portata di una nuova generazione di collezionisti.
        </p>
        <Link href="/soluzioni/case-daste" className="mt-6 inline-flex items-center gap-2 text-primary font-medium hover:underline">
          Scopri Artpay per le case d'asta <ArrowRight className="h-4 w-4" />
        </Link>
      </Section>

      {/* Elemento decorativo */}
      <div className="relative -my-6 w-full overflow-hidden">
        <RibbonFlow height={290} lineCount={49} speed={1.4} />
      </div>

      {/* Il problema */}
      <Section>
        <Heading title="Dopo l'aggiudicazione, il pagamento è il passaggio più delicato." />
        <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl">
          Nel mercato dell'arte, che vale più di 65 miliardi di dollari, la maggior parte delle transazioni si conclude ancora con email, PDF, WhatsApp e bonifici. Senza un checkout condiviso e senza un finanziamento al momento giusto, nascono ritardi e trattative perse.
        </p>
        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <InfoCard
              key={p.title}
              title={p.title}
              desc={p.desc}
              bare
              icon={problemIcons[i].svg}
            />
          ))}
        </div>
      </Section>


      {/* Artpay FAST */}
      <Section>
        <Heading label="Come funziona" title="Dalla vendita al link di pagamento in venti secondi." />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((step, i) => (
            <FastCard key={step.number} step={step} index={i} />
          ))}
        </div>
        <Link href="/come-funziona" className="mt-10 inline-flex items-center gap-1.5 text-sm text-primary hover:gap-2.5 transition-all">
          Vedi il flusso completo <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </Section>

      {/* Valori */}
      <Section>
        <Heading title="I valori che guidano il nostro lavoro." />
        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <InfoCard key={v.title} title={v.title} desc={v.desc} bare icon={valueIcons[i].svg} />
          ))}
        </div>
      </Section>

      {/* Modello orchestratore */}
      <Section className="!py-14 lg:!py-20 orchestrator-bg grain [&_h2]:text-white [&_span]:text-white/80 [&_.text-muted-foreground]:text-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Heading label="" title={<>Il primo financing layer dedicato al mondo<br />dell’arte, del design e dei collectibles</>} />
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>La nostra mission è integrare i partner finanziari<br />più competitivi in ogni transazione d’arte, portando<br />soluzioni di pagamento sicure e veloci direttamente<br />all’interno di case d’asta, fiere e gallerie</p>
            </div>
          </div>
          <div className="rounded overflow-hidden">
            <EcosystemDiagram />
          </div>
        </div>
      </Section>

      {/* Partner finanziari */}
      <Section>
        <Heading label="Partner finanziari" title="Dietro ogni rata, un finanziatore regolamentato." />
        <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl">
          Il finanziamento si conclude tra il collezionista e il partner finanziario, mentre credito e fondi restano in capo a soggetti autorizzati.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="aspect-[5/2] border border-border rounded overflow-hidden">
            <img loading="lazy" src={santanderLogo.url} alt="Santander" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-[5/2] border border-border rounded overflow-hidden">
            <svg viewBox="0 0 400 290" className="w-full h-full" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <rect width="400" height="290" rx="4" fill="#FEB4C7" />
              <path d="M173.465 136.001C176.451 136.001 179.22 136.974 181.514 138.63V136.794H189.633V165.493H181.514V163.659C179.22 165.315 176.451 166.288 173.465 166.288C165.562 166.288 159.156 159.508 159.156 151.145C159.156 142.781 165.562 136.001 173.465 136.001ZM259.119 136.001C262.105 136.001 264.874 136.974 267.168 138.63V136.794H275.287V165.493H267.168V163.659C264.874 165.315 262.105 166.288 259.119 166.288C251.217 166.288 244.811 159.508 244.811 151.145C244.811 142.781 251.217 136.001 259.119 136.001ZM283.905 155.317C286.719 155.318 289 157.732 289 160.71C289 163.687 286.719 166.101 283.905 166.102C281.092 166.102 278.811 163.687 278.811 160.71C278.811 157.732 281.092 155.317 283.905 155.317ZM141.474 124C141.474 132.986 138.164 141.345 132.269 147.559L144.707 165.509H133.593L120.074 146.001L123.563 143.236C129.349 138.65 132.667 131.638 132.667 124H141.474ZM119.001 124V165.507H110V124H119.001ZM155.83 165.498H147.33V124.01H155.83V165.498ZM230.383 136.025C236.924 136.025 241.941 140.567 241.941 147.246V165.496H233.832V150.355C233.832 146.17 231.78 143.913 228.212 143.913C224.883 143.913 222.117 146.051 222.117 150.415V165.496H213.934V136.799H222.018V140.031C224.07 137.091 227.14 136.025 230.383 136.025ZM202.192 140.533C203.82 138.291 206.852 136.797 210.149 136.797V145.147C210.117 145.147 210.086 145.145 210.053 145.145C206.84 145.145 202.211 147.574 202.211 152.095V165.494H193.879V136.795H202.192V140.533ZM174.132 143.762C170.069 143.762 166.775 147.068 166.775 151.146C166.776 155.223 170.069 158.529 174.132 158.529C178.195 158.529 181.489 155.223 181.489 151.146C181.489 147.068 178.195 143.762 174.132 143.762ZM259.786 143.762C255.723 143.762 252.43 147.068 252.43 151.146C252.43 155.223 255.723 158.529 259.786 158.529C263.849 158.529 267.142 155.223 267.143 151.146C267.143 147.068 263.849 143.762 259.786 143.762Z" fill="#17120F" />
            </svg>
          </div>
          <div className="relative aspect-[5/2] border border-dashed border-pewter/50 rounded bg-muted/40 flex flex-col items-center justify-center">
            <span className="absolute top-2 right-2 inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-primary text-white ">Novità</span>
            <span className="text-sm text-pewter font-mono">
              {typedText}
              <span className="inline-block w-[2px] h-[1em] bg-pewter ml-0.5 align-middle animate-cursor-blink" />
            </span>
          </div>
        </div>
      </Section>

      {/* Chi usa Artpay */}
      <Section>
        <Heading label="Partner" title="Chi ha già scelto Artpay." />
        <div className="mt-12">
          <span className="text-xs text-slate">Case d'asta</span>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { name: "Casa d'Aste Sant'Agostino", logo: santagostinoLogo.url },
              { name: "Finarte", logo: finarteLogo.url, badge: "Novità" },
            ].map((house) => (
              <div key={house.name} className="relative aspect-[5/2] border border-border rounded bg-card flex items-center justify-center">
                {house.badge && (
                  <span className="absolute top-3 right-3 text-[10px] font-semibold text-white bg-primary px-2 py-0.5 rounded">
                    {house.badge}
                  </span>
                )}
                <img loading="lazy" src={house.logo} alt={house.name} className="max-h-16 max-w-[70%] object-contain" />
              </div>
            ))}
            <div className="relative aspect-[5/2] border border-dashed border-pewter/50 rounded bg-muted/40 flex flex-col items-center justify-center">
              <span className="absolute top-3 right-3 text-[10px] font-semibold text-white bg-primary px-2 py-0.5 rounded">
                Novità
              </span>
              <span className="text-sm text-pewter font-mono">
                {typedHouse}
                <span className="inline-block w-[2px] h-[1em] bg-pewter ml-0.5 align-middle animate-cursor-blink" />
              </span>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <span className="text-xs text-slate">Fiere d'arte</span>
          <div className="mt-4 flex flex-wrap gap-6">
            {[
              { name: "The Others", logo: theOthersLogo.url },
              { name: "The Phair", logo: thePhairLogo.url },
            ].map((fair) => (
              <div key={fair.name} className="relative h-32 px-10 min-w-[280px] border border-border rounded bg-card flex items-center justify-center">
                <img loading="lazy" src={fair.logo} alt={fair.name} className="max-h-14 max-w-[220px] object-contain" />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12">
          <span className="text-xs text-slate">Gallerie</span>
          <GalleryLogos
            galleries={[
              { name: "Galleria Giampaolo Abbondio", logo: galleriaAbbondio.url },
              { name: "Fabbrica EOS", logo: fabbricaEos.url },
              { name: "Galleria Ferrero", logo: galleriaFerrero.url },
              { name: "Raffaella De Chirico", logo: deChirico.url },
              { name: "CRAG, Chiono Reisova Art Gallery", logo: crag.url },
              { name: "Umberto Benappi", logo: umbertoBenappi.url },
            ]}
          />
        </div>
      </Section>


      {/* Altri canali */}
      <Section>
        <Heading title="Le rate arrivano anche negli altri canali del mercato dell'arte." />
        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {channels.map((c) => (
            <Link key={c.to} href={c.to} className="group block">
              <InfoCard
                title={c.title}
                plain
                image={{ url: c.image.url, alt: c.alt }}
                desc={
                  <>
                    {c.desc}
                    <span className="mt-4 flex items-center gap-1.5 text-sm text-primary group-hover:text-primary-dark">
                      Scopri <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </>
                }
              />
            </Link>
          ))}
        </div>
      </Section>

      {/* Premi & press */}
      <Section>
        <Heading title="Premiata dal mercato e raccontata dalla stampa." />
        <div className="mt-12 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <span className="text-xs text-slate">Riconoscimenti</span>
            <div className="mt-4 p-8 rounded border border-border bg-white">
              <img
                src={htsiAward.url}
                alt="HTSI Best Luxury Start Up Award, Il Sole 24 Ore"
                className="w-full rounded mb-6"
                loading="lazy"
              />

              <h3 className="mt-4 text-2xl font-medium text-foreground">Best Luxury Startup 2025</h3>
              <p className="mt-1 text-sm text-primary">How To Spend It, Il Sole 24 Ore</p>
              <p className="mt-4 text-muted-foreground leading-relaxed text-[15px]">
                Il premio viene assegnato ogni anno da How To Spend It, il supplemento luxury del Sole 24 Ore, alle startup più rilevanti tra lusso, arte e innovazione.
              </p>
            </div>
          </div>
          <div>
            <span className="text-xs text-slate">Rassegna stampa<br /><br /></span>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {press.map((p) => (
                <div key={p.name} className="h-32 border border-border rounded bg-white flex items-center justify-center px-6">
                  <img src={p.logo} alt={p.name} className={`max-w-full object-contain ${p.name === "Sky TG24" ? "max-h-10" : "max-h-20"}`} loading="lazy" />
                </div>
              ))}
            </div>
            <Link href="/chi-siamo" className="mt-6 inline-flex items-center gap-1.5 text-sm text-primary hover:gap-2.5 transition-all">
              Chi siamo <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Pre-footer CTA */}
      <FinalCta
        title="Porta le rate nella tua prossima asta."
        subtext="Attivi Artpay in meno di 24 ore e lo integri con il gestionale che usi già."
        primary={{ label: "Richiedi una demo", to: "/demo" }}
        secondary={{ label: "Come funziona", to: "/come-funziona" }}
      />
    </>
  );
};

export default Index;
