import Link from "next/link";
import ArtpayLogo from "@/assets/artpay-logo.png.asset.json";

const groups = [
  {
    title: "Soluzioni",
    links: [
      { label: "Case d'asta", to: "/soluzioni/case-daste" },
      { label: "Gallerie", to: "/soluzioni/gallerie" },
      { label: "Fiere", to: "/soluzioni/fiere" },
      { label: "E-commerce arte e collectibles", to: "/soluzioni/piattaforme" },
    ],
  },
  {
    title: "Prodotto",
    links: [
      { label: "Come funziona", to: "/come-funziona" },
      { label: "Partner finanziari", to: "/partner" },
      { label: "FAQ", to: "/faq" },
    ],
  },
  {
    title: "Azienda",
    links: [
      { label: "Chi siamo", to: "/chi-siamo" },
      { label: "Contatti", to: "/contatti" },
      { label: "Accedi", to: "/accedi" },
      { label: "Richiedi una demo", to: "/demo" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="pt-20 pb-10 border-t border-border bg-paper">
      <div className="mx-auto px-6 lg:px-12" style={{ maxWidth: "1200px" }}>
        <div className="grid gap-12 lg:grid-cols-5">
          <div>
            <Link href="/" className="inline-flex items-center">
              <img loading="lazy" src={ArtpayLogo.url} alt="Artpay" className="h-6 w-auto" />
            </Link>
            <p className="mt-4 text-sm text-pewter leading-relaxed max-w-xs">
              Il pagamento rateale per le case d'asta e per il mercato dell'arte, per rendere l'acquisto facile, veloce e accessibile.
            </p>
          </div>
          {groups.map((g) => (
            <div key={g.title}>
              <span className="text-xs text-slate">{g.title}</span>
              <ul className="mt-4 space-y-2.5">
                {g.links.map((l) => (
                  <li key={l.to}>
                    <Link href={l.to} className="text-sm text-pewter hover:text-midnight-ink transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-start gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-xs text-pewter">Artpay fornisce la tecnologia, il finanziamento si conclude tra collezionista e partner finanziario e i fondi restano in capo a soggetti autorizzati.</span>
            <span className="text-xs text-pewter">© 2026 Artpay S.r.l., Via Carloforte 60, 09123 Cagliari CA, P.IVA 04065160923</span>
          </div>
          <div className="flex gap-6 text-xs text-pewter">
            <a href="#" className="hover:text-midnight-ink transition-colors">Privacy</a>
            <a href="#" className="hover:text-midnight-ink transition-colors">Termini</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
