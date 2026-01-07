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
    <section className="w-full py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#E0E8EC' }}>
      {/* Decorative Mesh Background */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[120px]" style={{ backgroundColor: '#89A5B8' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[150px]" style={{ backgroundColor: '#239E82' }} />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-8 justify-items-center text-center">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center gap-6 p-10 rounded-[2.5rem] backdrop-blur-xl border shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ 
                backgroundColor: '#FCFDFD',
                borderColor: '#FCFDFD',
                animationDelay: `${index * 150}ms`, 
                animationFillMode: 'both',
                boxShadow: '0 20px 40px -10px rgba(80, 103, 131, 0.15)'
              }}
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl mb-2 transition-colors" style={{ backgroundColor: 'rgba(35, 158, 130, 0.1)', color: '#239E82' }}>
                <feature.icon className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight" style={{ color: '#19304D' }}>{feature.title}</h3>
              <p className="text-center max-w-[320px] text-lg leading-relaxed" style={{ color: '#506783' }}>
                {index === 0 ? (
                  <>Built by <span className="font-bold" style={{ color: '#19304D' }}>practitioners</span>, for practitioners. Connect with peers who share your passion.</>
                ) : index === 1 ? (
                  <>Move beyond theory. Our cases are grounded in <span className="font-bold" style={{ color: '#239E82' }}>actual business and technical scenarios</span>.</>
                ) : (
                  <>A safe space for learning. No hidden sales pitches. Just <span className="font-bold" style={{ color: '#19304D' }}>pure, shared wisdom</span>.</>
                )}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-32 max-w-4xl mx-auto text-center space-y-8 animate-in fade-in duration-1000 delay-700">
             <h2 className="text-4xl font-black tracking-tight sm:text-5xl" style={{ color: '#19304D' }}>Why CasePath?</h2>
             <div className="h-1.5 w-24 mx-auto rounded-full" style={{ backgroundColor: '#239E82' }} />
             <p className="text-xl font-medium leading-relaxed max-w-2xl mx-auto" style={{ color: '#506783' }}>
                 We believe that the best way to learn is through the <span className="font-bold underline decoration-4 underline-offset-4" style={{ color: '#19304D', textDecorationColor: 'rgba(35, 158, 130, 0.3)' }}>lens of experience</span>. By sharing cases, we democratize knowledge and help each other navigate complex challenges.
             </p>
        </div>
      </div>
    </section>
  )
}
