import React from 'react';

export default function NinjaDragSVG({ color = "#a855f7", className = "w-full h-full" }) {
  return (
    <svg 
      viewBox="0 0 400 240" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <defs>
        <linearGradient id="ninja-glow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="50%" stopColor="#00f2fe" />
          <stop offset="100%" stopColor="#22c55e" />
        </linearGradient>
        <radialGradient id="underglow-n" cx="50%" cy="80%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.7" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="200" cy="210" rx="160" ry="18" fill="url(#underglow-n)" />
      <line x1="30" y1="210" x2="370" y2="210" stroke="#30363D" strokeWidth="2" strokeDasharray="6 6" />

      {/* Rear Drag Slick */}
      <circle cx="75" cy="165" r="38" stroke="#484F58" strokeWidth="7" fill="#161B22" />
      <circle cx="75" cy="165" r="24" stroke={color} strokeWidth="2" strokeDasharray="8 2" />
      <circle cx="75" cy="165" r="7" fill="#F0F6FC" />

      {/* Front Racing Wheel */}
      <circle cx="325" cy="165" r="36" stroke="#484F58" strokeWidth="4" fill="#161B22" />
      <circle cx="325" cy="165" r="26" stroke="#00f2fe" strokeWidth="2" strokeDasharray="6 3" />
      <circle cx="325" cy="165" r="7" fill="#F0F6FC" />

      {/* Aerodynamic Full Drag Fairing Bodywork */}
      <path 
        d="M100 140 L160 110 L230 90 L290 70 L340 100 L310 160 L230 160 L180 145 Z" 
        fill="url(#ninja-glow)" 
        opacity="0.9" 
      />
      <path 
        d="M230 90 L290 70 L340 100" 
        stroke="#F0F6FC" 
        strokeWidth="3" 
      />

      {/* Windshield Accent */}
      <path d="M280 75 L310 65 L325 85 Z" fill="#00f2fe" opacity="0.6" />

      {/* Nitrous Oxide Bottle (NOS Tank) */}
      <rect x="150" y="125" width="30" height="12" rx="6" transform="rotate(-15 150 125)" fill="#00f2fe" stroke="#F0F6FC" strokeWidth="1" />
      <text x="153" y="123" fontSize="7" fill="#0B0E14" fontWeight="bold">NOS</text>

      {/* Titanium Drag Exhaust */}
      <path d="M210 165 L140 170 L60 155" stroke="url(#ninja-glow)" strokeWidth="7" strokeLinecap="round" />
      <polygon points="62,160 40,145 50,135 70,150" fill="#00f2fe" />

      {/* Handlebar & Brake Lever */}
      <line x1="290" y1="68" x2="310" y2="55" stroke="#F0F6FC" strokeWidth="3" strokeLinecap="round" />
      <line x1="310" y1="55" x2="325" y2="53" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
