import React from 'react';

export default function RobloxAvatarsSVG() {
  return (
    <div className="flex -space-x-2.5 overflow-hidden">
      
      {/* Avatar 1: Police Officer Roblox Character */}
      <div className="relative inline-block h-8 w-8 rounded-full ring-2 ring-white bg-gradient-to-b from-slate-100 to-slate-200 shadow-sm overflow-hidden shrink-0">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Light Gray Background */}
          <rect width="100" height="100" fill="#EAECEF" />
          
          {/* Roblox Blocky Head */}
          <rect x="25" y="32" width="50" height="42" rx="6" fill="#FFE5B4" />
          {/* Eyes & Neutral Mouth */}
          <ellipse cx="38" cy="52" rx="3.5" ry="5" fill="#2D3748" />
          <ellipse cx="62" cy="52" rx="3.5" ry="5" fill="#2D3748" />
          <line x1="43" y1="64" x2="57" y2="64" stroke="#2D3748" strokeWidth="2.5" strokeLinecap="round" />

          {/* Officer Uniform Body */}
          <polygon points="12,100 88,100 78,70 22,70" fill="#1A202C" />
          <polygon points="26,72 74,72 68,100 32,100" fill="#CCFF00" /> {/* Hi-Vis Vest */}
          <rect x="42" y="78" width="16" height="22" fill="#1A202C" />
          {/* Badge */}
          <polygon points="50,82 55,85 55,90 50,93 45,90 45,85" fill="#D69E2E" />

          {/* Police Officer Hat */}
          <path d="M18 36 C18 24, 82 24, 82 36 Z" fill="#2D3748" />
          <ellipse cx="50" cy="36" rx="36" ry="6" fill="#1A202C" />
          {/* Hat Cap Badge */}
          <circle cx="50" cy="28" r="5" fill="#D69E2E" />
          <circle cx="50" cy="28" r="2.5" fill="#1A202C" />
        </svg>
      </div>

      {/* Avatar 2: Blond Hair & Blue Glasses Roblox Character */}
      <div className="relative inline-block h-8 w-8 rounded-full ring-2 ring-white bg-gradient-to-b from-slate-100 to-slate-200 shadow-sm overflow-hidden shrink-0">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect width="100" height="100" fill="#EAECEF" />
          
          {/* Head */}
          <rect x="25" y="32" width="50" height="42" rx="6" fill="#FFDFC4" />

          {/* Roblox Big Smile */}
          <path d="M35 60 Q50 74 65 60 Z" fill="#FFFFFF" stroke="#1A202C" strokeWidth="2" />
          <path d="M35 60 Q50 74 65 60" stroke="#1A202C" strokeWidth="2" fill="none" />

          {/* Blue Glasses */}
          <rect x="26" y="44" width="21" height="15" rx="3" fill="#63B3ED" stroke="#2B6CB0" strokeWidth="2" opacity="0.9" />
          <rect x="53" y="44" width="21" height="15" rx="3" fill="#63B3ED" stroke="#2B6CB0" strokeWidth="2" opacity="0.9" />
          <line x1="47" y1="50" x2="53" y2="50" stroke="#2B6CB0" strokeWidth="2" />
          {/* Glass Glare */}
          <line x1="30" y1="46" x2="36" y2="56" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.7" />
          <line x1="57" y1="46" x2="63" y2="56" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.7" />

          {/* Spiky Blond Hair */}
          <path d="M20 36 L30 18 L40 28 L50 14 L60 28 L70 18 L80 36 Z" fill="#F6E05E" />
          <path d="M22 36 C35 30, 65 30, 78 36 Z" fill="#ECC94B" />

          {/* Black Shirt */}
          <polygon points="12,100 88,100 78,72 22,72" fill="#1A202C" />
        </svg>
      </div>

      {/* Avatar 3: Green Hair, Halo & Headphones Roblox Character */}
      <div className="relative inline-block h-8 w-8 rounded-full ring-2 ring-white bg-gradient-to-b from-slate-100 to-slate-200 shadow-sm overflow-hidden shrink-0">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect width="100" height="100" fill="#EAECEF" />

          {/* Halo Ring */}
          <ellipse cx="50" cy="14" rx="22" ry="5" fill="none" stroke="#E2E8F0" strokeWidth="3" />
          <ellipse cx="50" cy="14" rx="22" ry="5" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />

          {/* Head */}
          <rect x="25" y="32" width="50" height="42" rx="6" fill="#F6AD55" />

          {/* Ski Visor Goggles */}
          <rect x="26" y="42" width="48" height="16" rx="4" fill="#2B6CB0" stroke="#1A202C" strokeWidth="2" />
          <line x1="28" y1="44" x2="72" y2="44" stroke="#4299E1" strokeWidth="2" />
          <line x1="32" y1="47" x2="48" y2="54" stroke="#FFFFFF" strokeWidth="2" opacity="0.7" />

          {/* Spiky Green Hair */}
          <path d="M22 34 L32 20 L42 30 L50 16 L58 30 L68 20 L78 34 Z" fill="#38A169" />
          <path d="M24 34 C35 28, 65 28, 76 34 Z" fill="#48BB78" />

          {/* Headphones */}
          <rect x="18" y="40" width="8" height="18" rx="3" fill="#1A202C" />
          <rect x="74" y="40" width="8" height="18" rx="3" fill="#1A202C" />
          <path d="M22 40 C22 25, 78 25, 78 40" fill="none" stroke="#1A202C" strokeWidth="4" />

          {/* White Shirt with Graphic */}
          <polygon points="12,100 88,100 78,72 22,72" fill="#EDF2F7" />
          <rect x="42" y="78" width="16" height="16" fill="#38A169" />
        </svg>
      </div>

    </div>
  );
}
