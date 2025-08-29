import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-32 scroll-mt-24">
      <div className="mx-4 md:mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
        <div className="mx-auto text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary/80 bg-primary/10 px-2 py-1 rounded-md">Testimonios</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">Lo que dicen mis clientes</h2>
          <p className="mt-3 text-base sm:text-lg text-muted-foreground">
            Con la confianza de líderes de producto y ejecutivos de empresas en crecimiento.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full mx-auto mt-12"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="basis-full sm:basis-2/3 md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <Card className="h-full">
                    <CardContent className="flex flex-col items-center text-center p-6">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="rounded-full mb-4 border-2 border-primary/20"
                      />
                      <blockquote className="text-base sm:text-lg font-medium mb-4 leading-relaxed">
                        &ldquo;{testimonial.quote}&rdquo;
                      </blockquote>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.title}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
