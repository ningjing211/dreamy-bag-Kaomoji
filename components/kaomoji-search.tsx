"use client"

import { Input } from "@/components/ui/input"
import { Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface KaomojiSearchProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
}

export function KaomojiSearch({ searchQuery, setSearchQuery }: KaomojiSearchProps) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-mauve h-4 w-4" />
      <Input
        type="text"
        placeholder="Search by dessert type or emotion..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pl-10 pr-10 h-12 text-lg rounded-full border-mauve/40 focus-visible:ring-coral/20 focus-visible:border-coral/50 text-plum bg-cream"
      />
      {searchQuery && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-mauve hover:text-coral"
          onClick={() => setSearchQuery("")}
        >
          <X className="h-4 w-4" />
        </Button>
      )}
    </div>
  )
}
