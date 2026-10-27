import { Section, Heading, PageHero, InfoCard, FinalCta } from "@/components/sections/Primitives";

const stack = [
  { title: "API first", desc: "REST API con webhook e SDK leggeri, documentazione completa e sandbox per i test." },
  { title: "Orchestrazione dei pagamenti", desc: "Santander, Klarna e altri partner in integrazione, con piani da 3 a 84 mesi. Il leasing operativo è in roadmap." },
  { title: "White label", desc: "Checkout e dashboard portano il tuo marchio, quindi i tuoi clienti restano nel tuo ambiente." },
  { title: "Conformità nell'architettura", desc: "Il processo è digitale tramite Stripe Connect e Artpay fornisce la tecnologia, mentre credito e fondi restano in capo ai partner finanziari." },
];

const Piattaforme = () => (
  <>
    <PageHero
      halo="bottom-right"
      label="E-commerce e piattaforme"
      title="Il pagamento rateale arriva online."
      body="Con Artpay marketplace, e-commerce e software integrano rate fino a 84 mesi, conformità CCD2 e tracciamento completo delle interazioni con un'unica integrazione."
      primary={{ label: "Parla con il nostro team tecnico", to: "/demo" }}
    />

    <Section border={false}>
      <Heading title="Per chi vende arte e collectibles online." />
      <p className="mt-6 max-w-3xl text-muted-foreground leading-relaxed">
        Ci rivolgiamo a e-commerce e marketplace di arte, design e collectibles e ai software che servono gallerie, case d'asta e
        fiere, come gestionali di catalogo, CRM e piattaforme d'asta. Se i tuoi clienti vendono online e non hanno ancora un
        pagamento rateale integrato, possiamo parlarne.
      </p>
    </Section>

    <Section>
      <Heading title="Un'architettura pensata per l'integrazione." />
      <div className="mt-12 grid sm:grid-cols-2 gap-6">
        {stack.map((s) => (
          <InfoCard key={s.title} title={s.title} desc={s.desc} />
        ))}
      </div>
    </Section>

    <Section>
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <Heading title="Revenue share sulle transazioni che generi." />
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <p>L'integrazione non ha costi di setup e su ogni transazione conclusa attraverso la tua piattaforma condividiamo il ricavo.</p>
          <p>Il tuo prodotto acquisisce una funzionalità molto utile ai clienti, senza doverla costruire da zero.</p>
        </div>
      </div>
    </Section>

    <FinalCta
      title="Parliamo del modello di partnership."
      subtext="Integrazione API, sandbox e documentazione completa, con revenue share sulle transazioni."
      primary={{ label: "Richiedi una demo", to: "/demo" }}
    />
  </>
);

export default Piattaforme;
