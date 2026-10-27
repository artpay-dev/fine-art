"use client";

import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Container } from "@/components/sections/Primitives";

const schema = z.object({
  nome: z.string().trim().nonempty("Inserisci il tuo nome").max(100),
  email: z.string().trim().email("Email non valida").max(255),
  oggetto: z.string().nonempty("Seleziona un oggetto"),
  messaggio: z.string().trim().nonempty("Scrivi un messaggio").max(1000),
});

const oggetti = ["Informazioni generali", "Partnership", "Supporto tecnico", "Stampa", "Altro"];

const Contatti = () => {
  const { toast } = useToast();
  const [oggetto, setOggetto] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      nome: (form.elements.namedItem("nome") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      oggetto,
      messaggio: (form.elements.namedItem("messaggio") as HTMLTextAreaElement).value,
    };
    const result = schema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    form.reset();
    setOggetto("");
    toast({ title: "Messaggio inviato", description: "Ti risponderemo al più presto." });
  };

  return (
    <>
      <section className="relative overflow-hidden bg-background pt-32 pb-20 lg:pt-40">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h1 className="text-foreground" style={{ fontSize: "clamp(2.6rem, 5vw, 56px)", lineHeight: 1.05, fontWeight: 500, letterSpacing: "-0.03em" }}>
                Contattaci.
              </h1>
              <div className="mt-8 space-y-6 text-sm">
                <div>
                  <span className="text-xs text-slate">Email</span>
                  <p className="mt-2 text-fog">hello@artpay.art</p>
                  <p className="text-fog">luca@artpay.art, +39 328 885 3536</p>
                </div>
                <div>
                  <span className="text-xs text-slate">Sede operativa</span>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    The Net Value Srl, Incubatore certificato<br />Viale la Plaia 15, 09123 Cagliari CA
                  </p>
                </div>
                <div>
                  <span className="text-xs text-slate">Sede legale</span>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    Artpay S.r.l., Via Carloforte 60, 09123 Cagliari CA<br />P.IVA 04065160923
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={onSubmit} noValidate className="p-8 rounded border border-border bg-card space-y-5">
              <div>
                <Label htmlFor="nome">Nome</Label>
                <Input id="nome" name="nome" className="mt-1.5" />
                {errors.nome && <p className="mt-1 text-xs text-destructive">{errors.nome}</p>}
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" className="mt-1.5" />
                {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
              </div>
              <div>
                <Label>Oggetto</Label>
                <Select value={oggetto} onValueChange={setOggetto}>
                  <SelectTrigger className="mt-1.5">
                    <SelectValue placeholder="Seleziona…" />
                  </SelectTrigger>
                  <SelectContent>
                    {oggetti.map((o) => (
                      <SelectItem key={o} value={o}>{o}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.oggetto && <p className="mt-1 text-xs text-destructive">{errors.oggetto}</p>}
              </div>
              <div>
                <Label htmlFor="messaggio">Messaggio</Label>
                <Textarea id="messaggio" name="messaggio" rows={4} className="mt-1.5" />
                {errors.messaggio && <p className="mt-1 text-xs text-destructive">{errors.messaggio}</p>}
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">Invia →</Button>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Contatti;
