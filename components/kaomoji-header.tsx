"use client"

interface KaomojiHeaderProps {
  onInfoClick?: () => void
}

export function KaomojiHeader({ onInfoClick }: KaomojiHeaderProps) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold tracking-tight text-plum">
          <span className="text-coral">顏文字</span> Kaomoji
        </h1>
        <button
          onClick={onInfoClick}
          className="ml-3 text-mauve hover:text-coral text-sm border border-mauve/40 hover:border-coral/50 rounded-full px-3 py-1"
        >
          What is Kaomoji?
        </button>
      </div>
      <p className="text-mauve">A dreamy collection of Japanese emoticons with sweet captions</p>
    </div>
  )
}
