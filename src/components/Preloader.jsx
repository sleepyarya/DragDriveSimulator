import React, { useState, useEffect } from 'react';
import logoImg from './rdid_logo.png';

export default function Preloader() {
  const [stage, setStage] = useState(0); // 0: Yellow 1, 1: Yellow 2, 2: Yellow 3, 3: GREEN GO!
  const [rpm, setRpm] = useState(1000);
  const [speed, setSpeed] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Lights sequence
    const t1 = setTimeout(() => setStage(1), 400);
    const t2 = setTimeout(() => setStage(2), 800);
    const t3 = setTimeout(() => setStage(3), 1200);

    // RPM & Speed revving animation
    const interval = setInterval(() => {
      setRpm((prev) => (prev < 9000 ? prev + Math.floor(Math.random() * 800 + 1200) : 9500));
      setSpeed((prev) => (prev < 299 ? prev + Math.floor(Math.random() * 35 + 25) : 320));
    }, 150);

    // Fade out and unmount
    const tFade = setTimeout(() => setFadeOut(true), 2100);
    const tHide = setTimeout(() => setHidden(true), 2600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(tFade);
      clearTimeout(tHide);
      clearInterval(interval);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-[#0b0f19] flex flex-col items-center justify-center transition-all duration-500 select-none ${
        fadeOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Carbon fiber texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

      {/* Speed lines effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25">
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[linear-gradient(45deg,transparent_45%,rgba(255,107,0,0.15)_50%,transparent_55%)] animate-pulse" />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-md w-full px-6 text-center">
        {/* Game Logo */}
        <div className="mb-6 transform hover:scale-105 transition-transform duration-300">
          <img src={logoImg} alt="Drag & Drive Logo" className="h-20 sm:h-24 object-contain drop-shadow-[0_0_25px_rgba(255,107,0,0.4)]" />
        </div>

        {/* Drag Racing Christmas Tree Starting Lights */}
        <div className="flex items-center gap-3 my-4 bg-slate-900/90 border border-slate-800 px-6 py-3 rounded-full shadow-2xl backdrop-blur-md">
          {/* Pre-Stage / Stage Yellow 1 */}
          <div className="flex flex-col items-center gap-1">
            <div
              className={`w-6 h-6 rounded-full transition-all duration-200 ${
                stage >= 0
                  ? 'bg-amber-400 shadow-[0_0_15px_#f59e0b] scale-110'
                  : 'bg-amber-950/60 border border-amber-900/40'
              }`}
            />
            <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-tighter">READY</span>
          </div>

          {/* Yellow 2 */}
          <div className="flex flex-col items-center gap-1">
            <div
              className={`w-6 h-6 rounded-full transition-all duration-200 ${
                stage >= 1
                  ? 'bg-amber-400 shadow-[0_0_15px_#f59e0b] scale-110'
                  : 'bg-amber-950/60 border border-amber-900/40'
              }`}
            />
            <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-tighter">SET</span>
          </div>

          {/* Yellow 3 */}
          <div className="flex flex-col items-center gap-1">
            <div
              className={`w-6 h-6 rounded-full transition-all duration-200 ${
                stage >= 2
                  ? 'bg-amber-400 shadow-[0_0_15px_#f59e0b] scale-110'
                  : 'bg-amber-950/60 border border-amber-900/40'
              }`}
            />
            <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-tighter">REV</span>
          </div>

          {/* GREEN LIGHT - GO! */}
          <div className="flex flex-col items-center gap-1 pl-2 border-l border-slate-800">
            <div
              className={`w-7 h-7 rounded-full transition-all duration-300 ${
                stage >= 3
                  ? 'bg-emerald-400 shadow-[0_0_25px_#10b981] scale-125 animate-ping-once'
                  : 'bg-emerald-950/60 border border-emerald-900/40'
              }`}
            />
            <span className={`text-[10px] font-impact font-bold tracking-wider ${stage >= 3 ? 'text-emerald-400' : 'text-slate-600'}`}>
              GO!
            </span>
          </div>
        </div>

        {/* Tachometer & Speed Display */}
        <div className="w-full mt-4 bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 backdrop-blur-sm">
          <div className="flex items-center justify-between text-xs font-mono mb-2 text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#ff6b00] animate-ping" />
              ENGINE STATUS
            </span>
            <span className="text-[#ff6b00] font-bold">{stage >= 3 ? 'FULL THROTTLE' : 'WARMING UP'}</span>
          </div>

          {/* RPM Gauge Bar */}
          <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden p-0.5 border border-slate-800">
            <div
              className="h-full rounded-full transition-all duration-150 bg-gradient-to-r from-amber-500 via-[#ff6b00] to-red-600 shadow-[0_0_12px_#ff6b00]"
              style={{ width: `${Math.min((rpm / 9500) * 100, 100)}%` }}
            />
          </div>

          {/* Digital Telemetry readout */}
          <div className="flex items-center justify-between mt-3 font-mono">
            <div className="text-left">
              <div className="text-[10px] text-slate-500">TACHOMETER</div>
              <div className="text-lg font-extrabold text-white tracking-wider">
                {rpm} <span className="text-xs font-normal text-slate-400">RPM</span>
              </div>
            </div>

            <div className="text-right">
              <div className="text-[10px] text-slate-500">SPEEDOMETER</div>
              <div className="text-lg font-extrabold text-[#ff6b00] tracking-wider">
                {speed} <span className="text-xs font-normal text-slate-400">KM/H</span>
              </div>
            </div>
          </div>
        </div>

        {/* Loading status subtitle */}
        <p className="mt-4 text-xs font-mono text-slate-400 tracking-widest uppercase animate-pulse">
          {stage < 3 ? 'Preparing Drag Track...' : 'Full Speed Ahead!'}
        </p>
      </div>
    </div>
  );
}
