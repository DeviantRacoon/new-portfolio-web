import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { achievements } from "@/lib/data";

export function Achievements() {
  return (
    <section id="achievements" className="py-20 sm:py-32 scroll-mt-24">
      <div className="mx-4 md:mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary/80 bg-primary/10 px-2 py-1 rounded-md">Impacto</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">Logros Profesionales</h2>
          <p className="mt-3 text-base sm:text-lg text-muted-foreground">
            Una selección de mis contribuciones e impactos más significativos.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement) => (
            <Card key={achievement.title} className="flex flex-col transition hover:shadow-lg hover:-translate-y-0.5">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <achievement.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-base sm:text-lg">{achievement.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <p className="text-sm sm:text-[0.95rem] text-muted-foreground leading-relaxed">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
