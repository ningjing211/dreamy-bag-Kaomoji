"use client"

import { Button } from "@/components/ui/button"
import {
  Clock,
  Cake,
  IceCream,
  Coffee,
  Cookie,
  Heart,
  SmilePlus,
  Frown,
  Star,
  Angry,
  Music,
  Zap,
  Sparkles,
  Flower,
  Cat,
  Dog,
} from "lucide-react"

interface KaomojiCategoriesProps {
  activeCategory: string
  setActiveCategory: (category: string) => void
  recentCount: number
}

export function KaomojiCategories({ activeCategory, setActiveCategory, recentCount }: KaomojiCategoriesProps) {
  const categories = [
    { id: "all", name: "All", icon: <Star className="h-4 w-4 mr-2" /> },
    { id: "recent", name: "Recent", icon: <Clock className="h-4 w-4 mr-2" />, count: recentCount },

    // Emotions
    { id: "happy", name: "Happy", icon: <SmilePlus className="h-4 w-4 mr-2" /> },
    { id: "love", name: "Love", icon: <Heart className="h-4 w-4 mr-2" /> },
    { id: "sad", name: "Sad", icon: <Frown className="h-4 w-4 mr-2" /> },
    { id: "angry", name: "Angry", icon: <Angry className="h-4 w-4 mr-2" /> },
    { id: "surprised", name: "Surprised", icon: <Zap className="h-4 w-4 mr-2" /> },
    { id: "shy", name: "Shy", icon: <Sparkles className="h-4 w-4 mr-2" /> },

    // Food
    { id: "cake", name: "Cake", icon: <Cake className="h-4 w-4 mr-2" /> },
    { id: "icecream", name: "Ice Cream", icon: <IceCream className="h-4 w-4 mr-2" /> },
    { id: "coffee", name: "Coffee", icon: <Coffee className="h-4 w-4 mr-2" /> },
    { id: "cookie", name: "Cookies", icon: <Cookie className="h-4 w-4 mr-2" /> },

    // Other
    { id: "animals", name: "Animals", icon: <Cat className="h-4 w-4 mr-2" /> },
    { id: "music", name: "Music", icon: <Music className="h-4 w-4 mr-2" /> },
    { id: "flowers", name: "Flowers", icon: <Flower className="h-4 w-4 mr-2" /> },
    { id: "hugs", name: "Hugs", icon: <Dog className="h-4 w-4 mr-2" /> },

    // Chinese category
    { id: "chinese", name: "Chinese Poetry", icon: <span className="mr-2 text-sm">詩</span> },
  ]

  return (
    <div className="mb-4">
      <h2 className="text-plum mb-2 font-medium">Categories</h2>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            className={`rounded-full ${
              activeCategory === category.id
                ? "bg-coral hover:bg-coral/90 text-cream"
                : "border-mauve/40 text-plum hover:bg-rose/10 hover:text-coral hover:border-coral/50"
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.icon}
            {category.name}
            {category.count !== undefined && category.count > 0 && (
              <span className="ml-2 bg-cream text-coral rounded-full px-2 py-0.5 text-xs">{category.count}</span>
            )}
          </Button>
        ))}
      </div>
    </div>
  )
}
