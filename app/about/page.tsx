import Image from "next/image"
import Link from "next/link"
import { 
  Users, 
  ChevronRight,
  BookOpen,
  MessageSquare,
  ArrowRight,
  BarChart3,
  Search,
  GitBranch,
  ArrowUpRight,
  ShieldCheck,
  ZapIcon,
  Target,
  TrendingUp,
  Lightbulb
} from "lucide-react"
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "About CasePath - Strategic Thinking through Real-World Cases",
  description: "Discover how CasePath distills wisdom from real scenarios to transform analysis into strategic decisions.",
  openGraph: {
    title: "About CasePath - Strategic Thinking through Real-World Cases",
    description: "Transform analysis into action - Professional case-based strategic learning.",
  }
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* A) Hero Section with Dynamic Background */}
      <section className="relative py-4 lg:py-6 overflow-hidden" style={{ background: '#FCFDFD' }}>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl font-black tracking-tighter sm:text-7xl lg:text-8xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200" style={{ color: '#032753' }}>
                  CasePath
                </h1>
                <p className="text-2xl font-semibold leading-tight max-w-[600px] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300" style={{ color: '#19304D' }}>
                  Strategic Thinking through Real-World Cases — Transforming Analysis into Decisive Action.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
                <Button asChild size="lg" className="h-14 px-8 rounded-full text-lg font-bold shadow-xl transition-all hover:scale-105 active:scale-95" style={{ backgroundColor: '#239E82', color: 'white' }}>
                  <Link href="#method">Methodology <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-14 px-8 rounded-full text-lg font-bold transition-all hover:scale-105 active:scale-95 shadow-md" style={{ borderColor: '#19304D', borderWidth: '2px', color: '#19304D' }}>
                  <Link href="#faq">FAQ</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video lg:aspect-square animate-in fade-in zoom-in duration-1000">
              <Image
                src="/assets/about-hero.png"
                alt="CasePath Strategy Visualization"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* B) "What is CasePath?" with Gradient Background */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white -z-10" />
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8 mb-20">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">What is CasePath?</h2>
            <div className="space-y-6 text-xl text-slate-600 leading-relaxed font-medium">
              <p>
                CasePath is a dedicated platform that curates and distills complex real-world business and technical scenarios 
                into actionable, high-impact lessons. We believe true wisdom is forged in the heat of critical decisions, not found in rigid theory.
              </p>
              <p>
                At our core, we foster <span className="text-primary font-bold">structured thinking</span>, 
                <span className="text-secondary font-bold"> effective prioritization</span>, and 
                <span className="text-primary font-bold"> confidence in decision-making</span>—even when information is imperfect.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Case Library",
                icon: <BookOpen className="w-8 h-8" />,
                color: "bg-blue-50 text-blue-600",
                points: ["Structure: Context → Problem → Options → Decision → Execution.", "Hyper-focused on real-world, industry-standard application."]
              },
              {
                title: "Strategic Lens",
                icon: <Target className="w-8 h-8" />,
                color: "bg-teal-50 text-teal-600",
                points: ["Identifying the 'Key Question' that matters most.", "Deep-dive analysis of constraints and strategic trade-offs."]
              },
              {
                title: "Life-Changing Takeaways",
                icon: <TrendingUp className="w-8 h-8" />,
                color: "bg-indigo-50 text-indigo-600",
                points: ["Concise, hard-hitting conclusions for every case.", "Tactical suggestions on how to apply logic in your daily work."]
              }
            ].map((item, idx) => (
              <Card key={idx} className="group border-none shadow-xl shadow-slate-200/50 rounded-[2.5rem] overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-2 bg-white">
                <CardHeader className="p-8 pb-4">
                  <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <ul className="space-y-4 text-slate-600 font-medium">
                    {item.points.map((p, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3">
                        <div className="mt-1.5 shrink-0">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        </div>
                        <span className="leading-snug">{p}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* C) "Our Methodology" - Methodology Section */}
      <section id="method" className="py-32 bg-slate-900 text-white relative overflow-hidden">
        {/* Modern decorative mesh background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-24 space-y-6">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-white">Content Strategy & Methodology</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
              We apply a rigorous, consulting-grade framework to dissect every situation, ensuring logic and clarity in every word.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Define Key Question", step: "1", desc: "Isolate the core problem statement before exploring potential solutions.", icon: <Search /> },
              { title: "Build Issue Tree", step: "2", desc: "Use MECE principles to break down problems into manageable, logical branches.", icon: <GitBranch /> },
              { title: "80/20 Focus", step: "3", desc: "Prioritize elements with the highest impact; ignore the noise.", icon: <ZapIcon /> },
              { title: "Constraint Analysis", step: "4", desc: "Evaluating options against real-world resources, time, and barriers.", icon: <BarChart3 /> },
              { title: "Decisive Execution", step: "5", desc: "Selecting the optimal path and crafting top-down, crystal-clear communication.", icon: <ArrowUpRight /> },
              { title: "Lessons Learned", step: "6", desc: "Distilling universal truths to transfer knowledge to future context.", icon: <TrendingUp /> },
            ].map((item, idx) => (
              <div key={idx} className="group p-10 rounded-[2.5rem] bg-white/5 border border-white/10 relative overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="absolute top-6 right-8 text-7xl font-black text-white/5 group-hover:text-white/10 transition-colors pointer-events-none">
                  0{item.step}
                </div>
                <div className="relative z-10 space-y-6 text-white">
                  <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-white shadow-lg shadow-secondary/20">
                    {item.icon}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <p className="text-slate-400 text-lg leading-relaxed group-hover:text-slate-300 transition-colors uppercase-first">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-28 max-w-5xl mx-auto">
             <div className="bg-[linear-gradient(90deg,#155D4C,#239E82,#4CCEB0,#239E82,#155D4C)] bg-[length:200%_auto] animate-gradient p-12 md:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden group">
                <div className="grid md:grid-cols-3 gap-12 relative z-10 text-center items-center text-white">
                    <div className="space-y-4">
                      <div className="text-4xl font-black italic tracking-tighter uppercase">Evidence First</div>
                      <p className="text-white/70 text-sm font-bold uppercase tracking-widest">Grounded in raw facts</p>
                    </div>
                    <div className="space-y-4 md:border-x border-white/20 px-8 py-4">
                       <div className="text-4xl font-black italic tracking-tighter uppercase">Better Decisions</div>
                       <p className="text-white/70 text-sm font-bold uppercase tracking-widest">Mastery over uncertainty</p>
                    </div>
                    <div className="space-y-4">
                      <div className="text-4xl font-black italic tracking-tighter uppercase">Clear Logic</div>
                      <p className="text-white/70 text-sm font-bold uppercase tracking-widest">Structure leads to clarity</p>
                    </div>
                </div>
                {/* Glossy overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-50 pointer-events-none group-hover:opacity-70 transition-opacity" />
             </div>
          </div>
        </div>
      </section>

      {/* D) "Quality Principles" Section with Glassmorphism */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-50">
           <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-[100px]" />
           <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-teal-100 rounded-full blur-[100px]" />
        </div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-24 space-y-6">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Quality Principles</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-xl font-medium">
              Every piece of content on CasePath adheres to rigid standards to ensure maximum intellectual value.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Clear Context & Constraints",
              "Transparent Hypotheses",
              "Crucial Driver Prioritization",
              "Data-Driven Reasoning",
              "Top-Down Communication",
              "Actionable Lessons"
            ].map((principle, idx) => (
              <div key={idx} className="flex items-center gap-6 p-8 bg-white/70 backdrop-blur-md border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                 <div className="shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center shadow-lg shadow-secondary/10">
                    <ShieldCheck className="w-6 h-6 text-white" />
                 </div>
                 <span className="text-xl font-bold text-slate-800">{principle}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E) "Who is CasePath for?" Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-50 -z-10" />
        <div className="container px-4 md:px-6">
          <div className="text-center mb-24 space-y-6">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Who is CasePath for?</h2>
            <p className="text-slate-600 max-w-3xl mx-auto text-xl font-medium leading-relaxed">
              CasePath is designed for high-performers who want to sharpen their professional intuition.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-3">
             <div className="group p-10 rounded-[3rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 space-y-8 hover:-translate-y-3 transition-all duration-500">
                <div className="w-20 h-20 rounded-[1.5rem] bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                  <Users className="w-10 h-10" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-slate-900 leading-tight">Students &<br/>New Grads</h3>
                  <p className="text-slate-600 text-lg leading-relaxed font-medium">
                    Ambitious individuals aiming for roles in Consulting, Strategy, Finance, or Data Analytics.
                  </p>
                </div>
             </div>

             <div className="group p-10 rounded-[3rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 space-y-8 hover:-translate-y-3 transition-all duration-500">
                <div className="w-20 h-20 rounded-[1.5rem] bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Lightbulb className="w-10 h-10" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-slate-900 leading-tight">Product, Ops & Marketing</h3>
                  <p className="text-slate-600 text-lg leading-relaxed font-medium">
                    Working professionals looking to elevate their decision-making effectiveness through logic.
                  </p>
                </div>
             </div>

             <div className="group p-10 rounded-[3rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 space-y-8 hover:-translate-y-3 transition-all duration-500">
                <div className="w-20 h-20 rounded-[1.5rem] bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                  <MessageSquare className="w-10 h-10" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-slate-900 leading-tight">Case Interview Candidates</h3>
                  <p className="text-slate-600 text-lg leading-relaxed font-medium">
                    Those training for high-stakes interviews who need to master and sharpen their structural logic.
                  </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* F) FAQ Section */}
      <section id="faq" className="py-32 bg-white">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">FAQ</h2>
            <p className="text-slate-600 text-xl font-medium">Your most common questions answered.</p>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border border-slate-100 rounded-3xl px-8 bg-slate-50 data-[state=open]:bg-white data-[state=open]:shadow-lg transition-all">
              <AccordionTrigger className="text-left text-xl font-bold py-6 hover:no-underline text-slate-900">How does CasePath differ from traditional blogs?</AccordionTrigger>
              <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-8 pt-2 font-medium">
                CasePath focuses on <span className="text-primary font-bold">process</span> over information. Traditional blogs tell you what happened; CasePath reveals <span className="font-bold underline">why</span> a specific decision was made in a specific context Z, teaching you the underlying business logic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border border-slate-100 rounded-3xl px-8 bg-slate-50 data-[state=open]:bg-white data-[state=open]:shadow-lg transition-all">
              <AccordionTrigger className="text-left text-xl font-bold py-6 hover:no-underline text-slate-900">Is the content strictly framework-based?</AccordionTrigger>
              <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-8 pt-2 font-medium">
                We use frameworks as mental bridges, not crutches. Our goal is to train your professional intuition so you can build your own logic for any problem you face, with or without a predefined framework.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border border-slate-100 rounded-3xl px-8 bg-slate-50 data-[state=open]:bg-white data-[state=open]:shadow-lg transition-all">
              <AccordionTrigger className="text-left text-xl font-bold py-6 hover:no-underline text-slate-900">What if I don&apos;t have a business background?</AccordionTrigger>
              <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-8 pt-2 font-medium">
                Structure is universal. Whether you are in healthcare, engineering, or the arts, the ability to prioritize and make clear decisions is your most valuable asset. CasePath is written to be accessible and impactful for all disciplines.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border border-slate-100 rounded-3xl px-8 bg-slate-50 data-[state=open]:bg-white data-[state=open]:shadow-lg transition-all">
              <AccordionTrigger className="text-left text-xl font-bold py-6 hover:no-underline text-slate-900">How specifically can I use this for case interviews?</AccordionTrigger>
              <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-8 pt-2 font-medium">
                By reading how we deconstruct problems and build Issue Trees, you will naturally inherit a consultant&apos;s brain. You&apos;ll learn how to group data, form hypotheses, and present solutions top-down.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border border-slate-100 rounded-3xl px-8 bg-slate-50 data-[state=open]:bg-white data-[state=open]:shadow-lg transition-all">
              <AccordionTrigger className="text-left text-xl font-bold py-6 hover:no-underline text-slate-900">Does CasePath provide the &quot;one right answer&quot;?</AccordionTrigger>
              <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-8 pt-2 font-medium">
                In the real world, there is rarely one right answer. We focus on a &quot;rigorous, defensible process.&quot; We show you how to reach a decision that you can confidently justify to clients or leadership.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" className="border border-slate-100 rounded-3xl px-8 bg-slate-50 data-[state=open]:bg-white data-[state=open]:shadow-lg transition-all">
              <AccordionTrigger className="text-left text-xl font-bold py-6 hover:no-underline text-slate-900">Why choose a case-based approach?</AccordionTrigger>
              <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-8 pt-2 font-medium">
                Case-based learning puts you in the driver&apos;s seat. It forces empathy with the decision-maker, making the lessons stick far longer than reading a list of abstract tips.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  )
}
