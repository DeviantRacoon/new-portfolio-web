"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CaseStudy, caseStudies } from "@/lib/data";
import { ArrowRight, BarChart, FileText, Target, Zap } from "lucide-react";
import { ContentEnhancerDialog } from "./content-enhancer-dialog";

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
}

export function CaseStudyCard({ study, index }: CaseStudyCardProps) {
  const [problem, setProblem] = useState(study.problem);
  const [process, setProcess] = useState(study.process);
  const [result, setResult] = useState(study.result);

  const isReversed = index % 2 !== 0;

  return (
    <Card className="overflow-hidden">
      <div className={`grid md:grid-cols-2 items-center`}>
        <div className={`order-1 ${isReversed ? 'md:order-2' : ''}`}>
          <Image
            src={study.image}
            alt={study.title}
            width={600}
            height={400}
            className="w-full h-auto object-cover"
            data-ai-hint={study.imageHint}
          />
        </div>
        <div className={`order-2 p-8 ${isReversed ? 'md:order-1' : ''}`}>
          <h3 className="text-2xl font-bold">{study.title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{study.client}</p>

          <div className="space-y-6 mt-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Target className="h-5 w-5 text-primary" />
                <h4 className="font-semibold">The Problem</h4>
                <ContentEnhancerDialog
                  sectionTitle="The Problem"
                  originalContent={problem}
                  onUpdate={setProblem}
                />
              </div>
              <p className="text-muted-foreground text-sm">{problem}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Zap className="h-5 w-5 text-primary" />
                <h4 className="font-semibold">The Process</h4>
                 <ContentEnhancerDialog
                  sectionTitle="The Process"
                  originalContent={process}
                  onUpdate={setProcess}
                />
              </div>
              <p className="text-muted-foreground text-sm">{process}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <BarChart className="h-5 w-5 text-primary" />
                <h4 className="font-semibold">The Result</h4>
                 <ContentEnhancerDialog
                  sectionTitle="The Result"
                  originalContent={result}
                  onUpdate={setResult}
                />
              </div>
              <p className="text-muted-foreground text-sm">{result}</p>
            </div>
          </div>
          
          <div className="mt-6">
              <h4 className="font-semibold mb-2">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {study.stack.map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
          </div>

          <Button asChild variant="link" className="px-0 mt-4">
            <Link href={study.link}>
              View Project <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}
