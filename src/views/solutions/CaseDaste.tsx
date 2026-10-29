import Link from "next/link";
import { Section, Heading, PageHero, InfoCard, TrustBanner, FinalCta } from "@/components/sections/Primitives";
import FastShowcase from "@/components/sections/FastShowcase";
import santagostinoLogo from "@/assets/santagostino.png";
import finarteLogo from "@/assets/finarte.webp";

const auctionHouses = [
  { name: "Casa d'Aste Sant'Agostino", logo: santagostinoLogo.src },
  { name: "Finarte", logo: finarteLogo.src, badge: "Novità" },
];

const advantages = [
  { title: "Cassa immediata", desc: "La casa d'asta riceve il 100% dell'aggiudicato alla conferma e programma il ciclo di cassa con più certezza." },
  { title: "Commissioni comprese", desc: "Le commissioni possono valere tra il 20 e il 25% del martello e rientrano nel piano, così il collezionista vede una sola rata mensile." },
];

const problems = [
  { title: "Tempo", desc: "Il pagamento deve arrivare entro pochi giorni e questo mette sotto pressione molti collezionisti." },
  { title: "Credito", desc: "Il finanziamento si cerca fuori dal flusso dell'asta, con passaggi che rallentano l'acquisto." },
  { title: "Ritiri", desc: "Un lotto che torna in magazzino costa tempo, denaro e reputazione, e una rata scelta al momento giusto aiuta a evitarlo." },
];


const CaseDaste = () => (
  <>
    <PageHero
      halo="top-right"
      label="Case d'asta"
      title="Il pagamento rateale arriva in asta."
      body={<>Con Artpay puoi finalmente portare in asta gli stessi standard di pagamento<br />rateale che oggi trovi in tutto il resto dei tuoi acquisti online.</>}
      primary={{ label: "Richiedi una demo", to: "/demo" }}
    />

    <FastShowcase />


    <Section>
      <Heading title="Cassa immediata e commissioni comprese nella rata." />
      <div className="mt-12 grid lg:grid-cols-2 gap-6">
        {advantages.map((a) => (
          <InfoCard key={a.title} title={a.title} desc={a.desc} highlight />
        ))}
      </div>
    </Section>

    <Section>
      <Heading title="Tre attriti che costano lotti." />
      <div className="mt-12 grid lg:grid-cols-3 gap-6">
        {problems.map((p) => (
          <InfoCard key={p.title} title={p.title} desc={p.desc} />
        ))}
      </div>
    </Section>


    <Section>
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <Heading title="Si integra nel processo che usi già." />
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <p>Artpay si affianca al gestionale o al flusso via email della casa d'asta, con un widget da inserire nel checkout. Le integrazioni native con i software d'asta sono in arrivo.</p>
        </div>
      </div>
    </Section>

    <Section>
      <Heading title="Le rate vengono offerte da partner autorizzati." />
      <div className="mt-8 max-w-3xl space-y-5 text-muted-foreground leading-relaxed">
        <p>Il finanziamento si conclude tra il collezionista e un partner finanziario autorizzato. Artpay fornisce la tecnologia, mentre credito e fondi restano in capo ai partner.</p>
        <TrustBanner>Progettato per la conformità al D.Lgs. 212/2025 (CCD2).</TrustBanner>
        <div className="flex flex-wrap gap-6">
          <Link href="/partner" className="text-primary font-medium hover:underline">Scopri i partner finanziari</Link>
          <Link href="/faq" className="text-primary font-medium hover:underline">Leggi le domande frequenti</Link>
        </div>
      </div>
    </Section>

    <Section>
      <Heading title="Le case d'asta che hanno scelto Artpay." />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {auctionHouses.map((house) => (
          <div key={house.name} className="relative aspect-[5/2] border border-border rounded bg-card flex items-center justify-center">
            {house.badge && (
              <span className="absolute top-3 right-3 text-[10px] font-semibold text-white bg-primary px-2 py-0.5 rounded">
                {house.badge}
              </span>
            )}
            <img src={house.logo} alt={house.name} loading="lazy" width={160} height={40} className="max-h-16 max-w-[70%] object-contain" />
          </div>
        ))}
        <div className="relative aspect-[5/2] border border-dashed border-pewter/50 rounded bg-muted/40 flex flex-col items-center justify-center">
          <span className="absolute top-3 right-3 text-[10px] font-semibold text-white bg-primary px-2 py-0.5 rounded">
            Novità
          </span>
          <span className="text-sm text-pewter font-mono">Nuova casa d'asta in arrivo</span>
        </div>
      </div>
    </Section>

    <FinalCta
      title="Porta le rate nella tua prossima asta."
      subtext="Ti mostriamo Artpay FAST sul tuo flusso di lavoro, integrato con il gestionale che usi già."
      primary={{ label: "Richiedi una demo", to: "/demo" }}
    />
  </>
);

export default CaseDaste;
