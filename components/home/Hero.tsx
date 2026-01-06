import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen } from "lucide-react"

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden py-12 md:py-24 lg:py-32 xl:py-48">
      {/* Rich Background with Layered Blurs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #F3F8FF 0%, #FFFFFF 55%, #F6FAFF 100%)"
          }}
        />
        {/* Animated Background Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-accent/10 rounded-full blur-[100px] animate-pulse delay-700" />
        <div className="absolute top-[20%] right-[10%] w-[25%] h-[25%] bg-primary/5 rounded-full blur-[80px]" />
      </div>
      
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 mix-blend-multiply pointer-events-none">
         <Image 
            src="/assets/background.jpg"
            alt="Background Pattern"
            fill
            className="object-cover"
            priority
         />
      </div>

      {/* Dark Semi-Transparent Overlay with Animated Gradient */}
      <div className="absolute inset-0 z-[5] animate-gradient" style={{
        background: 'linear-gradient(90deg, rgba(15,23,42,0.7) 0%, rgba(30,41,59,0.6) 25%, rgba(11,45,87,0.7) 50%, rgba(30,41,59,0.6) 75%, rgba(15,23,42,0.7) 100%)',
        backdropFilter: 'blur(2px)'
      }} />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl animate-in fade-in slide-in-from-bottom-6 duration-1000 drop-shadow-2xl">
            Think in <span className="text-cyan-300 font-black animate-pulse">Cases</span>. <br className="hidden sm:inline" />
            Move with <span className="text-blue-200 font-black animate-pulse ">Purpose</span>.
          </h1>
          <p className="max-w-[700px] text-lg text-white/95 md:text-xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 font-medium drop-shadow-lg">
            CasePath is the premier community for sharing <span className="text-cyan-200 font-extrabold italic">real-world business</span> and <span className="text-blue-200 font-extrabold italic">technical cases</span>.
            Learn from <span className="text-cyan-100 font-black italic">experience</span>, not just theory.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
            <Button asChild size="lg" className="animate-pulse h-14 px-10 text-lg bg-cyan-400 text-slate-900 hover:bg-cyan-300 active:bg-white active:scale-[0.98] rounded-full group shadow-2xl shadow-cyan-400/30 transition-all border-b-4 border-cyan-500/30 font-bold">
              <Link href="/blog">
                VIEW BLOGS
                
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
