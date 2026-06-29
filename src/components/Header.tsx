import { Trophy, HelpCircle, Radio } from 'lucide-react';

interface HeaderProps {
  onShowHelp: () => void;
}

export default function Header({ onShowHelp }: HeaderProps) {
  return (
    <header 
      id="app-header" 
      className="bg-[#8B0000] px-4 py-3.5 border-b border-[#C9A84C]/30 flex items-center justify-between shadow-lg sticky top-0 z-30 shrink-0"
    >
      {/* Branding Logo Block */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C9A84C] to-amber-500 flex items-center justify-center border border-[#8B0000] shadow-md shadow-black/30">
          <Trophy size={16} className="text-[#1A1A2E] stroke-[2.5]" />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-black italic tracking-tighter text-[#C9A84C] font-sans drop-shadow leading-none">
            PSL iBhola
          </span>
          <span className="text-[7px] font-bold text-white/70 tracking-widest uppercase leading-none mt-1">
            Premier Soccer League of Zimbabwe
          </span>
        </div>
      </div>

      {/* Live Badge and Help Trigger */}
      <div className="flex items-center gap-2">
        {/* Animated Radio signal for live scores */}
        <div className="flex items-center gap-1.5 bg-[#1A1A2E]/80 border border-red-500/30 px-2 py-0.5 rounded-full text-[8px] font-black text-red-500 tracking-wider">
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping shrink-0" />
          <span>LIVE</span>
        </div>

        <button
          id="btn-help-trigger"
          onClick={onShowHelp}
          className="p-1.5 rounded-lg bg-[#1A1A2E]/50 text-[#C9A84C] hover:text-white hover:bg-[#8B0000]/60 transition-colors border border-[#C9A84C]/10"
          title="App Guide"
        >
          <HelpCircle size={15} />
        </button>
      </div>
    </header>
  );
}
