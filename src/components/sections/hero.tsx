import { Button } from "@/components/ui/button";
import { personalData } from "@/lib/data";
import { Download, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section id="hero" className="container grid lg:grid-cols-3 items-center gap-12 py-20 sm:py-32">
      <div className="lg:col-span-2 space-y-8">
        <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          {personalData.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          {personalData.summary}
        </p>
        <div className="mt-8 flex flex-wrap justify-start gap-4">
          <Button asChild size="lg" variant="accent">
            <a href="#contact">
              Contact Me <Send className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={personalData.cvUrl} target="_blank" rel="noopener noreferrer">
              Download CV <Download className="ml-2 h-4 w-4" />
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
       <div className="relative mx-auto lg:mx-0">
        <Image
          src={personalData.profilePicture}
          alt="Alex Doe"
          width={400}
          height={400}
          className="rounded-full aspect-square object-cover border-4 border-primary/20 shadow-lg"
          data-ai-hint={personalData.profilePictureHint}
        />
         <div className="absolute -bottom-4 -right-4 bg-background p-2 rounded-full border border-border shadow-md">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">HIRE ME</span>
            </div>
          </div>
      </div>
    </section>
  );
}
