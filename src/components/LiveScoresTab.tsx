import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flame, Clock, Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { LIVESCORE_DATA } from '../data';
import { LiveScoreMatch } from '../types';
import { formatDate } from '../utils';

type FilterType = 'ALL' | 'LIVE' | 'FINISHED' | 'SCHEDULED';

export default function LiveScoresTab() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('ALL');
  const [expandedMatchId, setExpandedMatchId] = useState<string | null>(null);

  const filteredMatches = LIVESCORE_DATA.filter((match) => {
    if (activeFilter === 'ALL') return true;
    return match.status === activeFilter;
  });

  const toggleExpand = (id: string) => {
    setExpandedMatchId(prev => (prev === id ? null : id));
  };

  // Mock events/stats for expanded score detail
  const getMatchEvents = (id: string) => {
    switch (id) {
      case 'l1':
        return [
          { minute: "12'", team: 'home', player: 'K. Musona (Goal)', type: 'goal' },
          { minute: "34'", team: 'away', player: 'T. Chivandire (Yellow)', type: 'card' },
          { minute: "62'", team: 'away', player: 'W. Musona (Goal)', type: 'goal' },
          { minute: "71'", team: 'home', player: 'P. Bamusi (Goal)', type: 'goal' },
        ];
      case 'l2':
        return [
          { minute: "19'", team: 'away', player: 'B. Amidu (Goal)', type: 'goal' },
          { minute: "38'", team: 'home', player: 'M. Ndlovu (Goal)', type: 'goal' },
        ];
      case 'l3':
        return [
          { minute: "22'", team: 'home', player: 'E. Paga (Goal)', type: 'goal' },
          { minute: "45+2'", team: 'home', player: 'D. Mudadi (Goal)', type: 'goal' },
          { minute: "58'", team: 'away', player: 'S. Makumbe (Goal)', type: 'goal' },
          { minute: "89'", team: 'home', player: 'T. Shandirwa (Goal)', type: 'goal' },
        ];
      case 'l4':
        return [
          { minute: "5'", team: 'home', player: 'O. Chirinda (Goal)', type: 'goal' },
          { minute: "84'", team: 'home', player: 'T. Benhura (Goal)', type: 'goal' },
        ];
      default:
        return [];
    }
  };

  return (
    <div id="livescores-container" className="h-full overflow-y-auto px-4 py-4 space-y-4 pb-24">
      <div id="livescores-header" className="mb-2">
        <h2 className="text-xl font-bold text-[#C9A84C] tracking-tight">Live Scores</h2>
        <p className="text-xs text-gray-400">Real-time match updates, live standings increments, and results</p>
      </div>

      {/* Filter Tabs */}
      <div id="livescores-filter" className="flex bg-[#1A1A2E] p-1 rounded-xl border border-gray-800/60 sticky top-0 z-10 shadow-md">
        {(['ALL', 'LIVE', 'FINISHED', 'SCHEDULED'] as FilterType[]).map((filter) => (
          <button
            key={filter}
            id={`filter-btn-${filter}`}
            onClick={() => {
              setActiveFilter(filter);
              setExpandedMatchId(null);
            }}
            className={`flex-1 text-center py-2 text-[10px] font-extrabold rounded-lg tracking-wider uppercase transition-all duration-300 relative ${
              activeFilter === filter
                ? 'text-[#C9A84C]'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {filter}
            {filter === 'LIVE' && (
              <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-red-500 rounded-full animate-ping" />
            )}
            {activeFilter === filter && (
              <motion.div
                layoutId="activeFilterBg"
                className="absolute inset-0 bg-[#8B0000]/40 border border-[#8B0000] rounded-lg -z-10"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Scorecards */}
      <div id="livescores-list" className="space-y-3">
        {filteredMatches.length === 0 ? (
          <div className="text-center py-12 text-gray-500 text-xs">
            No matches found in this category.
          </div>
        ) : (
          filteredMatches.map((match, idx) => {
            const isLive = match.status === 'LIVE';
            const isFinished = match.status === 'FINISHED';
            const isScheduled = match.status === 'SCHEDULED';
            const isExpanded = expandedMatchId === match.id;
            const events = getMatchEvents(match.id);

            return (
              <motion.div
                key={match.id}
                id={`livescore-card-${match.id}`}
                className="bg-[#1A1A2E] rounded-xl border border-gray-800/60 overflow-hidden shadow-lg transition-all"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: idx * 0.04 }}
              >
                {/* Main Card Header / Status Info */}
                <div className="px-4 py-2.5 bg-black/30 border-b border-gray-800/40 flex items-center justify-between text-[10px] font-bold">
                  {isLive && (
                    <div className="flex items-center gap-1.5 text-red-500">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                      </span>
                      <span className="tracking-widest uppercase font-black">LIVE • {match.minute}</span>
                    </div>
                  )}

                  {isFinished && (
                    <div className="text-gray-400 tracking-wider font-extrabold uppercase bg-gray-800/40 px-2 py-0.5 rounded">
                      FINISHED
                    </div>
                  )}

                  {isScheduled && (
                    <div className="text-[#C9A84C] tracking-wider font-extrabold uppercase bg-[#8B0000]/20 px-2 py-0.5 rounded border border-[#8B0000]/40">
                      SCHEDULED
                    </div>
                  )}

                  <span className="text-gray-500 font-medium truncate max-w-[180px]">
                    {match.venue}
                  </span>
                </div>

                {/* Score Panel Body */}
                <div 
                  className="p-4 flex items-center justify-between cursor-pointer"
                  onClick={() => !isScheduled && toggleExpand(match.id)}
                >
                  {/* Home Team */}
                  <div className="flex-1 flex flex-col items-center text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#8B0000]/60 to-[#1A1A2E] rounded-xl flex items-center justify-center text-[#C9A84C] border border-[#C9A84C]/10 font-black text-sm">
                      {match.homeTeam.substring(0, 2).toUpperCase()}
                    </div>
                    <span className="text-xs font-bold text-white mt-2 line-clamp-1">
                      {match.homeTeam}
                    </span>
                  </div>

                  {/* Central Scoreboard Display */}
                  <div className="px-4 flex flex-col items-center justify-center">
                    {isScheduled ? (
                      <div className="flex flex-col items-center bg-black/30 px-3 py-1.5 rounded-lg border border-gray-800">
                        <span className="text-xs font-black text-white">{match.time}</span>
                        <span className="text-[9px] text-gray-400 font-medium mt-0.5">{formatDate(match.date || '')}</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <span className={`text-2xl font-black ${isLive ? 'text-white' : 'text-gray-400'}`}>
                          {match.homeScore}
                        </span>
                        <span className="text-gray-600 font-extrabold">-</span>
                        <span className={`text-2xl font-black ${isLive ? 'text-white' : 'text-gray-400'}`}>
                          {match.awayScore}
                        </span>
                      </div>
                    )}

                    {!isScheduled && (
                      <div className="mt-1 text-[9px] text-gray-500 font-bold flex items-center gap-1">
                        <span>{isExpanded ? 'Hide Details' : 'Tap for Events'}</span>
                        {isExpanded ? <ChevronUp size={10} /> : <ChevronDown size={10} />}
                      </div>
                    )}
                  </div>

                  {/* Away Team */}
                  <div className="flex-1 flex flex-col items-center text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#1A1A2E] to-gray-850 rounded-xl flex items-center justify-center text-white border border-gray-850 font-black text-sm">
                      {match.awayTeam.substring(0, 2).toUpperCase()}
                    </div>
                    <span className="text-xs font-bold text-white mt-2 line-clamp-1">
                      {match.awayTeam}
                    </span>
                  </div>
                </div>

                {/* Expanded Details Section */}
                <AnimatePresence>
                  {isExpanded && events.length > 0 && (
                    <motion.div
                      id={`match-events-${match.id}`}
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="overflow-hidden bg-[#0F0F1A] border-t border-gray-800/40"
                    >
                      <div className="p-3.5 space-y-2.5 text-xs text-gray-300">
                        <div className="text-[9px] font-black uppercase text-[#C9A84C] border-b border-gray-800 pb-1 mb-2 tracking-widest">
                          Match Timeline
                        </div>

                        {events.map((evt, eIdx) => (
                          <div 
                            key={eIdx} 
                            className={`flex items-center gap-2 ${
                              evt.team === 'home' ? 'flex-row' : 'flex-row-reverse'
                            }`}
                          >
                            <span className="font-mono text-[10px] text-[#C9A84C] font-black bg-[#8B0000]/30 px-1.5 py-0.5 rounded-md border border-[#8B0000]/20 min-w-[32px] text-center">
                              {evt.minute}
                            </span>
                            <div className={`flex items-center gap-1 text-[11px] ${
                              evt.team === 'home' ? 'text-left' : 'text-right'
                            }`}>
                              {evt.type === 'goal' ? '⚽' : '🟨'}
                              <span className="font-semibold text-white">{evt.player}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })
        )}
      </div>
    </div>
  );
}
