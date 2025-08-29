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
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Estudios de Caso</h2>
          <p className="mt-4 text-lg text-muted-foreground">
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
              <CarouselItem key={study.title} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
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
