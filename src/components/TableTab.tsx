import { motion } from 'motion/react';
import { Award, Info, AlertTriangle } from 'lucide-react';
import { STANDINGS_DATA } from '../data';

export default function TableTab() {
  return (
    <div id="table-container" className="h-full overflow-y-auto px-4 py-4 space-y-4 pb-24">
      <div id="table-header" className="mb-2">
        <h2 className="text-xl font-bold text-[#C9A84C] tracking-tight">League Standings</h2>
        <p className="text-xs text-gray-400">Official Zimbabwe Premier Soccer League table standings</p>
      </div>

      {/* Table Legend */}
      <div id="table-legend" className="flex items-center gap-4 bg-[#1A1A2E] p-3 rounded-xl border border-gray-800/60 text-[10px] text-gray-400 justify-around">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 bg-gradient-to-r from-[#C9A84C]/50 to-amber-500/30 border border-[#C9A84C]/70 rounded" />
          <span className="font-semibold text-gray-300">CAF Champions League</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 bg-gradient-to-r from-red-600/40 to-red-800/20 border border-red-500/60 rounded" />
          <span className="font-semibold text-gray-300">Relegation Zone</span>
        </div>
      </div>

      {/* Responsive Table Wrapper */}
      <motion.div
        id="table-scroll-wrapper"
        className="bg-[#1A1A2E] rounded-xl border border-gray-800/60 shadow-lg overflow-hidden"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[500px]">
            <thead>
              <tr className="bg-black/40 border-b border-gray-800 text-[10px] font-extrabold uppercase tracking-wider text-[#C9A84C]">
                <th className="py-3 px-3.5 text-center w-12">POS</th>
                <th className="py-3 px-2">CLUB</th>
                <th className="py-3 px-2 text-center w-10">P</th>
                <th className="py-3 px-2 text-center w-10">W</th>
                <th className="py-3 px-2 text-center w-10">D</th>
                <th className="py-3 px-2 text-center w-10">L</th>
                <th className="py-3 px-2 text-center w-10">GF</th>
                <th className="py-3 px-2 text-center w-10">GA</th>
                <th className="py-3 px-2 text-center w-10">GD</th>
                <th className="py-3 px-3.5 text-center w-14 bg-black/20">PTS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/50 text-xs font-semibold">
              {STANDINGS_DATA.map((row) => {
                const isTopThree = row.pos <= 3;
                const isBottomThree = row.pos >= 16;
                
                let rowBgClass = "hover:bg-white/5 transition-colors";
                let posBgClass = "text-gray-400 bg-gray-800/40";
                
                if (isTopThree) {
                  rowBgClass = "bg-gradient-to-r from-[#C9A84C]/10 via-transparent to-transparent hover:bg-[#C9A84C]/15 transition-colors";
                  posBgClass = "text-[#1A1A2E] bg-gradient-to-br from-[#C9A84C] to-amber-500 shadow-sm font-black";
                } else if (isBottomThree) {
                  rowBgClass = "bg-gradient-to-r from-red-600/10 via-transparent to-transparent hover:bg-red-600/15 transition-colors";
                  posBgClass = "text-white bg-gradient-to-br from-red-600 to-red-800 font-black";
                }

                return (
                  <tr key={row.pos} id={`table-row-${row.pos}`} className={rowBgClass}>
                    {/* Position */}
                    <td className="py-2.5 px-3.5 text-center">
                      <div className={`w-5.5 h-5.5 rounded-full flex items-center justify-center text-[10px] ${posBgClass} mx-auto`}>
                        {row.pos}
                      </div>
                    </td>

                    {/* Club */}
                    <td className="py-2.5 px-2 text-white font-bold truncate max-w-[150px]">
                      <div className="flex items-center gap-2">
                        {isTopThree && <Award size={12} className="text-[#C9A84C] shrink-0" />}
                        <span className="truncate">{row.club}</span>
                      </div>
                    </td>

                    {/* Stats */}
                    <td className="py-2.5 px-2 text-center text-gray-300 font-medium">{row.played}</td>
                    <td className="py-2.5 px-2 text-center text-gray-300">{row.won}</td>
                    <td className="py-2.5 px-2 text-center text-gray-300">{row.drawn}</td>
                    <td className="py-2.5 px-2 text-center text-gray-300">{row.lost}</td>
                    <td className="py-2.5 px-2 text-center text-gray-400 font-light">{row.goalsFor}</td>
                    <td className="py-2.5 px-2 text-center text-gray-400 font-light">{row.goalsAgainst}</td>
                    
                    {/* Goal Difference */}
                    <td className={`py-2.5 px-2 text-center font-mono text-[11px] ${
                      row.goalDifference > 0 
                        ? 'text-green-500 font-bold' 
                        : row.goalDifference < 0 
                          ? 'text-red-400' 
                          : 'text-gray-400'
                    }`}>
                      {row.goalDifference > 0 ? `+${row.goalDifference}` : row.goalDifference}
                    </td>

                    {/* Points */}
                    <td className={`py-2.5 px-3.5 text-center font-black text-sm bg-black/10 ${
                      isTopThree 
                        ? 'text-[#C9A84C]' 
                        : isBottomThree 
                          ? 'text-red-400' 
                          : 'text-white'
                    }`}>
                      {row.points}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Info Notice card */}
      <div id="table-info" className="p-3 bg-black/30 rounded-xl border border-gray-800 text-[10px] text-gray-400 flex gap-2">
        <Info size={14} className="text-[#C9A84C] shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-[#C9A84C]">Tie-breaker criteria:</span> In case of tied points, team positions are decided sequentially by Goal Difference (GD), Goals Scored (GF), then Head-to-Head record. Relegated teams drop into regional Division One leagues.
        </div>
      </div>
    </div>
  );
}
