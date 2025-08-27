import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/data";
import { Check } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="bg-muted/50 py-20 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What I Offer</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From architecture to maintenance, I provide a complete suite of services to build and sustain high-quality software.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <CardDescription className="mb-6">{service.description}</CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground mt-auto">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-4 w-4 mr-2 mt-1 shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
