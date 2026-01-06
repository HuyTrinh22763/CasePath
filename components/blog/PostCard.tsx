import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Calendar, Clock } from "lucide-react"
import { BlogPost } from "@/lib/data/posts"

interface PostCardProps {
  post: BlogPost
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all hover:shadow-lg border-border/50 bg-card">
      <div className="relative h-48 w-full overflow-hidden bg-muted">
        {/* Placeholder for image if no real image */}
         <Image 
            src={post.coverImage} 
            alt={post.title}
            fill
            className="object-cover transition-transform hover:scale-105"
         />
        {!post.coverImage && (
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-secondary/10">
             <span className="text-4xl font-bold opacity-20">{post.category.charAt(0)}</span>
          </div>
        )}
      </div>
      <CardHeader className="p-6 pb-2 space-y-2">
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="text-xs font-normal text-secondary-foreground bg-secondary/10 hover:bg-secondary/20">
            {post.category}
          </Badge>
          <span className="text-xs text-muted-foreground flex items-center gap-1">
             <Clock className="h-3 w-3" /> {post.readTime}
          </span>
        </div>
        <Link href={`/blog/${post.slug}`} className="block group">
          <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>
      </CardHeader>
      <CardContent className="p-6 pt-2 flex-1">
        <p className="text-muted-foreground text-sm line-clamp-3">
          {post.excerpt}
        </p>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex items-center justify-between border-t border-border/50 mt-auto bg-muted/20">
        <div className="text-xs text-muted-foreground pt-4 flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {post.date}
        </div>
      </CardFooter>
    </Card>
  )
}
