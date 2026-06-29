import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Shield, Video, Award, Sparkles, X, ExternalLink } from 'lucide-react';
import { PROFILES_DATA } from '../data';
import { ProfileCard } from '../types';
import { getYoutubeEmbedUrl } from '../utils';
import ProfilePhoto from './ProfilePhoto';

export default function ProfilesTab() {
  const [selectedProfile, setSelectedProfile] = useState<ProfileCard | null>(null);

  return (
    <div id="profiles-container" className="h-full overflow-y-auto px-4 py-4 space-y-4 pb-24">
      <div id="profiles-header" className="mb-2">
        <h2 className="text-xl font-bold text-[#C9A84C] tracking-tight">Stars & Legends</h2>
        <p className="text-xs text-gray-400">Discover top-performing players and tactical masterminds in Zimbabwe football</p>
      </div>

      {/* Grid view of profile cards */}
      <div id="profiles-grid" className="grid grid-cols-2 gap-3.5">
        {PROFILES_DATA.map((profile, idx) => {
          const isCoach = profile.role === 'coach';

          return (
            <motion.div
              key={profile.id}
              id={`profile-card-${profile.id}`}
              onClick={() => setSelectedProfile(profile)}
              className="bg-[#1A1A2E] rounded-xl border border-gray-800/60 overflow-hidden shadow-md hover:border-[#C9A84C]/40 transition-all cursor-pointer group flex flex-col justify-between"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, delay: idx * 0.05 }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Photo Area */}
              <div className="relative aspect-square w-full bg-black overflow-hidden">
                <ProfilePhoto
                  photoUrl={profile.photoUrl}
                  name={profile.name}
                  role={profile.role}
                  club={profile.club}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent pointer-events-none" />
                
                {/* Role Badge */}
                <span className={`absolute top-2 left-2 px-2 py-0.5 text-[8px] font-black uppercase tracking-wider rounded-md border shadow ${
                  isCoach 
                    ? 'bg-amber-600/30 text-amber-300 border-amber-500/50' 
                    : 'bg-[#8B0000]/30 text-[#C9A84C] border-[#C9A84C]/30'
                }`}>
                  {profile.role}
                </span>

                {/* Club Badge */}
                <div className="absolute bottom-2 left-2 right-2 text-left">
                  <span className="text-[10px] text-gray-300 font-medium truncate block">
                    {profile.club}
                  </span>
                </div>
              </div>

              {/* Name Details */}
              <div className="p-3">
                <h3 className="text-xs font-black text-white group-hover:text-[#C9A84C] transition-colors leading-tight line-clamp-1">
                  {profile.name}
                </h3>
                <span className="text-[9px] text-gray-400 mt-0.5 block truncate">
                  {profile.positionOrSpecialty}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Immersive Profile Detail Modal Page */}
      <AnimatePresence>
        {selectedProfile && (
          <motion.div
            id="profile-detail-overlay"
            className="absolute inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              id="profile-detail-container"
              className="bg-[#1A1A2E] w-full max-w-sm rounded-t-2xl sm:rounded-2xl border-t sm:border border-[#C9A84C]/30 flex flex-col shadow-2xl overflow-y-auto max-h-[92%]"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            >
              {/* Modal Banner Cover */}
              <div className="relative h-44 bg-black overflow-hidden shrink-0">
                <ProfilePhoto
                  photoUrl={selectedProfile.photoUrl}
                  name={selectedProfile.name}
                  role={selectedProfile.role}
                  club={selectedProfile.club}
                  className="w-full h-full object-cover opacity-60"
                  isHero={true}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E] via-[#1A1A2E]/30 to-black/50 pointer-events-none" />
                
                {/* Back Button */}
                <button
                  id="close-profile-modal"
                  onClick={() => setSelectedProfile(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:text-[#C9A84C] transition-colors shadow"
                >
                  <X size={16} />
                </button>

                {/* Cover Bio Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <span className="px-2 py-0.5 bg-[#8B0000] text-[#C9A84C] text-[8px] font-black uppercase tracking-widest rounded-md border border-[#C9A84C]/20 inline-block mb-1.5">
                    {selectedProfile.role} • {selectedProfile.club}
                  </span>
                  <h1 className="text-lg font-black text-white leading-tight drop-shadow">
                    {selectedProfile.name}
                  </h1>
                  <span className="text-[11px] text-gray-300 font-medium">
                    {selectedProfile.positionOrSpecialty}
                  </span>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="p-4 space-y-4 text-xs text-gray-300">
                {/* Biography Section */}
                <div className="space-y-1.5">
                  <h3 className="text-[11px] font-black uppercase text-[#C9A84C] tracking-wider flex items-center gap-1.5 border-b border-gray-800 pb-1">
                    <User size={12} />
                    Biography
                  </h3>
                  <p className="leading-relaxed text-gray-300">
                    {selectedProfile.bio}
                  </p>
                </div>

                {/* Style of Play Section */}
                <div className="space-y-1.5">
                  <h3 className="text-[11px] font-black uppercase text-[#C9A84C] tracking-wider flex items-center gap-1.5 border-b border-gray-800 pb-1">
                    <Shield size={12} />
                    {selectedProfile.role === 'coach' ? 'Coaching Philosophy' : 'Playing Style'}
                  </h3>
                  <p className="leading-relaxed text-gray-300">
                    {selectedProfile.playingStyle}
                  </p>
                </div>

                {/* Career Highlights */}
                <div className="space-y-1.5">
                  <h3 className="text-[11px] font-black uppercase text-[#C9A84C] tracking-wider flex items-center gap-1.5 border-b border-gray-800 pb-1">
                    <Award size={12} />
                    Career Accomplishments
                  </h3>
                  <ul className="space-y-1.5">
                    {selectedProfile.careerHighlights.map((hl, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-gray-300 leading-tight">
                        <Sparkles size={11} className="text-[#C9A84C] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Embedded Video Interview */}
                <div className="space-y-2.5 pt-1">
                  <h3 className="text-[11px] font-black uppercase text-[#C9A84C] tracking-wider flex items-center gap-1.5 border-b border-gray-800 pb-1">
                    <Video size={12} />
                    Exclusive Video Interview
                  </h3>
                  
                  {/* YouTube Embed Frame */}
                  <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black border border-gray-850">
                    <iframe
                      src={getYoutubeEmbedUrl(selectedProfile.interviewUrl)}
                      title={`${selectedProfile.name} Interview`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  
                  <a
                    href={selectedProfile.interviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 bg-gray-800 hover:bg-gray-750 border border-gray-750 rounded-lg text-gray-300 hover:text-white font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <ExternalLink size={12} className="text-[#C9A84C]" />
                    Watch interview on YouTube
                  </a>
                </div>
              </div>

              {/* Modal Action Footer */}
              <div className="p-4 border-t border-gray-850 bg-black/20 shrink-0">
                <button
                  id="close-profile-bottom"
                  onClick={() => setSelectedProfile(null)}
                  className="w-full py-2.5 bg-[#8B0000] hover:bg-[#a00000] border border-[#C9A84C]/30 text-white font-bold rounded-xl transition-all shadow-md text-center"
                >
                  Close Profile Details
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
