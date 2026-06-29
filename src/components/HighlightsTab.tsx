import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Calendar, Clock, X, ExternalLink } from 'lucide-react';
import { HIGHLIGHTS_DATA } from '../data';
import { HighlightCard } from '../types';
import { getYoutubeEmbedUrl, formatDate } from '../utils';

export default function HighlightsTab() {
  const [selectedVideo, setSelectedVideo] = useState<HighlightCard | null>(null);

  return (
    <div id="highlights-container" className="h-full overflow-y-auto px-4 py-4 space-y-4 pb-24">
      <div id="highlights-header" className="mb-2">
        <h2 className="text-xl font-bold text-[#C9A84C] tracking-tight">Match Highlights</h2>
        <p className="text-xs text-gray-400">Replay the best moments and sensational goals from the PSL</p>
      </div>

      <div id="highlights-grid" className="grid grid-cols-1 gap-4">
        {HIGHLIGHTS_DATA.map((item, idx) => (
          <motion.div
            key={item.id}
            id={`highlight-card-${item.id}`}
            className="bg-[#1A1A2E] rounded-xl overflow-hidden border border-gray-800/50 hover:border-[#C9A84C]/50 transition-colors shadow-lg cursor-pointer group"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.08 }}
            onClick={() => setSelectedVideo(item)}
            whileTap={{ scale: 0.98 }}
          >
            {/* Thumbnail Wrapper */}
            <div className="relative aspect-video w-full overflow-hidden bg-black">
              <img
                src={item.thumbnailUrl}
                alt={item.matchName}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Duration Badge */}
              <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/75 rounded text-[10px] font-mono text-white flex items-center gap-1">
                <Clock size={10} className="text-[#C9A84C]" />
                {item.duration}
              </div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-12 h-12 bg-[#8B0000] hover:bg-[#a00000] text-[#C9A84C] rounded-full flex items-center justify-center shadow-md shadow-black/50 border border-[#C9A84C]/30"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Play size={20} className="fill-current ml-0.5 text-[#C9A84C]" />
                </motion.div>
              </div>
            </div>

            {/* Details */}
            <div className="p-3.5 space-y-1.5">
              <span className="text-[10px] font-semibold text-[#C9A84C] tracking-wider uppercase px-2 py-0.5 bg-[#8B0000]/30 rounded-full border border-[#8B0000]/50 inline-block">
                {item.homeTeam} vs {item.awayTeam}
              </span>
              <h3 className="text-sm font-bold text-white line-clamp-1 group-hover:text-[#C9A84C] transition-colors">
                {item.matchName}
              </h3>
              <div className="flex items-center gap-2 text-[11px] text-gray-400">
                <Calendar size={12} className="text-gray-500" />
                <span>{formatDate(item.date)}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Video Overlay Player Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            id="video-modal-overlay"
            className="absolute inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              id="video-modal-content"
              className="bg-[#1A1A2E] w-full max-w-sm rounded-2xl overflow-hidden border border-[#C9A84C]/30 flex flex-col shadow-2xl"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            >
              {/* Modal Header */}
              <div className="px-4 py-3 bg-[#8B0000] border-b border-[#C9A84C]/20 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[9px] text-[#C9A84C] font-semibold tracking-wider uppercase">Now Playing Highlights</span>
                  <h3 className="text-xs font-bold text-white truncate max-w-[220px]">
                    {selectedVideo.matchName}
                  </h3>
                </div>
                <button
                  id="close-video-modal"
                  onClick={() => setSelectedVideo(null)}
                  className="p-1 rounded-full bg-black/40 text-gray-300 hover:text-white hover:bg-black/60 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Video Aspect Container */}
              <div className="relative aspect-video w-full bg-black border-b border-gray-800">
                <iframe
                  src={getYoutubeEmbedUrl(selectedVideo.youtubeUrl)}
                  title={selectedVideo.matchName}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Modal Footer Info */}
              <div className="p-4 space-y-3 bg-[#0F0F1A]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-gray-300">
                    <Calendar size={13} className="text-[#C9A84C]" />
                    <span>{formatDate(selectedVideo.date)}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-300">
                    <Clock size={13} className="text-[#C9A84C]" />
                    <span>{selectedVideo.duration} mins</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-800 flex items-center justify-between gap-2">
                  <a
                    href={selectedVideo.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 bg-[#C9A84C] hover:bg-[#b0913f] text-[#1A1A2E] font-bold text-xs rounded-lg flex items-center justify-center gap-1.5 transition-colors shadow-md"
                  >
                    <ExternalLink size={13} />
                    Open in YouTube
                  </a>
                  <button
                    id="close-video-footer"
                    onClick={() => setSelectedVideo(null)}
                    className="flex-1 py-2 px-3 bg-gray-800 hover:bg-gray-700 text-white font-medium text-xs rounded-lg transition-colors"
                  >
                    Close Player
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
