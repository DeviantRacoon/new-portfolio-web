import { Header } from "@/components/header";
import { Hero } from "@/components/sections/hero";
import { CaseStudies } from "@/components/sections/case-studies";
import { Services } from "@/components/sections/services";
import { Experience } from "@/components/sections/experience";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <CaseStudies />
        <Services />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
