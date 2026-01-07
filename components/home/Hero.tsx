import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen } from "lucide-react"

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden py-12 md:py-24 lg:py-32 xl:py-48" style={{ backgroundColor: '#FCFDFD' }}>
      
      {/* Background Image with Seamless Blend */}
      <div className="absolute inset-0 z-0">
         <Image 
            src="/assets/background.jpg"
            alt="Background Pattern"
            fill
            className="object-cover opacity-60"
            priority
         />
         {/* Gradient Overlay for Perfect Blend */}
         <div className="absolute inset-0 bg-gradient-to-t from-[#FCFDFD] via-[#FCFDFD]/80 to-transparent" />
         <div className="absolute inset-0 bg-gradient-to-r from-[#FCFDFD] via-transparent to-[#FCFDFD]" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl flex flex-col items-center overflow-hidden py-2" style={{ color: '#19304D' }}>
            <span className="block animate-in fade-in slide-in-from-right-1/2 duration-1000 fill-mode-forwards">
              Think in <span className="font-black animate-pulse" style={{ color: '#19304D' }}>Cases</span>.
            </span>
            <span className="block animate-in fade-in slide-in-from-left-1/2 duration-1000 delay-300 fill-mode-forwards">
              Move with <span className="font-black animate-pulse" style={{ color: '#239E82' }}>Purpose</span>.
            </span>
          </h1>
          <p className="max-w-[700px] text-lg md:text-xl leading-relaxed animate-in fade-in zoom-in duration-1000 delay-500 font-medium drop-shadow-sm" style={{ color: '#19304D' }}>
            CasePath is the premier community for sharing <span className="font-extrabold italic" style={{ color: '#19304D' }}>real-world business</span> and <span className="font-extrabold italic" style={{ color: '#19304D' }}>technical cases</span>.
            Learn from <span className="font-black italic" style={{ color: '#239E82' }}>experience</span>, not just <span className="font-black italic" style={{ color: '#239E82' }}>theory</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4 animate-in fade-in zoom-in duration-700 delay-700 fill-mode-forwards">
            <Button asChild size="lg" className="h-14 px-10 text-lg rounded-full group shadow-xl transition-all border-b-4 font-bold hover:scale-105 active:scale-95" style={{ backgroundColor: '#239E82', color: 'white', borderColor: 'rgba(25, 48, 77, 0.1)' }}>
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
