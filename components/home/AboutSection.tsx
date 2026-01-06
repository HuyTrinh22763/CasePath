import { Users, Lightbulb, ShieldCheck } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Community First",
    description: "Built by practitioners, for practitioners. Connect with peers who share your passion for problem-solving."
  },
  {
    icon: Lightbulb,
    title: "Real-World Context",
    description: "Move beyond theory. Our cases are grounded in actual business and technical scenarios faced by professionals."
  },
  {
    icon: ShieldCheck,
    title: "Pure Knowledge",
    description: "A safe space for learning. No hidden sales pitches, no course up-selling. Just pure, shared wisdom."
  }
]

export function AboutSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/5 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-8 justify-items-center text-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10 text-secondary mb-2">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-primary">{feature.title}</h3>
              <p className="text-muted-foreground text-center max-w-[300px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 max-w-3xl mx-auto text-center space-y-4">
             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Why CasePath?</h2>
             <p className="text-lg text-muted-foreground">
                 We believe that the best way to learn is through the lens of experience. By sharing cases, we democratize knowledge and help each other navigate complex challenges with confidence.
             </p>
        </div>
      </div>
    </section>
  )
}
