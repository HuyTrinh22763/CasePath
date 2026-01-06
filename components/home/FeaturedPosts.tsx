import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PostCard } from "@/components/blog/PostCard"
import { posts } from "@/lib/data/posts"

export function FeaturedPosts() {
  // Taking first 3 posts for featured section
  const featuredPosts = posts.slice(0, 3)

  return (
    <section className="w-full py-20 md:py-32 bg-white relative">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl text-primary">Featured Cases</h2>
            <div className="h-1.5 w-20 bg-secondary/30 rounded-full" />
            <p className="text-xl text-muted-foreground font-medium max-w-xl">
              Explore the latest strategic insights shared by our community practitioners.
            </p>
          </div>
          <Link 
            href="/blog" 
            className="group flex items-center gap-2 text-lg font-bold text-secondary hover:text-primary transition-all underline-offset-8 hover:underline"
          >
            View all knowledge
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
          </Link>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post, index) => (
            <div 
              key={post.id} 
              className="animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${(index + 2) * 150}ms`, animationFillMode: 'both' }}
            >
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
