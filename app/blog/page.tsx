import { BlogList } from "@/components/blog/BlogList"

export const metadata = {
  title: "Blogs | CasePath",
  description: "Explore real-world business and technical cases shared by the community.",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#FCFDFD] dark:bg-slate-950 transition-colors duration-500">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Blueprint Grid Overlay */}
        <div className="absolute inset-0 z-[1] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.2] bg-grid-slate-200 dark:bg-grid-slate-800" />
        
        {/* Ambient Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-30 animate-pulse duration-[15000ms] bg-[#E0E8EC] dark:bg-slate-800" />
        <div className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[140px] opacity-25 animate-pulse delay-2000 duration-[20000ms] bg-[#89A5B8] dark:bg-slate-700" />
        <div className="absolute bottom-[-10%] left-[20%] w-[400px] h-[400px] rounded-full blur-[120px] opacity-15 animate-pulse delay-5000 duration-[25000ms] bg-[#506783] dark:bg-slate-600" />
      </div>

      {/* Header */}
      <div className="relative z-10 border-b backdrop-blur-sm bg-[#FCFDFD]/70 dark:bg-slate-950/70 border-slate-200 dark:border-slate-800 transition-colors duration-500">
        <div className="container max-w-6xl mx-auto py-16 md:py-24 px-4 md:px-6">
          <div className="relative">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6 relative z-10 text-[#19304D] dark:text-sky-50">
              Think in <span className="relative inline-block">
                Cases
                <span className="absolute bottom-2 left-0 h-4 -z-10 rounded-sm bg-[#239E82] shadow-sm shadow-[#19304D]/10 animate-underline-sequence origin-left"></span>
              </span>.
            </h1>
            <p className="text-xl max-w-2xl font-medium leading-relaxed text-[#506783] dark:text-slate-400">
              Explore real-world business and technical cases. Filter by topic, learn from experience, and <span className="text-[#239E82] dark:text-teal-400 font-bold">grow your expertise</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container max-w-6xl mx-auto py-12 px-4 md:px-6">
        <BlogList />
      </div>
    </div>
  )
}
