"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CaseStudy } from "@/lib/data";
import { ArrowRight, BarChart, Target, Zap } from "lucide-react";
import { ContentEnhancerDialog } from "./content-enhancer-dialog";

interface CaseStudyCardProps {
  study: CaseStudy;
}

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  const [problem, setProblem] = useState(study.problem);
  const [process, setProcess] = useState(study.process);
  const [result, setResult] = useState(study.result);

  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <Image
        src={study.image}
        alt={study.title}
        width={600}
        height={400}
        className="w-full h-48 object-cover"
        data-ai-hint={study.imageHint}
      />
      <CardContent className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold">{study.title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{study.client}</p>

        <div className="space-y-4 mt-4 flex-grow">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Target className="h-5 w-5 text-primary" />
              <h4 className="font-semibold text-sm">Problema</h4>
              <ContentEnhancerDialog
                sectionTitle="The Problem"
                originalContent={problem}
                onUpdate={setProblem}
              />
            </div>
            <p className="text-muted-foreground text-xs line-clamp-3">{problem}</p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Zap className="h-5 w-5 text-primary" />
              <h4 className="font-semibold text-sm">Resultado</h4>
              <ContentEnhancerDialog
                sectionTitle="The Result"
                originalContent={result}
                onUpdate={setResult}
              />
            </div>
            <p className="text-muted-foreground text-xs line-clamp-3">{result}</p>
          </div>
        </div>
        
        <div className="mt-4">
            <h4 className="font-semibold mb-2 text-sm">Tech Stack</h4>
            <div className="flex flex-wrap gap-1">
              {study.stack.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
              ))}
            </div>
        </div>

        <Button asChild variant="link" className="px-0 mt-4 self-start">
          <Link href={study.link}>
            Ver Proyecto <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
