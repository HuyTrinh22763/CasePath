"use client"

import { useState, useMemo } from "react"
import { Search, SlidersHorizontal, ArrowUpDown } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { PostCard } from "@/components/blog/PostCard"
import { posts, BlogPost } from "@/lib/data/posts"

const ITEMS_PER_PAGE = 6
const ALL_CATEGORIES = "All"

export function BlogList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState(ALL_CATEGORIES)
  const [currentPage, setCurrentPage] = useState(1)
  const [sortBy, setSortBy] = useState("newest")

  // Extract unique categories from posts
  const categories = useMemo(() => {
    const cats = new Set(posts.map(p => p.category))
    return [ALL_CATEGORIES, ...Array.from(cats)]
  }, [])

  // Filter and Sort Logic
  const filteredPosts = useMemo(() => {
    const result = posts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === ALL_CATEGORIES || post.category === selectedCategory
      
      return matchesSearch && matchesCategory
    })

    // Sort
    result.sort((a, b) => {
      if (sortBy === "newest") {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      } else if (sortBy === "oldest") {
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      }
      return 0
    })

    return result
  }, [searchQuery, selectedCategory, sortBy])

  // Pagination Logic
  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const currentPosts = filteredPosts.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      {/* Controls Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between p-6 rounded-2xl shadow-sm border backdrop-blur-md transition-all hover:shadow-md bg-white/80 dark:bg-slate-900/80 border-slate-200 dark:border-slate-800">
        {/* Search */}
        <div className="relative w-full md:w-96 group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 transition-colors group-hover:text-[#239E82] text-slate-500 dark:text-slate-400" />
          <Input 
            placeholder="Search blogs..." 
            className="pl-10 transition-all duration-300 focus:ring-2 focus:ring-[#239E82]/20 focus:border-[#239E82] border-slate-200 dark:border-slate-800 text-slate-900 dark:text-sky-50 dark:bg-slate-950"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
              setCurrentPage(1) // Reset to page 1 on search
            }}
          />
        </div>

        {/* Sort */}
        <div className="flex items-center gap-2">
           <span className="text-sm hidden sm:inline font-medium text-slate-500 dark:text-slate-400">Sort by:</span>
           <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px] transition-all duration-300 focus:ring-2 focus:ring-[#239E82]/20 focus:border-[#239E82] hover:border-[#89A5B8] border-slate-200 dark:border-slate-800 text-slate-900 dark:text-sky-50 dark:bg-slate-950">
              <SelectValue placeholder="Sort order" />
            </SelectTrigger>
            <SelectContent position="popper" sideOffset={4} className="animate-in fade-in zoom-in-95 duration-200 bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800">
              <SelectItem value="newest" className="cursor-pointer focus:bg-slate-100 dark:focus:bg-slate-800 focus:text-slate-900 dark:focus:text-sky-50">Newest First</SelectItem>
              <SelectItem value="oldest" className="cursor-pointer focus:bg-slate-100 dark:focus:bg-slate-800 focus:text-slate-900 dark:focus:text-sky-50">Oldest First</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 pb-4">
        {categories.map(category => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => {
              setSelectedCategory(category)
              setCurrentPage(1)
            }}
            className={`rounded-full transition-all duration-300 ease-out hover:scale-105 active:scale-95 ${
              selectedCategory === category 
                ? "bg-[#19304D] text-white shadow-lg shadow-[#19304D]/20 dark:bg-sky-500 dark:text-white dark:shadow-sky-500/20"
                : "border-slate-300 text-slate-500 hover:text-slate-700 dark:border-slate-700 dark:text-slate-400 dark:hover:text-slate-300 bg-transparent"
            }`}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Results Count */}
      <div className="text-sm font-medium text-slate-500 dark:text-slate-400">
        Showing {filteredPosts.length} results
      </div>

      {/* Grid */}
      {currentPosts.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentPosts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 rounded-lg border border-dashed bg-slate-50 dark:bg-slate-900/50 border-slate-300 dark:border-slate-700">
          <h3 className="text-lg font-bold text-slate-900 dark:text-sky-50">No cases found</h3>
          <p className="font-medium text-slate-500 dark:text-slate-400">Try adjusting your search or filters.</p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                href="#" 
                onClick={(e) => { e.preventDefault(); handlePageChange(currentPage - 1) }}
                className={currentPage === 1 ? "pointer-events-none opacity-50" : "text-slate-900 dark:text-sky-50 hover:bg-slate-100 dark:hover:bg-slate-800"}
              />
            </PaginationItem>
            
            {Array.from({ length: totalPages }).map((_, i) => (
              <PaginationItem key={i}>
                <PaginationLink 
                  href="#"
                  isActive={currentPage === i + 1}
                  onClick={(e) => { e.preventDefault(); handlePageChange(i + 1) }}
                  className={currentPage === i + 1 
                    ? "bg-[#19304D] text-white hover:bg-[#19304D]/90 dark:bg-sky-500 dark:text-white dark:hover:bg-sky-600 border-transparent" 
                    : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-sky-50 hover:bg-slate-100 dark:hover:bg-slate-800"}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext 
                href="#"
                onClick={(e) => { e.preventDefault(); handlePageChange(currentPage + 1) }}
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : "text-slate-900 dark:text-sky-50 hover:bg-slate-100 dark:hover:bg-slate-800"}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  )
}
