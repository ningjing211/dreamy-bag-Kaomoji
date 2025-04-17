"use client"

import { useState, useEffect } from "react"
import { KaomojiGrid } from "@/components/kaomoji-grid"
import { KaomojiSearch } from "@/components/kaomoji-search"
import { KaomojiCategories } from "@/components/kaomoji-categories"
import { KaomojiHeader } from "@/components/kaomoji-header"
import { KaomojiInfo } from "@/components/kaomoji-info"
import { ThemeToggle } from "@/components/theme-toggle"
import { kaomojiData } from "@/data/kaomoji-data"
import { useLocalStorage } from "@/hooks/use-local-storage"

export function KaomojiApp() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [recentlyUsed, setRecentlyUsed] = useLocalStorage<string[]>("kaomoji-recent", [])
  const [filteredKaomoji, setFilteredKaomoji] = useState(kaomojiData)
  const [showInfo, setShowInfo] = useState(false)

  // Filter kaomoji based on search query and active category
  useEffect(() => {
    let result = kaomojiData

    if (activeCategory === "recent") {
      // Create a new array with recently used items first, then the rest
      const recentSet = new Set(recentlyUsed)
      const recentItems = result.filter((item) => recentSet.has(item.text))
      const otherItems = result.filter((item) => !recentSet.has(item.text))
      result = [...recentItems, ...otherItems]
    } else if (activeCategory !== "all") {
      result = result.filter((item) => item.category === activeCategory)
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (item) =>
          item.text.toLowerCase().includes(query) ||
          item.tags.some((tag) => tag.toLowerCase().includes(query)) ||
          item.caption.toLowerCase().includes(query),
      )
    }

    setFilteredKaomoji(result)
  }, [searchQuery, activeCategory, recentlyUsed])

  const handleCopy = (text: string) => {
    // Update recently used
    const newRecent = [text, ...recentlyUsed.filter((item) => item !== text)].slice(0, 20)
    setRecentlyUsed(newRecent)
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex justify-between items-center mb-6">
        <KaomojiHeader onInfoClick={() => setShowInfo(!showInfo)} />
        <ThemeToggle />
      </div>

      {showInfo && <KaomojiInfo className="mb-6" />}

      <div className="mb-6">
        <KaomojiSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>

      <div className="mb-8">
        <KaomojiCategories
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          recentCount={recentlyUsed.length}
        />
      </div>

      <KaomojiGrid kaomoji={filteredKaomoji} onCopy={handleCopy} />
    </div>
  )
}
