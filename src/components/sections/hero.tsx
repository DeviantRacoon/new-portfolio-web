import { Button } from "@/components/ui/button";
import { personalData } from "@/lib/data";
import { Download, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative mx-4 md:mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 md:gap-16 py-16 sm:py-24 lg:py-32 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl scroll-mt-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent lg:hidden" />
      <div className="space-y-8 order-2 lg:order-first z-10 mt-24 lg:mt-0">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary/80 bg-primary/10 px-2 py-1 rounded-md">
          {personalData.name}
        </span>
        <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">
          {personalData.title}
        </h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-muted-foreground">
          {personalData.summary}
        </p>
        
        <div className="mt-8 flex flex-wrap justify-start gap-4">
          <Button asChild size="lg" variant="default">
            <a href="#contact">
              Contáctame <Send className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={personalData.cvUrl} target="_blank" rel="noopener noreferrer">
              Descargar CV <Download className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="mt-10 flex justify-start gap-6">
          {personalData.contact.social.map((social) => (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <social.icon className="h-6 w-6" />
            </Link>
          ))}
        </div>
      </div>
      <div className="relative order-1 lg:order-last flex justify-center lg:justify-end mx-auto lg:mx-0 z-0">
        <div className="absolute inset-0 flex justify-center items-start pt-2 sm:pt-4 md:pt-6 pointer-events-none select-none opacity-25 md:opacity-30 lg:opacity-100 lg:static lg:inset-auto lg:pt-0">
          <Image
            src={personalData.profilePicture}
            alt={personalData.name}
            width={400}
            height={400}
            priority
            sizes="(max-width: 640px) 70vw, (max-width: 1024px) 55vw, 400px"
            className="rounded-full aspect-square object-cover ring-4 ring-primary/20 shadow-xl w-[70vw] sm:w-[55vw] max-w-[460px] lg:w-[400px] h-auto"
          />
          {/* Indicador de estado estilo Slack */}
          <div className="absolute" style={{ bottom: '10px', right: '100px' }}>
            <span className="block h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-green-500 ring-2 ring-background shadow-[0_0_0_1px_rgba(0,0,0,0.05)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
