interface KaomojiInfoProps {
  className?: string
}

export function KaomojiInfo({ className = "" }: KaomojiInfoProps) {
  return (
    <div className={`bg-cream/70 border border-mauve/30 rounded-2xl p-4 ${className}`}>
      <h2 className="text-lg font-medium text-plum mb-2">What are Kaomoji?</h2>
      <p className="text-mauve mb-2">
        Kaomoji (顏文字) are Japanese emoticons made up of Japanese characters and punctuation marks. Unlike Western
        emoticons that are read sideways like :), kaomoji are read as-is and focus on the eyes rather than the mouth to
        express emotion.
      </p>
      <p className="text-mauve">
        Japanese emoticons are extremely diverse and can express not only emotions but also complex actions, objects,
        and even whole stories. Simply click on any kaomoji to copy it to your clipboard!
      </p>
      <p className="text-mauve mt-2">
        Our <span className="text-coral font-medium">Chinese Poetry</span> category pairs kaomoji with famous lines from
        Tang dynasty poems (唐詩), showcasing the beauty of classical Chinese literature alongside Japanese emoticons.
      </p>
    </div>
  )
}
