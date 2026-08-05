import React from 'react';

export default function HerexSportSVG({ color = "#ff2a5f", className = "w-full h-full" }) {
  return (
    <svg 
      viewBox="0 0 400 240" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <defs>
        <linearGradient id="herex-glow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
        <radialGradient id="underglow-h" cx="50%" cy="80%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.6" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="200" cy="210" rx="150" ry="18" fill="url(#underglow-h)" />
      <line x1="30" y1="210" x2="370" y2="210" stroke="#30363D" strokeWidth="2" strokeDasharray="6 6" />

      {/* Extended Rear Swingarm Drag Wheel */}
      <circle cx="65" cy="165" r="38" stroke="#484F58" strokeWidth="6" fill="#161B22" />
      <circle cx="65" cy="165" r="26" stroke={color} strokeWidth="2" strokeDasharray="8 4" />
      <circle cx="65" cy="165" r="6" fill="#F0F6FC" />

      {/* Front Wheel (Stretched Front Fork) */}
      <circle cx="335" cy="165" r="35" stroke="#484F58" strokeWidth="4" fill="#161B22" />
      <circle cx="335" cy="165" r="24" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 2" />
      <circle cx="335" cy="165" r="6" fill="#F0F6FC" />

      {/* Stretched Swingarm Line */}
      <line x1="65" y1="165" x2="180" y2="165" stroke="#F0F6FC" strokeWidth="4" strokeLinecap="round" />
      <line x1="65" y1="165" x2="160" y2="135" stroke="#30363D" strokeWidth="4" />

      {/* High CC Cylinder Engine Block (Herex Style) */}
      <polygon points="170,175 225,175 220,135 175,135" fill="#21262D" stroke="#8B949E" strokeWidth="2" />
      <line x1="180" y1="145" x2="215" y2="145" stroke={color} strokeWidth="3" />
      <line x1="180" y1="155" x2="215" y2="155" stroke={color} strokeWidth="3" />
      <line x1="180" y1="165" x2="215" y2="165" stroke={color} strokeWidth="3" />

      {/* Classic Teardrop Gas Tank (Herex CB/GL) */}
      <path 
        d="M190 120 C200 95, 250 95, 270 115 L190 120 Z" 
        fill="url(#herex-glow)" 
      />
      <circle cx="230" cy="108" r="4" fill="#F0F6FC" />

      {/* Slim Drag Seat */}
      <path d="M120 125 C140 120, 185 120, 195 125" stroke="#F0F6FC" strokeWidth="6" strokeLinecap="round" />

      {/* Mega Cannon Drag Exhaust */}
      <path d="M210 160 L140 170 L50 168" stroke="url(#herex-glow)" strokeWidth="8" strokeLinecap="round" />
      <polygon points="48,174 25,165 35,152 55,160" fill="#f59e0b" />

      {/* High Clip-on Handlebars */}
      <line x1="265" y1="105" x2="295" y2="65" stroke="#F0F6FC" strokeWidth="4" strokeLinecap="round" />
      <line x1="295" y1="65" x2="315" y2="60" stroke={color} strokeWidth="4" strokeLinecap="round" />

      {/* Nitrous / Flame Particles SVG Effect */}
      <circle cx="20" cy="162" r="4" fill="#ff2a5f" opacity="0.8" />
      <circle cx="10" cy="160" r="2.5" fill="#f59e0b" opacity="0.6" />
    </svg>
  );
}
