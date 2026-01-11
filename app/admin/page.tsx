import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import { PostItem } from "./components/PostItem"

export default async function AdminDashboard() {
  const supabase = await createClient()

  // 1. Check Auth
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    redirect("/")
  }

  // 2. Check Admin Role
  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single()
  
  if (!profile || profile.role !== "admin") {
     return (
       <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
         <div className="text-center space-y-4">
           <h1 className="text-4xl font-bold text-red-600">Access Denied</h1>
           <p className="text-slate-600 dark:text-slate-400">You do not have permission to view this page.</p>
           <a href="/" className="text-blue-500 hover:underline">Return Home</a>
         </div>
       </div>
     )
  }

  // 3. Fetch Pending Posts
  const { data: posts } = await supabase
    .from("posts")
    .select("*")
    .eq("status", "pending")
    .order("created_at", { ascending: false })

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-sky-50">Admin Dashboard</h1>
          <a href="/" className="text-slate-500 hover:text-slate-900 dark:hover:text-sky-50">
            Exit
          </a>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-700 dark:text-slate-300">
            Pending Posts ({posts?.length || 0})
          </h2>
          
          <div className="space-y-4">
            {posts && posts.length > 0 ? (
              posts.map((post) => (
                <PostItem key={post.id} post={post} />
              ))
            ) : (
              <div className="p-8 text-center border-2 border-dashed rounded-lg border-slate-300 dark:border-slate-800 text-slate-500">
                No pending posts to review.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
