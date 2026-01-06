import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PostCard } from "@/components/blog/PostCard"
import { posts } from "@/lib/data/posts"

export function FeaturedPosts() {
  // Taking first 3 posts for featured section
  const featuredPosts = posts.slice(0, 3)

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Featured Cases</h2>
            <p className="text-muted-foreground md:text-lg">
              Explore the latest insights shared by our community.
            </p>
          </div>
          <Link 
            href="/blog" 
            className="group flex items-center gap-1 text-sm font-medium text-primary hover:underline underline-offset-4"
          >
            View all knowledge
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
