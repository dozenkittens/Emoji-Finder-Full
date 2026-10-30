interface EmojiCardProps {
  emoji: string;
  title: string;
  keywords: string;
}

export function EmojiCard({ emoji, title, keywords }: EmojiCardProps) {
  return (
    <div className="emoji-card">
      <div className="emoji-icon">{emoji}</div>
      <h2 className="emoji-title">{title}</h2>
      <p className="emoji-keywords">{keywords}</p>
    </div>
  );
}
