import { Header } from "@/components/header";
import { Hero } from "@/components/sections/hero";
import { CaseStudies } from "@/components/sections/case-studies";
import { Achievements } from "@/components/sections/achievements";
import { Experience } from "@/components/sections/experience";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";
import { SmoothScroll } from "@/components/smooth-scroll";
import { PersonJsonLd, WebsiteJsonLd } from "@/components/seo/JsonLd";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex flex-col justify-center items-center ">
        {/* JSON-LD para SEO */}
        <PersonJsonLd />
        <WebsiteJsonLd />
        <SmoothScroll/>
        <Hero />
        <CaseStudies />
        <section className="flex flex-col justify-center items-center w-full bg-muted/50">
          <Achievements />
        </section>
          <Experience />
        <section className="flex flex-col justify-center items-center w-full bg-muted/50">
          <Testimonials />
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
