import { BlogList } from "@/components/blog/BlogList"

export const metadata = {
  title: "Blogs | CasePath",
  description: "Explore real-world business and technical cases shared by the community.",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background pb-12">
      {/* Header */}
      {/* Header */}
      <div className="bg-muted/30 border-b">
        <div className="container max-w-6xl mx-auto py-12 md:py-16 px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-primary">Blogs</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A repository of practical wisdom. Learn from the experiences of others, filter by topic, and grow your expertise.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container max-w-6xl mx-auto py-12 px-4 md:px-6">
        <BlogList />
      </div>
    </div>
  )
}
