import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { experience, aboutMe } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-32 scroll-mt-24">
      <div className="mx-4 md:mx-auto grid md:grid-cols-2 gap-12 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
        <div>
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary/80 bg-primary/10 px-2 py-1 rounded-md">Experiencia</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl mb-8 bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">Mi Trayectoria</h2>
          <div className="relative flex flex-col gap-8 before:absolute before:left-5 sm:before:left-[1.15rem] before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-primary/40 before:to-transparent">
            {experience.map((item) => (
              <div key={item.company} className="relative flex items-start gap-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{item.role}</h3>
                  <p className="font-medium text-primary">{item.company}</p>
                  <p className="text-xs text-muted-foreground mb-2">{item.period}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary/80 bg-primary/10 px-2 py-1 rounded-md">Perfil</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl mb-8 bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">Sobre Mí</h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Un Poco Más Sobre Mí</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6 leading-relaxed">{aboutMe.description}</p>
              
              <h4 className="font-semibold mb-4">Habilidades Principales</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {aboutMe.skills.map(skill => (
                  <div key={skill.name} className="flex items-center gap-2 text-sm">
                    <skill.icon className="h-4 w-4 text-primary" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>

               <div className="flex items-center gap-2 text-sm mt-6 text-muted-foreground">
                    <aboutMe.icon className="h-4 w-4 text-primary" />
                    <span>{aboutMe.location}</span>
                </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
