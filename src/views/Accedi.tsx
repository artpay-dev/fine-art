"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Container } from "@/components/sections/Primitives";

const LoginCard = ({ icon, title }: { icon: string; title: string }) => (
  <form className="p-8 rounded border border-border bg-card space-y-4" onSubmit={(e) => e.preventDefault()}>
    <div className="flex items-center gap-3">
      <span className="text-2xl">{icon}</span>
      <h2 className="text-lg font-medium text-foreground">{title}</h2>
    </div>
    <div>
      <Label htmlFor={`${title}-email`}>Email</Label>
      <Input id={`${title}-email`} type="email" className="mt-1.5" />
    </div>
    <div>
      <Label htmlFor={`${title}-pw`}>Password</Label>
      <Input id={`${title}-pw`} type="password" className="mt-1.5" />
    </div>
    <Button type="submit" variant="hero" size="lg" className="w-full">Accedi →</Button>
  </form>
);

const Accedi = () => (
  <>
    <section className="relative overflow-hidden bg-background pt-32 pb-20 lg:pt-40">
      <Container>
        <h1 className="text-foreground max-w-2xl" style={{ fontSize: "clamp(2.4rem, 5vw, 48px)", lineHeight: 1.05, fontWeight: 500, letterSpacing: "-0.03em" }}>
          Accedi alla tua area Artpay.
        </h1>
        <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-3xl">
          <LoginCard icon="🏛️" title="Case d'Aste" />
          <LoginCard icon="🎨" title="Galleria" />
        </div>
        <div className="mt-8 text-sm text-muted-foreground space-y-1 max-w-3xl">
          <p>
            Prima volta? <Link href="/contatti" className="text-primary hover:underline">Contattaci →</Link>
          </p>
          <p>Password dimenticata? <a href="#" className="text-primary hover:underline">Recupera</a></p>
          <p className="mt-4 text-pewter">
            L'accesso è riservato ai partner Artpay attivi. Per attivare un account,{" "}
            <Link href="/demo" className="text-primary hover:underline">Richiedi una demo →</Link>
          </p>
        </div>
      </Container>
    </section>
  </>
);

export default Accedi;
