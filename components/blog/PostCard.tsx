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
    <Card className="group flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 backdrop-blur-sm bg-white/70 dark:bg-slate-900/80 border-blue-100/40 dark:border-slate-800" style={{ backgroundColor: undefined, borderColor: undefined }}>
      <div className="relative h-48 w-full overflow-hidden bg-muted">
         <Image 
            src={post.coverImage} 
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
         />
        {!post.coverImage && (
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-secondary/10">
             <span className="text-4xl font-bold opacity-20">{post.category.charAt(0)}</span>
          </div>
        )}
      </div>
      <CardHeader className="p-6 pb-2 space-y-2">
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="text-xs font-bold transition-transform group-hover:scale-105 bg-[#239E82]/10 dark:bg-teal-500/10 text-[#239E82] dark:text-teal-400" style={{ backgroundColor: undefined, color: undefined }}>
            {post.category}
          </Badge>
          <span className="text-xs flex items-center gap-1 font-medium text-[#506783] dark:text-slate-400">
             <Clock className="h-3 w-3" /> {post.readTime}
          </span>
        </div>
        <Link href={`/blog/${post.slug}`} className="block">
          <h3 className="text-xl font-bold leading-tight transition-colors duration-300 group-hover:text-[#239E82] dark:group-hover:text-teal-400 line-clamp-2 text-[#19304D] dark:text-sky-50">
            {post.title}
          </h3>
        </Link>
      </CardHeader>
      <CardContent className="p-6 pt-2 flex-1">
        <p className="text-sm line-clamp-3 font-medium transition-opacity group-hover:opacity-80 text-[#506783] dark:text-slate-400">
          {post.excerpt}
        </p>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex items-center justify-between border-t mt-auto transition-colors group-hover:border-[#239E82]/30 dark:group-hover:border-teal-500/30 border-[#89A5B8]/20 dark:border-slate-800" style={{ borderColor: undefined }}>
        <div className="text-xs pt-4 flex items-center gap-1 font-medium text-[#506783] dark:text-slate-400">
            <Calendar className="h-3 w-3 group-hover:text-[#239E82] dark:group-hover:text-teal-400 transition-colors" />
            {post.date}
        </div>
      </CardFooter>
    </Card>
  )
}
