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
    <section className="w-full py-20 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative Mesh Background */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-8 justify-items-center text-center">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center gap-6 p-10 rounded-[2.5rem] bg-white/80 backdrop-blur-xl border border-white hover:border-secondary/20 shadow-xl shadow-slate-200/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'both' }}
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-secondary/10 text-secondary mb-2 transition-colors">
                <feature.icon className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-primary tracking-tight">{feature.title}</h3>
              <p className="text-muted-foreground text-center max-w-[320px] text-lg leading-relaxed">
                {index === 0 ? (
                  <>Built by <span className="text-primary font-bold">practitioners</span>, for practitioners. Connect with peers who share your passion.</>
                ) : index === 1 ? (
                  <>Move beyond theory. Our cases are grounded in <span className="text-secondary font-bold">actual business and technical scenarios</span>.</>
                ) : (
                  <>A safe space for learning. No hidden sales pitches. Just <span className="text-primary font-bold">pure, shared wisdom</span>.</>
                )}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-32 max-w-4xl mx-auto text-center space-y-8 animate-in fade-in duration-1000 delay-700">
             <h2 className="text-4xl font-black tracking-tight sm:text-5xl text-primary">Why CasePath?</h2>
             <div className="h-1.5 w-24 bg-secondary/30 mx-auto rounded-full" />
             <p className="text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto">
                 We believe that the best way to learn is through the <span className="text-primary font-bold underline decoration-secondary/20 decoration-4 underline-offset-4">lens of experience</span>. By sharing cases, we democratize knowledge and help each other navigate complex challenges.
             </p>
        </div>
      </div>
    </section>
  )
}
