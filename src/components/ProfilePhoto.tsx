import { useState } from 'react';

interface ProfilePhotoProps {
  photoUrl: string;
  name: string;
  role: 'player' | 'coach';
  club: string;
  className?: string;
  isHero?: boolean;
}

export default function ProfilePhoto({ photoUrl, name, role, club, className = "", isHero = false }: ProfilePhotoProps) {
  const [hasError, setHasError] = useState(false);
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  const handleImageError = () => {
    setHasError(true);
  };

  if (hasError || !photoUrl) {
    return (
      <div 
        id={`placeholder-${name.toLowerCase().replace(/\s+/g, '-')}`}
        className={`relative w-full h-full bg-gradient-to-b from-[#220808] via-[#100505] to-[#0a0303] flex flex-col items-center justify-center p-4 overflow-hidden select-none ${className}`}
      >
        {/* Decorative Grid Lines / Tactical lines to look sporty */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="tactical-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#C9A84C" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tactical-grid)" />
            {/* Draw a tactical pitch line */}
            <circle cx="50%" cy="100%" r="60" fill="none" stroke="#C9A84C" strokeWidth="1" />
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#C9A84C" strokeWidth="1" />
          </svg>
        </div>

        {/* Large stylized background initials for depth */}
        <div className="absolute text-[8rem] font-black text-white/[0.02] select-none tracking-tighter bottom-[-15px] right-2 uppercase italic font-sans leading-none">
          {initials}
        </div>

        {/* Visual Badge Frame */}
        <div className="relative flex flex-col items-center z-10">
          {/* Outer Gold/Red Ring */}
          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#8B0000] to-[#C9A84C] p-[1.5px] shadow-lg shadow-black/60 flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-[#1A1A2E] flex items-center justify-center overflow-hidden">
              {role === 'coach' ? (
                // Tactical Clipboard or Coach Strategy diagram
                <svg className="w-7 h-7 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              ) : (
                // Footballer/User profile icon
                <svg className="w-7 h-7 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              )}
            </div>
          </div>

          {/* Label / Initials */}
          <div className="mt-2 text-center">
            <span className="text-xs font-black text-white/90 tracking-widest uppercase font-sans block drop-shadow-md leading-none">
              {name.split(' ').pop()}
            </span>
            <span className="text-[7px] font-bold text-[#C9A84C]/80 tracking-widest uppercase block mt-1">
              {role === 'coach' ? 'LEADER / COACH' : 'CHAMPION / PLAYER'}
            </span>
          </div>
        </div>

        {/* Brand Tag in Corner */}
        <div className="absolute top-2.5 right-2.5 text-white/20 text-[6px] font-mono tracking-widest font-semibold uppercase">
          PSL iBhola
        </div>
      </div>
    );
  }

  return (
    <img
      src={photoUrl}
      alt={name}
      referrerPolicy="no-referrer"
      onError={handleImageError}
      className={className}
    />
  );
}
