"use client";

import { useState, useMemo } from 'react';
import { CaseStudyCard } from "@/components/case-study-card";
import { caseStudies } from "@/lib/data";
import { Input } from '@/components/ui/input';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CaseStudies() {
  const [search, setSearch] = useState('');

  const filteredStudies = useMemo(() => {
    return caseStudies.filter(study => 
      study.title.toLowerCase().includes(search.toLowerCase()) ||
      study.client.toLowerCase().includes(search.toLowerCase()) ||
      study.stack.some(tech => tech.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search]);

  return (
    <section id="case-studies" className="py-20 sm:py-32 scroll-mt-24">
      <div className="mx-4 md:mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary/80 bg-primary/10 px-2 py-1 rounded-md">Portafolio</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">Estudios de Caso</h2>
          <p className="mt-3 text-base sm:text-lg text-muted-foreground">
            Un vistazo a cómo he ayudado a las empresas a superar desafíos y alcanzar sus metas.
          </p>
        </div>
        
        <div className="mt-8 mb-12 max-w-md mx-auto">
          <Input 
            type="text"
            placeholder="Buscar por título, cliente o tecnología..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full"
          />
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {filteredStudies.map((study) => (
              <CarouselItem key={study.title} className="basis-full sm:basis-2/3 md:basis-1/2 lg:basis-1/3">
                <div className="p-2 h-full">
                  <CaseStudyCard study={study} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
        {filteredStudies.length === 0 && (
            <p className="text-center text-muted-foreground mt-8">No se encontraron proyectos.</p>
        )}
      </div>
    </section>
  );
}
