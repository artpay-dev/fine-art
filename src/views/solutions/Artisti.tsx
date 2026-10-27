import { Section, Heading, PageHero, InfoCard, FinalCta } from "@/components/sections/Primitives";
import FastShowcase from "@/components/sections/FastShowcase";

const features = [
  { title: "Vendi direttamente dallo studio", desc: "Genera un link di pagamento rateale per le tue opere in meno di 20 secondi. Nessun intermediario, nessun marketplace." },
  { title: "Incasso immediato", desc: "Il partner finanziario versa il 100% dell'importo alla conferma. Il collezionista paga a rate, tu incassi subito." },
  { title: "Rateizzazione fino a 84 mesi", desc: "Il collezionista può distribuire l'acquisto fino a 7 anni, rendendo le tue opere accessibili a un pubblico più ampio." },
  { title: "Il rapporto resta tuo", desc: "Checkout brandizzato con il tuo nome. Il collezionista resta nel tuo ecosistema, senza piattaforme terze che si interpongono." },
  { title: "Zero rischio credito", desc: "Il rischio finanziario è interamente in capo al partner finanziario. Non sei mai esposto." },
  { title: "Dashboard completa", desc: "Tutte le transazioni, le interazioni e i pagamenti in corso in un unico posto, con notifiche in tempo reale." },
];

const Artisti = () => (
  <>
    <PageHero
      label="Artisti"
      title={<>Vendi le tue opere a rate. Direttamente dal tuo studio.</>}
      body={
        <>
          Un collezionista ama un'opera ma non ha la liquidità in quel momento. Senza un'opzione di pagamento flessibile,
          la vendita non si chiude. Artpay FAST rimuove quella barriera — direttamente nel tuo flusso di vendita, senza
          intermediari e senza perdere il rapporto con il collezionista.
        </>
      }
      primary={{ label: "Attiva gratis per 1 mese", to: "/demo" }}
      secondary={{ label: "Come funziona", to: "/come-funziona" }}
    />

    <FastShowcase />

    <Section>
      <Heading title="Lo strumento dell'artista indipendente." />
      <div className="mt-8 max-w-3xl space-y-5 text-muted-foreground leading-relaxed">
        <p>
          Artpay FAST è un'interfaccia semplice che genera link di pagamento in meno di 20 secondi. Il collezionista riceve
          il link via WhatsApp, email o QR code, sceglie un piano rateale da 3 a 84 mesi, e conferma. Tu incassi subito —
          dal partner finanziario, non dal collezionista.
        </p>
        <p>
          Artpay è invisibile nel rapporto: il checkout riflette il tuo nome, il collezionista resta interamente nel tuo
          ecosistema. Nessuna piattaforma terza che si interpone tra te e chi acquista le tue opere.
        </p>
      </div>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => (
          <InfoCard key={f.title} title={f.title} desc={f.desc} />
        ))}
      </div>
    </Section>

    <FinalCta
      title="Attiva Artpay FAST gratis per un mese."
      subtext="Nessuna carta richiesta. Il collezionista paga a rate, tu incassi subito, il rapporto con il collezionista rimane tuo."
      primary={{ label: "Attiva gratis", to: "/demo" }}
      secondary={{ label: "Come funziona", to: "/come-funziona" }}
    />
  </>
);

export default Artisti;
