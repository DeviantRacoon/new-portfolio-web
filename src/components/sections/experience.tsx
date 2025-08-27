import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { experience, aboutMe } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="bg-muted/50 py-20 sm:py-32">
      <div className="container grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">My Journey</h2>
          <div className="relative flex flex-col gap-8 before:absolute before:left-[1.15rem] before:top-0 before:h-full before:w-px before:bg-border">
            {experience.map((item) => (
              <div key={item.company} className="relative flex items-start gap-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold">{item.role}</h3>
                  <p className="font-medium text-primary">{item.company}</p>
                  <p className="text-sm text-muted-foreground mb-2">{item.period}</p>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">About Me</h2>
          <Card>
            <CardHeader>
              <CardTitle>A Little More About Me</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">{aboutMe.description}</p>
              
              <h4 className="font-semibold mb-4">Core Skills</h4>
              <div className="grid grid-cols-2 gap-4">
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
