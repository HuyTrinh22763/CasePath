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
    <Card className="flex flex-col h-full overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1" style={{ backgroundColor: '#FCFDFD', borderColor: 'rgba(137, 165, 184, 0.3)' }}>
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
          <Badge variant="secondary" className="text-xs font-bold" style={{ backgroundColor: 'rgba(35, 158, 130, 0.1)', color: '#239E82' }}>
            {post.category}
          </Badge>
          <span className="text-xs flex items-center gap-1" style={{ color: '#506783' }}>
             <Clock className="h-3 w-3" /> {post.readTime}
          </span>
        </div>
        <Link href={`/blog/${post.slug}`} className="block group">
          <h3 className="text-xl font-bold leading-tight transition-colors line-clamp-2 group-hover:underline decoration-2 underline-offset-2" style={{ color: '#19304D', textDecorationColor: '#239E82' }}>
            {post.title}
          </h3>
        </Link>
      </CardHeader>
      <CardContent className="p-6 pt-2 flex-1">
        <p className="text-sm line-clamp-3 font-medium" style={{ color: '#506783' }}>
          {post.excerpt}
        </p>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex items-center justify-between border-t mt-auto" style={{ backgroundColor: 'rgba(224, 232, 236, 0.3)', borderColor: 'rgba(137, 165, 184, 0.2)' }}>
        <div className="text-xs pt-4 flex items-center gap-1" style={{ color: '#506783' }}>
            <Calendar className="h-3 w-3" />
            {post.date}
        </div>
      </CardFooter>
    </Card>
  )
}
