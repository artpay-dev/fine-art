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
  telefono: z.string().trim().max(30).optional().or(z.literal("")),
  tipo: z.string().nonempty("Seleziona il tipo di attività"),
  note: z.string().trim().max(1000).optional().or(z.literal("")),
});

const tipi = ["Casa d'asta", "Fiera d'arte", "Piattaforma/Software", "Galleria", "Altro"];

const Demo = () => {
  const { toast } = useToast();
  const [tipo, setTipo] = useState("Casa d'asta");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      nome: (form.elements.namedItem("nome") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      telefono: (form.elements.namedItem("telefono") as HTMLInputElement).value,
      tipo,
      note: (form.elements.namedItem("note") as HTMLTextAreaElement).value,
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
    setTipo("");
    toast({ title: "Richiesta inviata", description: "Il team Artpay ti ricontatta entro 24 ore." });
  };

  return (
    <>
      <section className="relative overflow-hidden bg-background pt-32 pb-20 lg:pt-40">
        <div className="hero-halo absolute pointer-events-none" style={{ top: "-20%", right: "-15%", width: "55%", height: "100%", filter: "blur(48px)", opacity: 0.5 }} />
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h1 className="text-foreground" style={{ fontSize: "clamp(2.6rem, 5vw, 56px)", lineHeight: 1.05, fontWeight: 500, letterSpacing: "-0.03em" }}>
                Parliamo.
              </h1>
              <p className="mt-6 text-lg text-steel leading-relaxed max-w-md">
                 Raccontaci in due righe la tua asta e ti rispondiamo entro 24 ore.
              </p>
              <div className="mt-8 text-sm text-pewter">
                <p>Contatto diretto</p>
                <p className="mt-1 text-fog">luca@artpay.art, +39 328 885 3536</p>
              </div>
            </div>

            <form onSubmit={onSubmit} noValidate className="p-8 rounded border border-border bg-card space-y-5">
              <div>
                <Label htmlFor="nome">Nome *</Label>
                <Input id="nome" name="nome" className="mt-1.5" />
                {errors.nome && <p className="mt-1 text-xs text-destructive">{errors.nome}</p>}
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input id="email" name="email" type="email" className="mt-1.5" />
                {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
              </div>
              <div>
                <Label htmlFor="telefono">Telefono</Label>
                <Input id="telefono" name="telefono" className="mt-1.5" />
              </div>
              <div>
                <Label>Tipo di attività *</Label>
                <Select value={tipo} onValueChange={setTipo}>
                  <SelectTrigger className="mt-1.5">
                    <SelectValue placeholder="Seleziona…" />
                  </SelectTrigger>
                  <SelectContent>
                    {tipi.map((t) => (
                      <SelectItem key={t} value={t}>{t}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.tipo && <p className="mt-1 text-xs text-destructive">{errors.tipo}</p>}
              </div>
              <div>
                <Label htmlFor="note">Note (opzionale)</Label>
                <Textarea id="note" name="note" rows={4} className="mt-1.5" />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">Invia →</Button>
              <p className="text-xs text-pewter leading-relaxed">
                La richiesta è senza impegno e non comporta l'iscrizione alla newsletter. Il team Artpay risponde entro 24 ore.
              </p>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Demo;
