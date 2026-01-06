import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen } from "lucide-react"

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden py-12 md:py-24 lg:py-32 xl:py-48">
       {/* Background (Option A: Sky + Navy Theme) */}
       <div 
         className="absolute inset-0 z-0"
         style={{
           background: "linear-gradient(180deg, #F3F8FF 0%, #FFFFFF 55%, #F6FAFF 100%)"
         }}
       />
       
       {/* Background Image Overlay */}
       <div className="absolute inset-0 z-0 opacity-15 mix-blend-multiply">
          <Image 
             src="/assets/background.jpg"
             alt="Background Pattern"
             fill
             className="object-cover"
             priority
          />
       </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            Think in <span className="text-secondary">Cases</span>. <br className="hidden sm:inline" />
            Move with Purpose.
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl leading-relaxed">
            CasePath is the premier community for sharing real-world business and technical cases.
            Learn from experience, not just theory.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
            <Button asChild size="lg" className="h-12 px-8 text-lg bg-primary hover:bg-primary/90 active:scale-[0.98] text-primary-foreground rounded-full group shadow-lg shadow-primary/20 transition-all">
              <Link href="/blog">
                Explore Knowledge Base
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
