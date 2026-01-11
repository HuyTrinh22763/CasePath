"use client"

import { useState } from "react"
import { approvePost, deletePost } from "../actions"
import { Button } from "@/components/ui/button"
import { Loader2, Check, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Post {
  id: string
  title: string
  author_id: string
  created_at: string
  status: string
  category: string
}

export function PostItem({ post }: { post: Post }) {
  const [loading, setLoading] = useState(false)

  const handleApprove = async () => {
    setLoading(true)
    await approvePost(post.id)
    setLoading(false)
  }

  const handleReject = async () => {
    if (!confirm("Are you sure you want to delete this post?")) return
    setLoading(true)
    await deletePost(post.id)
    setLoading(false)
  }

  return (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800">
      <div className="space-y-1">
        <h3 className="font-semibold text-lg text-slate-900 dark:text-sky-50">{post.title}</h3>
        <div className="flex items-center gap-2 text-sm text-slate-500">
           <Badge variant="outline">{post.category}</Badge>
           <span>{new Date(post.created_at).toLocaleDateString()}</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button 
          onClick={handleApprove} 
          disabled={loading} 
          size="sm" 
          className="bg-green-600 hover:bg-green-700 text-white"
        >
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Check className="h-4 w-4 mr-1" />}
          Approve
        </Button>
        <Button 
          onClick={handleReject} 
          disabled={loading} 
          size="sm" 
          variant="destructive"
        >
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <X className="h-4 w-4 mr-1" />}
          Reject
        </Button>
      </div>
    </div>
  )
}
