import { CaseStudyCard } from "@/components/case-study-card";
import { caseStudies } from "@/lib/data";

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Case Studies</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A look at how I've helped businesses overcome challenges and achieve their goals.
          </p>
        </div>
        <div className="mt-12 space-y-16">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.title} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
