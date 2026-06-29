import { useState, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, User, Calendar, ArrowLeft, Heart, Share2 } from 'lucide-react';
import { ARTICLES_DATA } from '../data';
import { TacticalArticle } from '../types';
import { formatDate } from '../utils';

export default function MatchAnalysisTab() {
  const [selectedArticle, setSelectedArticle] = useState<TacticalArticle | null>(null);
  const [likes, setLikes] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string, e: MouseEvent) => {
    e.stopPropagation();
    setLikes(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div id="analysis-container" className="h-full overflow-y-auto px-4 py-4 space-y-4 pb-24">
      <AnimatePresence mode="wait">
        {!selectedArticle ? (
          // List View
          <motion.div
            key="list"
            id="analysis-list"
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div id="analysis-header" className="mb-2">
              <h2 className="text-xl font-bold text-[#C9A84C] tracking-tight">Match Analysis</h2>
              <p className="text-xs text-gray-400">Tactical debriefs, positional maps, and professional scout reports</p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {ARTICLES_DATA.map((article, idx) => (
                <motion.div
                  key={article.id}
                  id={`article-card-${article.id}`}
                  className="bg-[#1A1A2E] rounded-xl overflow-hidden border border-gray-800/60 shadow-md hover:border-[#C9A84C]/30 transition-colors flex flex-col"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.08 }}
                >
                  {/* Article Hero Image Placeholder */}
                  <div className="relative h-44 bg-black overflow-hidden">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover opacity-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E] via-transparent to-transparent" />
                    
                    {/* Category Tag */}
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 bg-[#8B0000] text-[#C9A84C] text-[9px] font-black uppercase tracking-wider rounded-md border border-[#C9A84C]/20 shadow">
                      {article.category}
                    </span>
                  </div>

                  {/* Details Area */}
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-2">
                      <h3 className="text-sm font-extrabold text-white leading-snug line-clamp-2 hover:text-[#C9A84C] transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-xs text-gray-300 line-clamp-3 font-normal leading-relaxed">
                        {article.summary}
                      </p>
                    </div>

                    {/* Metadata Footer */}
                    <div className="pt-3 border-t border-gray-800/60 flex items-center justify-between text-[10px] text-gray-400">
                      <div className="flex items-center gap-1.5 font-medium">
                        <User size={11} className="text-[#C9A84C]" />
                        <span className="truncate max-w-[100px]">{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={11} />
                        <span>{formatDate(article.date)}</span>
                      </div>
                    </div>

                    {/* Expand Trigger */}
                    <div className="pt-1 flex items-center gap-2">
                      <button
                        id={`read-more-${article.id}`}
                        onClick={() => setSelectedArticle(article)}
                        className="flex-1 py-2 px-3 bg-gradient-to-r from-[#8B0000] to-[#600000] hover:from-[#a00000] hover:to-[#700000] text-white font-bold text-xs rounded-lg transition-colors border border-[#C9A84C]/10 text-center shadow-md shadow-black/25 flex items-center justify-center gap-1"
                      >
                        <BookOpen size={12} className="text-[#C9A84C]" />
                        Read Tactical Analysis
                      </button>

                      <button
                        id={`like-btn-${article.id}`}
                        onClick={(e) => toggleLike(article.id, e)}
                        className={`p-2 rounded-lg border transition-colors ${
                          likes[article.id]
                            ? 'bg-red-500/10 border-red-500 text-red-500'
                            : 'bg-black/30 border-gray-800 text-gray-400 hover:text-white'
                        }`}
                      >
                        <Heart size={12} className={likes[article.id] ? 'fill-current' : ''} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          // Detailed Expanded Article View
          <motion.div
            key="detail"
            id="analysis-detail"
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ type: 'tween', duration: 0.25 }}
          >
            {/* Back Button */}
            <button
              id="back-to-articles"
              onClick={() => setSelectedArticle(null)}
              className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-[#C9A84C] font-semibold transition-colors py-1 group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to Articles</span>
            </button>

            {/* Immersive Detail Card */}
            <div className="bg-[#1A1A2E] rounded-xl overflow-hidden border border-[#C9A84C]/20 shadow-xl pb-6">
              <div className="relative h-48 bg-black">
                <img
                  src={selectedArticle.imageUrl}
                  alt={selectedArticle.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E] via-[#1A1A2E]/40 to-black/60" />
                
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="px-2 py-0.5 bg-[#8B0000] text-[#C9A84C] text-[8px] font-extrabold uppercase tracking-widest rounded-md border border-[#C9A84C]/20 inline-block mb-1.5">
                    {selectedArticle.category}
                  </span>
                  <h1 className="text-sm font-black text-white leading-tight drop-shadow-md">
                    {selectedArticle.title}
                  </h1>
                </div>
              </div>

              {/* Author Info Banner */}
              <div className="px-4 py-3 bg-black/25 border-b border-gray-800/40 flex items-center justify-between text-[11px] text-gray-300">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#8B0000] to-[#C9A84C] flex items-center justify-center font-black text-[9px] text-[#1A1A2E]">
                    {selectedArticle.author.substring(0, 1).toUpperCase()}
                  </div>
                  <div>
                    <span className="font-bold text-white block leading-none">{selectedArticle.author}</span>
                    <span className="text-[9px] text-gray-400">Chief Football Analyst</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-gray-400">
                  <Calendar size={11} />
                  <span>{formatDate(selectedArticle.date)}</span>
                </div>
              </div>

              {/* Core Content */}
              <div className="p-4 text-xs text-gray-200 space-y-3.5 leading-relaxed font-normal">
                {selectedArticle.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('###')) {
                    // Heading 3 render
                    return (
                      <h3 key={index} className="text-sm font-extrabold text-[#C9A84C] pt-2 flex items-center gap-1.5">
                        <span className="w-1 h-3.5 bg-[#8B0000] rounded" />
                        {paragraph.replace('###', '').trim()}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith('*')) {
                    // Bullet list render
                    return (
                      <ul key={index} className="pl-4 list-disc space-y-1.5 text-gray-300 bg-black/15 p-3 rounded-lg border border-gray-800/50">
                        {paragraph.split('\n').map((li, liIdx) => (
                          <li key={liIdx} className="leading-tight">
                            {li.replace('*', '').trim()}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={index} className="text-gray-300">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* Interaction Row */}
              <div className="px-4 pt-4 border-t border-gray-800/60 flex items-center gap-3">
                <button
                  id={`detail-like-btn`}
                  onClick={(e) => toggleLike(selectedArticle.id, e)}
                  className={`flex-1 py-2 rounded-lg border text-xs font-bold flex items-center justify-center gap-1.5 transition-colors ${
                    likes[selectedArticle.id]
                      ? 'bg-red-500/10 border-red-500 text-red-500'
                      : 'bg-black/30 border-gray-800 text-gray-400 hover:text-white'
                  }`}
                >
                  <Heart size={14} className={likes[selectedArticle.id] ? 'fill-current' : ''} />
                  <span>{likes[selectedArticle.id] ? 'Liked Article' : 'Like'}</span>
                </button>
                <button
                  id="share-article"
                  onClick={() => alert('Article link copied to clipboard!')}
                  className="py-2 px-3 bg-gray-800 hover:bg-gray-750 border border-gray-700 rounded-lg text-gray-300 hover:text-white text-xs font-semibold flex items-center gap-1 transition-colors"
                >
                  <Share2 size={14} />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
