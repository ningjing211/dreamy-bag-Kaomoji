"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function EmoticonCollection() {
  const { toast } = useToast()
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const emoticons = [
    "(/ ' з ' )/",
    "(O-_-O)",
    "(~___~)♡",
    "( ω ˘◡)",
    "(σ˘˘σ)",
    "(˘ ω ˘) ♡",
    "ヽ(˘⌣˘ )ノ ♡",
    "(≧ヮ≦) ♡",
    "♡ (∀`>ω(˘˘˘)",
    "σ(≧ε≦σ) ♡",
    "(∀˘)(μ_μ) ❤",
    "Σ>―(T^T)/ )☆→",
    "(❤_❤)!=_=|(☆☆)",

    "('◡_μ)",
    "( ˘ _ ˘ @ )",
    "( ˘•ω•˘) ♡",
    "♡(◡ω )",
    "(♡•∀•♡)",
    "( ˘ ε ˘)♡",
    "(˘⌣˘)•:*♡",
    "(−∀−)♡",
    "(˘˘˘)♡(˘˘˘)",
    "♡ (− 3 −)",
    "❤ (σ`3(˘˘˘c)",
    "(˘,•ω•,)♡",
    "( ˘ω ˘ ) ♡",

    "(˘^^^)♡",
    "♥(♡◡♡)♥",
    "(˘•ω•˘) ♡",
    "(♡∀♡)",
    "♡(•-ω -)",
    "(˘• ω •˘) ♡",
    "(♡˘⌣˘♡)",
    "(˘˘˘)♡",
    "(^^)(^ ^)♥",
    "♡ ( ˘3 ˘ )",
    "(˘◡˘)♡",
    "(˘ω˘)♡",
    "(˘˘ ♡)",

    "☆~♥(˘•^•˘)chu",
    "( ˘ ∀ ˘)/ ~ ♡",
    "(• ∥e∥ • •)",
    "(∀ ♥ ˘)•o♡♡",
    "♡ ~(˘∀^♥)",
    "( ˘ ∀ ˘ )•o ♡",
    "♡ ♥(˘∀˘) / ♡",
    "(っ`3(˘˘˘) ♡",
    "♥(◡ε◡)♥",
    "(❤ω❤)",
    "(˘◡˘)",
    "♡(>ω<)",
  ]

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index)
      toast({
        title: "Copied!",
        description: `${text} copied to clipboard`,
        duration: 2000,
      })
      setTimeout(() => setCopiedIndex(null), 2000)
    })
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Kaomoji Collection</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {emoticons.map((emoticon, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-auto py-3 px-4 flex justify-between items-center gap-2 hover:bg-muted/50 transition-colors"
              onClick={() => copyToClipboard(emoticon, index)}
            >
              <span className="text-lg font-mono">{emoticon}</span>
              {copiedIndex === index ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4 text-muted-foreground" />
              )}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
