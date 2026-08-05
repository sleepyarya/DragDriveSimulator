import React from 'react';
import logoImg from './rdid_logo.png';

export default function Logo({ size = "md", showSub = false }) {
  const isLarge = size === "lg";

  return (
    <div className="flex flex-col items-start select-none cursor-pointer group">
      <img
        src={logoImg}
        alt="Drag & Drive Simulator"
        className={`object-contain transition-transform group-hover:scale-105 duration-200 ${
          isLarge ? 'h-32 sm:h-40' : 'h-20 sm:h-20'
        }`}
      />
      {showSub && (
        <span className="text-[10px] font-avenir uppercase tracking-widest text-slate-500 font-bold pl-1 mt-0.5 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-drag-orange inline-block"></span>
          ADV GAMERS TEAM
        </span>
      )}
    </div>
  );
}
