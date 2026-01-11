import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen } from "lucide-react"

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden py-12 md:py-24 lg:py-32 xl:py-48 bg-white/60 dark:bg-slate-950/80 backdrop-blur-3xl transition-colors duration-300" style={{ backgroundColor: undefined }}>
      
      {/* Sparkling Glass Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-2 h-2 rounded-full bg-blue-400/40 dark:bg-blue-400/20 animate-sparkle duration-[3000ms]" />
        <div className="absolute top-[20%] left-[80%] w-3 h-3 rounded-full bg-teal-400/30 dark:bg-teal-400/20 animate-sparkle delay-700 duration-[4000ms]" />
        <div className="absolute top-[50%] left-[40%] w-1 h-1 rounded-full bg-indigo-400/40 dark:bg-indigo-400/20 animate-sparkle delay-1000 duration-[2000ms]" />
        <div className="absolute top-[70%] left-[10%] w-2 h-2 rounded-full bg-blue-300/30 dark:bg-blue-300/20 animate-sparkle delay-500 duration-[5000ms]" />
        <div className="absolute bottom-[20%] right-[20%] w-3 h-3 rounded-full bg-teal-300/40 dark:bg-teal-300/20 animate-sparkle delay-200 duration-[4500ms]" />
        <div className="absolute top-[15%] right-[15%] w-1.5 h-1.5 rounded-full bg-blue-500/20 dark:bg-blue-500/10 animate-sparkle delay-1500 duration-[3500ms]" />
        <div className="absolute bottom-[40%] left-[5%] w-2 h-2 rounded-full bg-indigo-300/30 dark:bg-indigo-300/20 animate-sparkle delay-2500 duration-[4000ms]" />
        <div className="absolute top-[5%] left-[50%] w-2.5 h-2.5 rounded-full bg-teal-200/50 dark:bg-teal-200/30 animate-sparkle delay-3000 duration-[5500ms]" />
        <div className="absolute bottom-[10%] left-[60%] w-1.5 h-1.5 rounded-full bg-blue-400/30 dark:bg-blue-400/20 animate-sparkle delay-1200 duration-[3200ms]" />
        <div className="absolute top-[40%] right-[5%] w-2 h-2 rounded-full bg-indigo-400/20 dark:bg-indigo-400/10 animate-sparkle delay-1800 duration-[4200ms]" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-2 lg:gap-0 items-center justify-items-center">
          
          {/* Left Layout: Animated Text & Button */}
          <div className="flex flex-col items-start gap-8 text-left max-w-2xl lg:ml-auto">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl flex flex-wrap gap-x-4 gap-y-2 leading-[1.1] text-[#19304D] dark:text-sky-50 transition-colors duration-300">
              <span className="animate-in fade-in slide-in-from-bottom-6 duration-700 fill-mode-forwards">Think</span>
              <span className="animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 fill-mode-forwards">in</span>
              <span className="animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200 fill-mode-forwards bg-clip-text text-transparent bg-[linear-gradient(90deg,#19304D,#506783,#19304D)] dark:bg-[linear-gradient(90deg,#60A5FA,#93C5FD,#60A5FA)] bg-[length:200%_auto] animate-gradient font-black">Cases.</span>
              <div className="basis-full h-0"></div>
              <span className="animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300 fill-mode-forwards">Move</span>
              <span className="animate-in fade-in slide-in-from-bottom-6 duration-700 delay-400 fill-mode-forwards">with</span>
              <span className="animate-in fade-in slide-in-from-bottom-6 duration-700 delay-500 fill-mode-forwards bg-clip-text text-transparent bg-[linear-gradient(90deg,#155D4C,#239E82,#4CCEB0,#239E82,#155D4C)] dark:bg-[linear-gradient(90deg,#2DD4BF,#5EEAD4,#99F6E4,#5EEAD4,#2DD4BF)] bg-[length:200%_auto] animate-gradient font-black">Purpose.</span>
            </h1>

            <div className="animate-in fade-in zoom-in duration-700 delay-700 fill-mode-forwards mt-2">
               <Button asChild size="lg" className="h-16 px-10 text-xl rounded-full group shadow-2xl transition-all border-b-4 font-bold hover:scale-105 active:scale-95 bg-[#239E82] text-white border-black/10 dark:bg-teal-600 dark:border-white/10 dark:hover:shadow-teal-900/50" style={{ backgroundColor: undefined, color: undefined, borderColor: undefined }}>
                <Link href="/blog">
                  VIEW BLOGS
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Layout: Floating Hero & Image */}
          <div className="relative w-full flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-10 duration-1000 delay-500">
             <div className="relative w-full max-w-[650px] aspect-[16/10] animate-float hover:scale-[1.02] hover:rotate-1 transition-all duration-500">
                
                {/* Light Mode: Milky White Blended Glass */}
                <Image 
                  src="/assets/hero_glass_light_colored.png" 
                  alt="CasePath Hero Light" 
                  fill
                  className="object-contain relative z-10 dark:hidden mix-blend-multiply transition-opacity duration-500"
                  priority
                />
                
                {/* Dark Mode: Deep Blended Glass */}
                <Image 
                  src="/assets/hero_glass_dark.png" 
                  alt="CasePath Hero Dark" 
                  fill
                  className="object-contain relative z-10 hidden dark:block transition-opacity duration-500"
                  priority
                />
             </div>
          </div>

        </div>
      </div>
    </section>
  )
}
