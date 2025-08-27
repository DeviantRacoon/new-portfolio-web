import { Button } from "@/components/ui/button";
import { personalData } from "@/lib/data";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section id="hero" className="container flex flex-col justify-center py-20 sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          {personalData.title}
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
          {personalData.summary}
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg" variant="accent">
            <a href="#contact">Hire Me</a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#case-studies">
              View My Work <ArrowDown className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
        <div className="mt-10 flex justify-center gap-6">
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
    </section>
  );
}
