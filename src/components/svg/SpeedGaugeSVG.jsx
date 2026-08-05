import React from 'react';

export default function SpeedGaugeSVG({ value = 85, label = "TOP SPEED", unit = "KM/H", color = "#22c55e", className = "w-32 h-32" }) {
  // Percentage to SVG strokeDashoffset calculation
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * (circumference * 0.75);

  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-225 overflow-visible">
        {/* Background Track Circle */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#21262D"
          strokeWidth="8"
          fill="transparent"
          strokeDasharray={`${circumference * 0.75} ${circumference * 0.25}`}
          strokeLinecap="round"
        />
        {/* Animated Progress Gauge */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke={color}
          strokeWidth="8"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      {/* Inner Label Container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-xl font-bold font-racing tracking-tight text-white glow-text-lime" style={{ color }}>
          {value}
        </span>
        <span className="text-[9px] uppercase font-semibold text-slate-400 tracking-wider mt-[-2px]">
          {unit}
        </span>
        <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mt-1">
          {label}
        </span>
      </div>
    </div>
  );
}
