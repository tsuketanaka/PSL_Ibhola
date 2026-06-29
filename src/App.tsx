import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Wifi, Battery, Signal, HelpCircle, X, Smartphone, Award, Trophy } from 'lucide-react';

import Header from './components/Header';
import BottomNavigation, { TabID } from './components/BottomNavigation';

import HighlightsTab from './components/HighlightsTab';
import FixturesTab from './components/FixturesTab';
import LiveScoresTab from './components/LiveScoresTab';
import TableTab from './components/TableTab';
import MatchAnalysisTab from './components/MatchAnalysisTab';
import CompetitionsTab from './components/CompetitionsTab';
import ProfilesTab from './components/ProfilesTab';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabID>('scores'); // Default to Live Scores for excitement!
  const [time, setTime] = useState('');
  const [showHelpModal, setShowHelpModal] = useState(false);

  // Live status bar clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // hours '0' should be '12'
      setTime(`${hours}:${minutes} ${ampm}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Helper to render active tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case 'highlights':
        return <HighlightsTab />;
      case 'fixtures':
        return <FixturesTab />;
      case 'scores':
        return <LiveScoresTab />;
      case 'table':
        return <TableTab />;
      case 'analysis':
        return <MatchAnalysisTab />;
      case 'competitions':
        return <CompetitionsTab />;
      case 'profiles':
        return <ProfilesTab />;
      default:
        return <LiveScoresTab />;
    }
  };

  return (
    <div 
      id="desktop-workspace" 
      className="min-h-screen w-full bg-[#0B0B14] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2D0A0A] via-[#0F0F1A] to-[#07070D] flex items-center justify-center p-0 sm:p-6 text-white font-sans overflow-x-hidden select-none relative"
    >
      {/* Dynamic background ambient lights */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#8B0000]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#C9A84C]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Grid line overlay to give tech/modern aesthetic */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Desktop Info column (Visible on large viewports, hidden on mobile) */}
      <div 
        id="desktop-promo-panel" 
        className="hidden lg:flex flex-col max-w-sm mr-12 space-y-6 text-left shrink-0 select-none z-10"
      >
        <div className="space-y-2">
          <span className="px-3 py-1 bg-[#8B0000]/35 border border-[#C9A84C]/20 text-[#C9A84C] text-[10px] font-black uppercase tracking-widest rounded-full shadow-inner inline-block">
            Fan Experience App
          </span>
          <h1 className="text-4xl font-black text-white leading-tight tracking-tight">
            PSL <span className="text-[#C9A84C]">iBhola</span>
          </h1>
          <p className="text-sm text-gray-300 leading-relaxed font-normal">
            Immerse yourself in the Zimbabwe Premier Soccer League. Track live scores, fixtures, standing permutations, tactical analysis, profiles, and prediction contests.
          </p>
        </div>

        {/* Feature Highlights bento list */}
        <div className="space-y-3.5 text-xs text-gray-300">
          <div className="flex items-start gap-2.5 p-3 bg-[#1A1A2E]/50 rounded-xl border border-gray-800/60 backdrop-blur-sm">
            <Trophy className="text-[#C9A84C] shrink-0 mt-0.5" size={16} />
            <div>
              <span className="font-bold text-white block">Official Table Standings</span>
              <span className="text-gray-400 text-[11px]">Exact points, stats, and live continental spots highlighting.</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5 p-3 bg-[#1A1A2E]/50 rounded-xl border border-gray-800/60 backdrop-blur-sm">
            <Award className="text-[#C9A84C] shrink-0 mt-0.5" size={16} />
            <div>
              <span className="font-bold text-white block">Weekly Predictions & Prizes</span>
              <span className="text-gray-400 text-[11px]">Submit entries with real validation and secure grand prizes.</span>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="text-[11px] text-gray-500 bg-black/20 p-4 rounded-xl border border-gray-800/40">
          <span className="font-bold text-[#C9A84C] block mb-1">Interactive Shell Preview</span>
          Use the bottom navigation inside the simulated smartphone viewport to explore all seven tabs. Tapping cards will open immersive detail modals or interactive media players.
        </div>
      </div>

      {/* Smart Device Container Block */}
      <div 
        id="smartphone-shell-wrapper" 
        className="relative w-full sm:w-[375px] h-screen sm:h-[780px] bg-[#0C0C14] sm:rounded-[36px] sm:border-8 sm:border-gray-800/95 sm:shadow-2xl overflow-hidden flex flex-col shrink-0 z-10 transition-all shadow-black/80"
      >
        {/* Notch details for simulated phone on large viewports */}
        <div className="hidden sm:block absolute top-0 left-1/2 -translate-x-1/2 w-32 h-5 bg-gray-800 rounded-b-xl z-50 pointer-events-none" />

        {/* Dynamic Status Bar */}
        <div 
          id="mock-status-bar" 
          className="bg-[#7B1C1C] text-white px-5 h-[34px] flex items-center justify-between text-[11px] font-black tracking-wide shrink-0 select-none z-40 border-b border-[#7B1C1C]"
        >
          {/* Status Clock */}
          <div className="font-semibold text-white font-mono shrink-0">
            {time || '15:00'}
          </div>

          {/* Camera Notch Gap Spacer for simulated layout */}
          <div className="hidden sm:block w-24 h-4 bg-transparent shrink-0" />

          {/* Quick status icons */}
          <div className="flex items-center gap-1.5 shrink-0 text-white">
            <Signal size={12} className="text-white/90" />
            <span className="text-[9px] font-bold text-white/90">5G</span>
            <Wifi size={12} className="text-white/90" />
            <Battery size={14} className="text-[#C9A84C]" />
          </div>
        </div>

        {/* Application Branding App Header */}
        <Header onShowHelp={() => setShowHelpModal(true)} />

        {/* Main Display screen container */}
        <main 
          id="app-main-screen" 
          className="flex-1 overflow-hidden relative bg-[#09090F]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              id={`tab-wrapper-${activeTab}`}
              className="h-full w-full"
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.15 }}
            >
              {renderTabContent()}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Bottom Navigation */}
        <BottomNavigation activeTab={activeTab} onChangeTab={setActiveTab} />
      </div>

      {/* Quick Help / Guide Modal Overlay */}
      <AnimatePresence>
        {showHelpModal && (
          <motion.div
            id="help-guide-overlay"
            className="absolute inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              id="help-guide-content"
              className="bg-[#1A1A2E] w-full max-w-sm rounded-2xl border border-[#C9A84C]/30 overflow-hidden shadow-2xl p-5 space-y-4"
              initial={{ scale: 0.9, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 15 }}
            >
              <div className="flex items-center justify-between border-b border-gray-800 pb-2.5">
                <div className="flex items-center gap-1.5 text-[#C9A84C] font-black">
                  <Smartphone size={16} />
                  <span>PSL iBhola App Guide</span>
                </div>
                <button
                  id="close-help-btn"
                  onClick={() => setShowHelpModal(false)}
                  className="p-1 rounded-full bg-black/45 text-gray-400 hover:text-white transition-colors"
                >
                  <X size={15} />
                </button>
              </div>

              <div className="space-y-3.5 text-xs text-gray-300 leading-relaxed font-normal">
                <p>
                  Welcome to <span className="text-[#C9A84C] font-bold">PSL iBhola</span>, the ultimate companion for the Premier Soccer League of Zimbabwe!
                </p>

                <div className="space-y-2">
                  <span className="font-extrabold text-white block uppercase text-[10px] tracking-wider">Features Overview:</span>
                  <ul className="space-y-1.5 text-[11px] list-disc pl-4 text-gray-300">
                    <li>🎬 <span className="font-bold text-white">Highlights:</span> View match cards with integrated iframe player.</li>
                    <li>📅 <span className="font-bold text-white">Fixtures:</span> Explore upcoming matchdays and configure notifications.</li>
                    <li>⚽ <span className="font-bold text-white">Live Scores:</span> Dynamic scoreboard boards tracking live/finished/scheduled.</li>
                    <li>📊 <span className="font-bold text-white">Standings:</span> Interactive league standings with zone markers.</li>
                    <li>📰 <span className="font-bold text-white">Tactical Analysis:</span> In-depth coaching blueprints and strategies.</li>
                    <li>🏆 <span className="font-bold text-white">Competitions:</span> Predict scorelines, submit DOB/ID data, and win!</li>
                    <li>👤 <span className="font-bold text-white">Profiles:</span> Biographies, style of play, and exclusive video interviews.</li>
                  </ul>
                </div>

                <p className="text-[10px] text-gray-500 italic pt-1 border-t border-gray-800/60">
                  Built to display desktop emulator wrappers and mobile-first touch interfaces. Inspired by Zimbabwe PSL clubs.
                </p>
              </div>

              <button
                id="close-help-bottom-btn"
                onClick={() => setShowHelpModal(false)}
                className="w-full py-2 bg-[#8B0000] hover:bg-[#a00000] border border-[#C9A84C]/25 text-white font-bold rounded-lg transition-colors text-xs shadow"
              >
                Let's Football!
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
