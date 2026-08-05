import React from 'react';

export default function MatikTrondolSVG({ color = "#22c55e", className = "w-full h-full" }) {
  return (
    <svg 
      viewBox="0 0 400 240" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <defs>
        <linearGradient id="matik-glow" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity="0.8" />
          <stop offset="100%" stopColor="#00f2fe" stopOpacity="0.2" />
        </linearGradient>
        <radialGradient id="underglow-m" cx="50%" cy="80%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.6" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Underglow Effect */}
      <ellipse cx="200" cy="210" rx="140" ry="18" fill="url(#underglow-m)" />
      <line x1="40" y1="210" x2="360" y2="210" stroke="#30363D" strokeWidth="2" strokeDasharray="6 6" />

      {/* Rear Drag Wheel */}
      <circle cx="90" cy="170" r="34" stroke="#484F58" strokeWidth="6" fill="#161B22" />
      <circle cx="90" cy="170" r="22" stroke={color} strokeWidth="2" strokeDasharray="8 4" />
      <circle cx="90" cy="170" r="8" fill="#F0F6FC" />
      {/* Fat Drag Slick Tire Outer Rim */}
      <circle cx="90" cy="170" r="38" stroke="#30363D" strokeWidth="3" />

      {/* Front Slim Racing Wheel */}
      <circle cx="310" cy="170" r="34" stroke="#484F58" strokeWidth="4" fill="#161B22" />
      <circle cx="310" cy="170" r="26" stroke="#8B949E" strokeWidth="1" />
      <circle cx="310" cy="170" r="6" fill="#F0F6FC" />

      {/* Front Disc Brake (Rotors) */}
      <circle cx="310" cy="170" r="18" stroke={color} strokeWidth="2" strokeDasharray="4 2" />

      {/* Trondol Frame & Bodywork */}
      <path 
        d="M90 170 L140 140 L180 140 L230 110 L270 80 L310 170" 
        stroke="#30363D" 
        strokeWidth="6" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />

      {/* Custom Matik Engine Block & CVT Cover */}
      <rect x="100" y="150" width="75" height="30" rx="6" fill="#21262D" stroke="#484F58" strokeWidth="2" />
      <circle cx="120" cy="165" r="10" fill="#30363D" stroke={color} strokeWidth="1.5" />
      <circle cx="155" cy="165" r="8" fill="#30363D" />

      {/* Drag Racing Exhaust Pipe (Knalpot Racing Trondol) */}
      <path 
        d="M135 165 L80 160 L50 140" 
        stroke="url(#matik-glow)" 
        strokeWidth="7" 
        strokeLinecap="round" 
      />
      <polygon points="52,145 35,130 45,125 60,140" fill={color} opacity="0.9" />

      {/* Fuel Tank & Seat (Cutout Trondol Style) */}
      <path 
        d="M130 135 C150 110, 180 110, 210 120 L225 105 L260 85 L285 75" 
        stroke={color} 
        strokeWidth="4" 
        fill="none" 
      />
      <path 
        d="M140 130 C165 115, 205 115, 220 125 Z" 
        fill={color} 
        opacity="0.85" 
      />

      {/* Drag Handlebars & Throttle */}
      <path d="M260 85 L275 60 L295 55" stroke="#F0F6FC" strokeWidth="4" strokeLinecap="round" />
      <circle cx="295" cy="55" r="3" fill={color} />

      {/* Speed Line Accents */}
      <path d="M330 100 L370 100" stroke={color} strokeWidth="2" opacity="0.6" strokeDasharray="10 5" />
      <path d="M340 130 L380 130" stroke="#00f2fe" strokeWidth="2" opacity="0.4" strokeDasharray="8 4" />
    </svg>
  );
}
