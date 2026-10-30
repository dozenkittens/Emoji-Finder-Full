import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { EmojiCard } from "./components/EmojiCard";
import "./App.css";

interface Emoji {
  title: string;
  emoji: string;
  keywords: string;
}

function App() {
  const [emojis, setEmojis] = useState<Emoji[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/emojis")
      .then((res) => res.json())
      .then((data) => setEmojis(data))
      .catch((err) => console.error(err));
  }, []);

  const filteredEmojis = emojis.filter((item) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.keywords.toLowerCase().includes(q)
    );
  });

  return (
    <div className="app-wrapper">
      <Header />
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      <main className="grid-container">
        {filteredEmojis.map((item, index) => (
          <EmojiCard
            key={index}
            emoji={item.emoji}
            title={item.title}
            keywords={item.keywords}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
