"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Check } from "lucide-react"
import type { KaomojiType } from "@/types/kaomoji"

interface KaomojiGridProps {
  kaomoji: KaomojiType[]
  onCopy: (text: string) => void
}

export function KaomojiGrid({ kaomoji, onCopy }: KaomojiGridProps) {
  const { toast } = useToast()
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index)
      onCopy(text)
      toast({
        title: "Copied!",
        description: `${text} copied to clipboard`,
        duration: 1500,
      })
      setTimeout(() => setCopiedIndex(null), 1500)
    })
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <AnimatePresence>
        {kaomoji.map((item, index) => (
          <motion.div
            key={`${item.text}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2, delay: (index % 10) * 0.03 }}
            layout
          >
            <Card
              className="group relative overflow-hidden transition-all duration-300 border border-mauve/20 shadow-md hover:shadow-lg bg-cream rounded-2xl"
              onClick={() => copyToClipboard(item.text, index)}
            >
              <div className="p-6 flex flex-col items-center justify-center min-h-[180px] cursor-pointer">
                <div className="text-2xl font-mono mb-4 text-center text-plum">{item.text}</div>
                <div
                  className={`text-sm text-center mb-2 ${
                    item.category === "chinese" ? "text-coral font-medium" : "text-mauve"
                  }`}
                >
                  {item.caption}
                </div>
                <div className="text-xs text-center opacity-0 group-hover:opacity-100 transition-opacity text-coral">
                  Click to copy
                </div>

                <div
                  className={`
                  absolute inset-0 flex items-center justify-center bg-rose/10 backdrop-blur-sm
                  transition-opacity duration-300
                  ${copiedIndex === index ? "opacity-100" : "opacity-0 pointer-events-none"}
                `}
                >
                  <div className="bg-cream rounded-full p-3 shadow-lg">
                    <Check className="h-6 w-6 text-coral" />
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </AnimatePresence>

      {kaomoji.length === 0 && (
        <div className="col-span-full text-center py-12 text-mauve">
          No kaomoji found. Try a different search or category.
        </div>
      )}
    </div>
  )
}
