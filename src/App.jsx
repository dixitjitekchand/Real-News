import React, { useState } from 'react';

const initialArticles = [
  {
    id: 1,
    title: "चुनाव अपडेट: राजनेताओं की रैलियों में उमड़ी भारी भीड़, वादों की बौछार",
    topic: "Chunav",
    date: "2026-06-03",
    thumbnail: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800",
    body: "चुनाव को लेकर सभी political पार्टियों ने अपनी ताकत झोंक दी है। रैलियों में भारी जनसैलाब देखने को मिल रहा है।"
  },
  {
    id: 2,
    title: "खेल जगत: भारत ने रोमांचक मुकाबले में दर्ज की शानदार जीत",
    topic: "Khel",
    date: "2026-06-02",
    thumbnail: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800",
    body: "आज खेले गए मुकाबले में भारतीय टीम ने बेहतरीन प्रदर्शन करते हुए अंतिम ओवर में विरोधी टीम को शिकस्त दी।"
  }
];

const topics = [
  { id: "Latest", name: "ताजा खबरें" },
  { id: "Chunav", name: "चुनाव" },
  { id: "Rajneeti", name: "राजनीति" },
  { id: "Khel", name: "खेल" },
  { id: "Mausam", name: "मौसम" },
  { id: "Desh", name: "देश" },
  { id: "Manoranjan", name: "मनोरंजन" },
  { id: "Business", name: "बिजनेस" },
  { id: "Technology", name: "टेक्नोलॉजी" },
  { id: "Sehat", name: "सेहत" },
  { id: "Antarrashtriya", name: "अंतर्राष्ट्रीय" }
];

export default function App() {
  const [selectedTopic, setSelectedTopic] = useState("Latest");
  const [articles] = useState(initialArticles);

  const filteredArticles = selectedTopic === "Latest" 
    ? articles 
    : articles.filter(art => art.topic === selectedTopic);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-red-600 text-white text-sm py-2 px-4 overflow-hidden whitespace-nowrap">
        <span className="font-bold mr-4 bg-black px-2 py-0.5 rounded text-xs animate-pulse">BREAKING NEWS</span>
        <span>Real News पर आपका स्वागत है | ताज़ा तरीन खबरों का एकमात्र ठिकाना।</span>
      </div>

      <header className="bg-white border-b border-gray-200 py-6 px-4 text-center shadow-sm">
        <h1 className="text-4xl md:text-5xl font-black text-red-600 tracking-wider uppercase">
          REAL <span className="text-black">NEWS</span>
        </h1>
        <p className="text-gray-500 text-xs mt-1 font-medium tracking-widest">सच्ची खबर, सीधी बात</p>
      </header>

      <nav className="bg-black text-white sticky top-0 z-50 shadow-md overflow-x-auto whitespace-nowrap">
        <div className="max-w-6xl mx-auto px-4 flex space-x-1">
          {topics.map((t) => (
            <button
              key={t.id}
              onClick={() => setSelectedTopic(t.id)}
              className={`px-4 py-3 text-sm font-bold ${selectedTopic === t.id ? 'bg-red-600 text-white' : 'hover:bg-gray-800 text-gray-300'}`}
            >
              {t.name}
            </button>
          ))}
        </div>
      </nav>

      <main className="flex-1 max-w-6xl w-full mx-auto p-4 md:p-6">
        <div className="border-b-4 border-red-600 mb-6 pb-1 inline-block">
          <h2 className="text-xl font-black text-gray-900 bg-gray-200 px-3 py-1 rounded">
            {topics.find(t => t.id === selectedTopic)?.name}
          </h2>
        </div>

        {filteredArticles.length === 0 ? (
          <div className="text-center py-12 text-gray-500">इस श्रेणी में अभी कोई खबर उपलब्ध नहीं है।</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <article key={article.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm flex flex-col">
                <img src={article.thumbnail} alt={article.title} className="w-full h-48 object-cover" />
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 leading-snug mb-2">{article.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">{article.body}</p>
                  </div>
                  <div className="text-xs text-gray-400">प्रकाशित: {article.date}</div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      <footer className="bg-gray-900 text-gray-400 text-center py-6 border-t border-gray-800 text-xs">
        <p>© 2026 Real News. सर्वाधिकार सुरक्षित।</p>
      </footer>
    </div>
  );
}