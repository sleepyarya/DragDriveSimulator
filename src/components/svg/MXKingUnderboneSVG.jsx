import React from 'react';

export default function MXKingUnderboneSVG({ color = "#00f2fe", className = "w-full h-full" }) {
  return (
    <svg 
      viewBox="0 0 400 240" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <defs>
        <linearGradient id="bebek-glow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#22c55e" />
        </linearGradient>
        <radialGradient id="underglow-b" cx="50%" cy="80%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.5" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="200" cy="210" rx="140" ry="18" fill="url(#underglow-b)" />
      <line x1="40" y1="210" x2="360" y2="210" stroke="#30363D" strokeWidth="2" strokeDasharray="6 6" />

      {/* Rear Wheel & Sprocket */}
      <circle cx="85" cy="165" r="36" stroke="#484F58" strokeWidth="5" fill="#161B22" />
      <circle cx="85" cy="165" r="24" stroke={color} strokeWidth="2" strokeDasharray="6 3" />
      <circle cx="85" cy="165" r="14" stroke="#ff2a5f" strokeWidth="1.5" strokeDasharray="4 2" />
      <circle cx="85" cy="165" r="6" fill="#F0F6FC" />

      {/* Front Wheel */}
      <circle cx="315" cy="165" r="36" stroke="#484F58" strokeWidth="4" fill="#161B22" />
      <circle cx="315" cy="165" r="26" stroke="#8B949E" strokeWidth="1" />
      <circle cx="315" cy="165" r="6" fill="#F0F6FC" />
      <circle cx="315" cy="165" r="18" stroke={color} strokeWidth="2" strokeDasharray="4 2" />

      {/* Chain & Swingarm */}
      <line x1="85" y1="165" x2="170" y2="165" stroke="#F0F6FC" strokeWidth="3" opacity="0.8" />
      <path d="M85 165 L160 145 L200 160" stroke="#30363D" strokeWidth="6" />

      {/* Engine Cylinder & DOHC Head */}
      <rect x="165" y="145" width="45" height="35" rx="4" fill="#21262D" stroke="#484F58" strokeWidth="2" />
      <line x1="170" y1="152" x2="200" y2="152" stroke={color} strokeWidth="2" />
      <line x1="170" y1="160" x2="200" y2="160" stroke={color} strokeWidth="2" />

      {/* Underbone Body Cowling */}
      <path 
        d="M110 135 L160 120 L210 100 L250 85 L280 70 L300 100 L270 140 L210 140 Z" 
        fill="url(#bebek-glow)" 
        opacity="0.85" 
      />
      <path 
        d="M110 135 L160 120 L210 100 L250 85 L280 70" 
        stroke="#F0F6FC" 
        strokeWidth="2" 
      />

      {/* Seat & Drag Rail */}
      <path d="M110 135 C130 125, 170 125, 190 130" stroke="#161B22" strokeWidth="8" strokeLinecap="round" />

      {/* Upswept Racing Exhaust */}
      <path d="M185 170 L140 175 L80 150 L50 130" stroke="url(#bebek-glow)" strokeWidth="6" strokeLinecap="round" />
      <polygon points="50,135 30,120 40,110 58,125" fill="#ff2a5f" />

      {/* Low Handlebar */}
      <path d="M265 75 L285 55 L305 52" stroke="#F0F6FC" strokeWidth="4" strokeLinecap="round" />
      <circle cx="305" cy="52" r="3" fill="#ff2a5f" />
    </svg>
  );
}
