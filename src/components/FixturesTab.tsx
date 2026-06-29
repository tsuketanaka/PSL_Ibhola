import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Share2, Bell } from 'lucide-react';
import { FIXTURES_DATA } from '../data';
import { formatDate } from '../utils';

export default function FixturesTab() {
  const [reminders, setReminders] = useState<Record<string, boolean>>({});

  const toggleReminder = (id: string) => {
    setReminders(prev => {
      const updated = { ...prev, [id]: !prev[id] };
      // Simulate confirmation
      return updated;
    });
  };

  // Group fixtures by matchday
  const groupedFixtures = FIXTURES_DATA.reduce((groups, fixture) => {
    const key = fixture.matchday;
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(fixture);
    return groups;
  }, {} as Record<string, typeof FIXTURES_DATA>);

  return (
    <div id="fixtures-container" className="h-full overflow-y-auto px-4 py-4 space-y-4 pb-24">
      <div id="fixtures-header" className="mb-2">
        <h2 className="text-xl font-bold text-[#C9A84C] tracking-tight">Fixtures & Schedule</h2>
        <p className="text-xs text-gray-400">Never miss a match. Stay updated with upcoming matches across Zimbabwe</p>
      </div>

      {Object.entries(groupedFixtures).map(([matchday, fixtures], gIdx) => (
        <div key={matchday} id={`matchday-group-${gIdx}`} className="space-y-3">
          {/* Matchday Header Divider */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-black tracking-widest text-[#C9A84C] uppercase bg-[#8B0000] px-3 py-1 rounded-md border border-[#C9A84C]/20 shadow-sm">
              {matchday}
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-800 to-transparent" />
          </div>

          <div className="grid grid-cols-1 gap-3">
            {fixtures.map((fixture, idx) => {
              const hasReminder = !!reminders[fixture.id];
              return (
                <motion.div
                  key={fixture.id}
                  id={`fixture-card-${fixture.id}`}
                  className="bg-[#1A1A2E] rounded-xl p-4 border border-gray-800/60 shadow-md relative overflow-hidden flex flex-col justify-between"
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                >
                  {/* Decorative background stripes */}
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#8B0000] to-[#C9A84C]/40" />

                  {/* Top section: date and actions */}
                  <div className="flex items-center justify-between border-b border-gray-800/60 pb-2 mb-3 text-[11px] text-gray-400">
                    <div className="flex items-center gap-1.5 font-medium text-gray-300">
                      <Calendar size={12} className="text-[#C9A84C]" />
                      <span>{formatDate(fixture.date)}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <button
                        id={`bell-btn-${fixture.id}`}
                        onClick={() => toggleReminder(fixture.id)}
                        className={`p-1.5 rounded-lg transition-all ${
                          hasReminder 
                            ? 'bg-[#C9A84C] text-[#1A1A2E]' 
                            : 'bg-black/40 text-gray-400 hover:text-[#C9A84C] hover:bg-black/60'
                        }`}
                        title="Set Reminder"
                      >
                        <Bell size={11} className={hasReminder ? 'fill-current' : ''} />
                      </button>
                    </div>
                  </div>

                  {/* Teams Duel Area */}
                  <div className="flex items-center justify-between py-2 px-1">
                    {/* Home Team */}
                    <div className="flex-1 text-center pr-2 flex flex-col items-center">
                      <div className="w-9 h-9 bg-gradient-to-br from-[#8B0000] to-[#500000] rounded-full flex items-center justify-center text-[#C9A84C] border border-[#C9A84C]/20 font-black text-xs shadow-inner">
                        {fixture.homeTeam.substring(0, 2).toUpperCase()}
                      </div>
                      <span className="text-xs font-bold text-white mt-2 line-clamp-1 block">
                        {fixture.homeTeam}
                      </span>
                    </div>

                    {/* VS Section */}
                    <div className="flex flex-col items-center justify-center px-2">
                      <span className="text-[10px] font-extrabold text-[#C9A84C] uppercase tracking-wider bg-black/40 px-2.5 py-1 rounded-md border border-gray-800">
                        VS
                      </span>
                      <div className="flex items-center gap-1 mt-1 text-[11px] text-gray-400 font-mono">
                        <Clock size={10} className="text-[#C9A84C]" />
                        <span>{fixture.time}</span>
                      </div>
                    </div>

                    {/* Away Team */}
                    <div className="flex-1 text-center pl-2 flex flex-col items-center">
                      <div className="w-9 h-9 bg-gradient-to-br from-[#1A1A2E] to-gray-900 rounded-full flex items-center justify-center text-[#C9A84C] border border-gray-800 font-black text-xs shadow-inner">
                        {fixture.awayTeam.substring(0, 2).toUpperCase()}
                      </div>
                      <span className="text-xs font-bold text-white mt-2 line-clamp-1 block">
                        {fixture.awayTeam}
                      </span>
                    </div>
                  </div>

                  {/* Venue Details */}
                  <div className="mt-3 pt-2 border-t border-gray-800/40 flex items-center justify-between text-[11px] text-gray-400">
                    <div className="flex items-center gap-1 truncate max-w-[85%]">
                      <MapPin size={11} className="text-gray-500 shrink-0" />
                      <span className="truncate">{fixture.venue}</span>
                    </div>
                    {hasReminder && (
                      <span className="text-[9px] text-[#C9A84C] font-semibold animate-pulse uppercase">
                        Reminder Set
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
