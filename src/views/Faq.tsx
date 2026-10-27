"use client";

import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageHero, Section, FinalCta } from "@/components/sections/Primitives";

const faqs = [
  { q: "Cos'è Artpay?", a: "Artpay porta il pagamento rateale nel flusso dell'asta e riunisce partner finanziari regolamentati come Santander e Klarna in un'unica interfaccia, mentre credito e fondi restano in capo ai partner." },
  { q: "Come funziona Artpay FAST?", a: "Generi il link in circa 20 secondi e lo invii al collezionista per WhatsApp, email o QR. Lui sceglie il piano e il partner finanziario versa il 100% alla casa d'asta." },
  { q: "Fino a quanti mesi si può rateizzare?", a: "Da 3 a 84 mesi, in base al partner finanziario e al profilo del collezionista. I piani più frequenti vanno da 3 a 48 mesi." },
  { q: "Quanto costa Artpay?", a: "La commissione di servizio è a carico dell'acquirente e la percentuale si definisce con ogni casa d'asta. Viene mostrata prima della scelta del metodo di pagamento e la proposta sulla tua asta si vede in demo." },
  { q: "Le commissioni d'asta entrano nel piano rateale?", a: "Sì, lotto e commissioni confluiscono in un'unica rata mensile." },
  { q: "E se il finanziamento viene rifiutato?", a: "Decide il partner finanziario, quindi la casa d'asta tiene disponibile un metodo di pagamento alternativo." },
  { q: "Si integra con il mio gestionale?", a: "Artpay si aggiunge al processo esistente senza modifiche strutturali, e le integrazioni native con i software d'asta sono in sviluppo." },
  { q: "Il collezionista deve scaricare un'app?", a: "Il link si apre dal browser del telefono, quindi il collezionista non scarica nulla." },
  { q: "La casa d'asta mantiene il rapporto con il collezionista?", a: "Il rapporto resta diretto, perché il checkout porta il marchio della casa d'asta e Artpay rimane un supporto discreto." },
  { q: "Artpay è conforme alla normativa italiana?", a: "Artpay è progettato per la conformità, fornisce la tecnologia mentre credito e fondi restano ai partner finanziari e il processo è interamente digitale. È pronto al D.Lgs. 212/2025 (CCD2)." },
  { q: "Artpay è disponibile solo in Italia?", a: "Oggi il servizio è attivo in Italia, mentre Spagna e Francia sono in roadmap." },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const Faq = () => (
  <>
    <PageHero label="FAQ" title="Le risposte su Artpay." body="Funzionamento, costi, integrazione e conformità per le case d'asta." />

    <Section border={false}>
      <Accordion type="single" collapsible className="max-w-3xl">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger className="text-left text-base font-medium text-foreground">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed text-[15px]">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <p className="mt-10 text-muted-foreground">
        Hai altre domande? <Link href="/contatti" className="text-primary hover:underline">Contattaci →</Link>
      </p>
    </Section>

    <FinalCta title="Pronto a iniziare?" primary={{ label: "Richiedi una demo", to: "/demo" }} secondary={{ label: "Come funziona", to: "/come-funziona" }} />
  </>
);

export default Faq;
