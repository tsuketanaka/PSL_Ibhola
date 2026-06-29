import { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { PlaySquare, Calendar, Activity, TableProperties, Newspaper, Trophy, User } from 'lucide-react';

export type TabID = 'highlights' | 'fixtures' | 'scores' | 'table' | 'analysis' | 'competitions' | 'profiles';

interface TabItem {
  id: TabID;
  label: string;
  icon: any;
  emoji: string;
}

interface BottomNavigationProps {
  activeTab: TabID;
  onChangeTab: (tab: TabID) => void;
}

const TABS_CONFIG: TabItem[] = [
  { id: 'highlights', label: 'Highlights', icon: PlaySquare, emoji: '🎬' },
  { id: 'fixtures', label: 'Fixtures', icon: Calendar, emoji: '📅' },
  { id: 'scores', label: 'Live Scores', icon: Activity, emoji: '⚽' },
  { id: 'table', label: 'Table', icon: TableProperties, emoji: '📊' },
  { id: 'analysis', label: 'Analysis', icon: Newspaper, emoji: '📰' },
  { id: 'competitions', label: 'Contests', icon: Trophy, emoji: '🏆' },
  { id: 'profiles', label: 'Profiles', icon: User, emoji: '👤' }
];

export default function BottomNavigation({ activeTab, onChangeTab }: BottomNavigationProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto scroll to make active tab visible if overflowed
  useEffect(() => {
    const activeEl = document.getElementById(`nav-tab-${activeTab}`);
    if (activeEl && scrollRef.current) {
      const scrollContainer = scrollRef.current;
      const containerWidth = scrollContainer.clientWidth;
      const elOffset = activeEl.offsetLeft;
      const elWidth = activeEl.clientWidth;
      
      scrollContainer.scrollTo({
        left: elOffset - (containerWidth / 2) + (elWidth / 2),
        behavior: 'smooth'
      });
    }
  }, [activeTab]);

  return (
    <nav
      id="bottom-navigation-bar"
      className="absolute bottom-0 left-0 right-0 bg-[#7B1C1C] border-t border-[#C9A84C]/25 h-[68px] z-30 shadow-2xl flex items-center shrink-0 overflow-hidden"
    >
      {/* Scrollable track containing tabs */}
      <div
        ref={scrollRef}
        id="nav-scroll-track"
        className="flex w-full overflow-x-auto scrollbar-none px-3 py-1 gap-1.5 h-full items-center"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {TABS_CONFIG.map((tab) => {
          const isActive = activeTab === tab.id;
          const IconComponent = tab.icon;

          return (
            <button
              key={tab.id}
              id={`nav-tab-${tab.id}`}
              onClick={() => onChangeTab(tab.id)}
              className="relative flex flex-col items-center justify-center min-w-[62px] max-w-[80px] flex-1 h-12 rounded-xl transition-all select-none cursor-pointer"
            >
              <div className="relative flex items-center justify-center">
                {/* Tab icon and emoji indicator */}
                <IconComponent
                  size={18}
                  className={`transition-transform ${
                    isActive ? 'text-[#C9A84C] scale-110' : 'text-gray-300'
                  }`}
                />
                
                {/* Miniature badge floating for context */}
                <span className="absolute -top-1.5 -right-1.5 text-[7px] pointer-events-none">
                  {tab.emoji}
                </span>
              </div>

              {/* Tab Label */}
              <span
                className={`text-[9px] font-extrabold tracking-wide mt-1 select-none transition-colors ${
                  isActive ? 'text-[#C9A84C]' : 'text-gray-300'
                }`}
              >
                {tab.label}
              </span>

              {/* Layout animate active background bubble */}
              {isActive && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 bg-white/10 rounded-xl -z-10 border-t border-white/10 shadow-inner"
                  transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
