import Link from "next/link"
import { PostCard } from "@/components/blog/PostCard"
import { posts, BlogPost } from "@/lib/data/posts"

interface RelatedPostsProps {
  currentPostId: string
  category: string
}

export function RelatedPosts({ currentPostId, category }: RelatedPostsProps) {
  // Find posts to recommend
  // 1. Filter out current post
  // 2. Sort by: Same category first
  // 3. Take top 3
  const related = posts
    .filter(post => post.id !== currentPostId)
    .sort((a, b) => {
      const aIsSameCat = a.category === category ? 1 : 0
      const bIsSameCat = b.category === category ? 1 : 0
      return bIsSameCat - aIsSameCat // Descending: 1 (Same) -> 0 (Different)
    })
    .slice(0, 3)

  if (related.length === 0) return null

  return (
    <div className="space-y-6 mt-12 pt-12 border-t">
      <h3 className="text-2xl font-bold tracking-tight">Related Knowledge</h3>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {related.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
