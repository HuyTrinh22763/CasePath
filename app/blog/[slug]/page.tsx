import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, Clock, Calendar, Tag, User } from "lucide-react"
import { posts } from "@/lib/data/posts"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { RelatedPosts } from "@/components/blog/RelatedPosts"
import { Metadata } from "next"

// Force static generation for demo purposes, or use dynamic
export const dynamic = "force-static"

// Generate static params for all known slugs
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) return { title: "Post Not Found" }

  return {
    title: `${post.title} | CasePath`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: [post.coverImage],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Header */}
      <div className="relative w-full h-[400px] md:h-[500px] bg-muted">
         <Image 
            src={post.coverImage} 
            alt={post.title}
            fill
            className="object-cover brightness-50"
            priority
         />
         <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
         
         <div className="container relative h-full flex flex-col justify-end pb-12 px-4 md:px-6">
            <div className="max-w-3xl space-y-4">
              <div className="flex items-center gap-2 text-white/80">
                 <Link href="/blog" className="hover:text-secondary transition-colors flex items-center gap-1 text-sm font-medium">
                    <ArrowLeft className="h-4 w-4" /> Back to Knowledge Base
                 </Link>
                 <span>•</span>
                 <span className="text-secondary font-semibold">{post.category}</span>
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-white/90 pt-4">
                 <div className="flex items-center gap-1.5 text-sm">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                 </div>
                 <div className="flex items-center gap-1.5 text-sm">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                 </div>
              </div>
            </div>
         </div>
      </div>

      {/* Content */}
      <div className="container px-4 md:px-6 py-12 max-w-4xl mx-auto">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="space-y-6">
             <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>

        {/* Tags */}
        <div className="mt-8 flex flex-wrap gap-2">
           {post.tags.map(tag => (
             <Badge key={tag} variant="secondary" className="px-3 py-1 text-sm bg-muted hover:bg-muted/80">
               <Tag className="h-3 w-3 mr-1" /> {tag}
             </Badge>
           ))}
        </div>

        {/* Share/Action */}
        <div className="mt-12 flex items-center justify-between p-6 bg-secondary/5 rounded-xl">
           <div>
             <h4 className="font-bold text-lg">Found this case useful?</h4>
             <p className="text-muted-foreground text-sm">Join the discussion in our community.</p>
           </div>
           <Button className="bg-primary hover:bg-primary/90">Discuss this Case</Button>
        </div>

        {/* Related Posts */}
        <RelatedPosts currentPostId={post.id} category={post.category} />
      </div>
    </div>
  )
}
