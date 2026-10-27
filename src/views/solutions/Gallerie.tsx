import Link from "next/link";
import { Button } from "@/components/ui/button";
import GalleryLogos from "@/components/GalleryLogos";
import { Section, Heading, PageHero, InfoCard, FinalCta } from "@/components/sections/Primitives";
import FastShowcase from "@/components/sections/FastShowcase";
import galleriaAbbondio from "@/assets/galleria-abbondio.jpg.asset.json";
import fabbricaEos from "@/assets/fabbrica-eos.jpg.asset.json";
import galleriaFerrero from "@/assets/galleria-ferrero.jpg.asset.json";
import deChirico from "@/assets/de-chirico.jpg.asset.json";
import crag from "@/assets/crag.jpg.asset.json";
import umbertoBenappi from "@/assets/umberto-benappi.png.asset.json";

const features = [
  { title: "Incasso immediato", desc: "Il partner finanziario versa il 100% dell'importo alla conferma e la galleria non aspetta i tempi del collezionista." },
  { title: "Il collezionista resta tuo", desc: "Il checkout porta il nome della galleria e il rapporto commerciale e umano con il collezionista rimane diretto." },
  { title: "Rate fino a 84 mesi", desc: "Il collezionista distribuisce l'acquisto da 3 a 84 mesi, una flessibilità pensata per i ticket dell'arte." },
  { title: "Mini-CRM integrato", desc: "Artpay FAST registra chi ha ricevuto un link, chi ha chiesto una quotazione e chi si è mostrato interessato a un artista o a un'opera." },
  { title: "Rischio di credito al finanziatore", desc: "Il rischio finanziario resta in capo al partner finanziario e la galleria incassa senza esporsi." },
  { title: "Dashboard completa", desc: "Transazioni, pagamenti in corso, interazioni ed export contabile sono in un unico posto, con notifiche in tempo reale." },
];

const galleries = [
  { name: "Galleria Giampaolo Abbondio", logo: galleriaAbbondio.url },
  { name: "Fabbrica EOS", logo: fabbricaEos.url },
  { name: "Galleria Ferrero", logo: galleriaFerrero.url },
  { name: "Raffaella De Chirico", logo: deChirico.url },
  { name: "CRAG, Chiono Reisova Art Gallery", logo: crag.url },
  { name: "Umberto Benappi", logo: umbertoBenappi.url },
];

const Gallerie = () => (
  <>
    <PageHero
      halo="bottom-left"
      label="Gallerie d'arte"
      title="Il pagamento rateale arriva in galleria."
      body="Con Artpay il collezionista sceglie un piano da 3 a 84 mesi e la galleria incassa l'intero importo alla conferma, con il rapporto che resta diretto."
      primary={{ label: "Attiva la prova gratuita", to: "/demo" }}
      secondary={{ label: "Come funziona", to: "/come-funziona" }}
    />

    <FastShowcase
      title="Dalla trattativa al pagamento in venti secondi."
      firstStep="Inserisci opera, importo e commissioni e il link è pronto in circa 20 secondi."
    />

    <Section>
      <Heading title="Uno strumento semplice per vendere a rate." />
      <div className="mt-8 max-w-3xl space-y-5 text-muted-foreground leading-relaxed">
        <p>
          Artpay FAST genera un link di pagamento in circa 20 secondi. Il collezionista lo riceve per WhatsApp, email o QR, sceglie
          un piano da 3 a 84 mesi e conferma, mentre la galleria incassa dal partner finanziario.
        </p>
        <p>
          Il checkout riflette il marchio della galleria e Artpay resta un supporto discreto, quindi il collezionista rimane nel
          rapporto con chi vende.
        </p>
      </div>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => (
          <InfoCard key={f.title} title={f.title} desc={f.desc} />
        ))}
      </div>
    </Section>

    <Section>
      <Heading label="Gallerie partner" title="Le gallerie che usano Artpay." />
      <GalleryLogos galleries={galleries} placeholders={4} />
      <p className="mt-6 max-w-3xl text-sm text-pewter leading-relaxed">
        Altre gallerie stanno per entrare nella rete Artpay e questa pagina si aggiorna man mano che gli accordi diventano pubblici.
      </p>
    </Section>

    <Section>
      <Heading title="Una prova gratuita, poi un piano semplice." />
      <div className="mt-12 grid lg:grid-cols-2 gap-6 items-start">
        <div className="p-8 rounded border border-primary/40 bg-card">
          <span className="text-sm text-primary">Prova gratuita</span>
          <h3 className="mt-3 text-2xl font-medium text-foreground">Nessun costo per iniziare</h3>
          <ul className="mt-6 space-y-2 text-muted-foreground text-[15px]">
            <li>La prova dura 1 mese e arriva a 3 mesi per le gallerie di The Phair 2026.</li>
            <li>Puoi iniziare senza carta di credito.</li>
            <li>Attivi, provi e poi decidi.</li>
          </ul>
          <Button asChild variant="hero" size="lg" className="mt-8">
            <Link href="/demo">Attiva la prova</Link>
          </Button>
        </div>
        <div className="p-8 rounded border border-border bg-card">
          <span className="text-sm text-slate">Piano standard</span>
          <h3 className="mt-3 text-2xl font-medium text-foreground">€29 al mese più IVA</h3>
          <ul className="mt-6 space-y-2 text-muted-foreground text-[15px]">
            <li>Commissione sulle transazioni del 6% nei primi 12 mesi e del 9% dal tredicesimo.</li>
            <li>Attivazione senza costi.</li>
            <li>Integrazione in meno di 24 ore.</li>
            <li>Dashboard, back office e storico interazioni inclusi.</li>
            <li>Supporto dedicato.</li>
          </ul>
          <p className="mt-6 text-sm text-pewter">
            Per volumi elevati o condizioni personalizzate, <Link href="/contatti" className="text-primary hover:underline">contattaci</Link>.
          </p>
        </div>
      </div>
      <p className="mt-8 max-w-3xl text-sm text-pewter leading-relaxed">
        Prima di ogni addebito ricevi una richiesta di conferma e, senza risposta, l'account resta attivo in sola lettura e senza costi.
      </p>
    </Section>

    <FinalCta
      title="Attiva Artpay FAST con una prova gratuita."
      subtext="Senza carta di credito. Il collezionista paga a rate, la galleria incassa subito e il rapporto con il cliente resta diretto."
      primary={{ label: "Attiva la prova", to: "/demo" }}
      secondary={{ label: "Come funziona", to: "/come-funziona" }}
    />
  </>
);

export default Gallerie;
