import { Section, Heading, PageHero, InfoCard, FinalCta, Container } from "@/components/sections/Primitives";
import FastShowcase from "@/components/sections/FastShowcase";

const features = [
  { title: "Artpay FAST in stand", desc: "Generi il link in circa 20 secondi dallo stand e il collezionista lo apre da qualsiasi smartphone, senza scaricare app." },
  { title: "Chiusura dopo la fiera", desc: "Le trattative avviate in fiera restano aperte su Artpay e il collezionista completa l'acquisto nei giorni successivi, mentre la galleria segue lo stato di ogni interazione dalla dashboard." },
  { title: "Mini-CRM nativo", desc: "Chi ha ricevuto un link, chi ha chiesto una quotazione e chi si è interessato all'opera di un artista resta tracciato nello storico della galleria." },
  { title: "Onboarding prima dell'apertura", desc: "Le gallerie partecipanti si attivano in meno di 24 ore, prima dell'apertura della fiera, con una dashboard unica per le transazioni dell'evento." },
];

const Fiere = () => (
  <>
    <PageHero
      halo="top-left"
      label="Fiere d'arte"
      title="Il pagamento rateale arriva in fiera."
      body="Con Artpay lo stand diventa un checkout digitale, il collezionista sceglie il piano dal telefono e la trattativa resta aperta anche dopo la chiusura della fiera."
      primary={{ label: "Porta Artpay alla tua fiera", to: "/demo" }}
      secondary={{ label: "Come funziona in stand", to: "/come-funziona" }}
    />

    <FastShowcase
      title="Dallo stand al pagamento in venti secondi."
      firstStep="Inserisci opera, importo e commissioni e il link è pronto in circa 20 secondi."
    />

    <section className="border-t border-border bg-paper">
      <Container className="py-16">
        <p className="text-2xl sm:text-3xl font-medium text-foreground max-w-3xl leading-snug">
          Secondo i dati interni di Artpay, tra il 30 e il 40% delle vendite d'arte parte in fiera e si chiude nei giorni successivi,
          per questo Artpay accompagna il collezionista anche fuori dallo stand.
        </p>
        <p className="mt-4 text-sm text-pewter">Dato interno Artpay sulle transazioni post fiera.</p>
      </Container>
    </section>

    <Section>
      <Heading title="Dallo stand alla vendita in pochi minuti." />
      <div className="mt-12 grid sm:grid-cols-2 gap-6">
        {features.map((f) => (
          <InfoCard key={f.title} title={f.title} desc={f.desc} />
        ))}
      </div>
    </Section>

    <Section>
      <Heading title="Presenti nelle principali fiere italiane." />
      <div className="mt-10 grid sm:grid-cols-2 gap-6">
        <div className="p-8 rounded border border-border bg-card">
          <h3 className="text-lg font-medium text-foreground">The Phair 2026</h3>
          <p className="mt-2 text-muted-foreground">Technology partner ufficiale, Torino, maggio 2026.</p>
        </div>
        <div className="p-8 rounded border border-border bg-card">
          <h3 className="text-lg font-medium text-foreground">The Others Art Fair</h3>
          <p className="mt-2 text-muted-foreground">Partner fintech nel 2025.</p>
        </div>
      </div>
      <div className="mt-8">
        <span className="text-sm text-slate">In dialogo con</span>
        <p className="mt-3 text-muted-foreground">Artissima, miart, Arte in Nuvola, Flashback, MEGA Art Fair e Art Verona.</p>
      </div>
    </Section>

    <Section>
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <Heading title="Per chi organizza la fiera." />
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <p>
            Artpay offre agli organizzatori un servizio distintivo per i partecipanti e un dato aggregato sulle vendite dell'edizione,
            cioè interazioni, link generati e vendite chiuse in fiera e dopo la fiera.
          </p>
          <p>Sono disponibili co-branding e white label.</p>
        </div>
      </div>
    </Section>

    <FinalCta
      title="Parliamo della tua prossima edizione."
      subtext="Le gallerie si attivano in meno di 24 ore, con una dashboard unica per tutto l'evento."
      primary={{ label: "Richiedi una demo", to: "/demo" }}
    />
  </>
);

export default Fiere;
