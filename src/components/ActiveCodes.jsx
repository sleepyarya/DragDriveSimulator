import React, { useState } from 'react';
import { Copy, Check, Gift, Flame, Sparkles, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PROMO_CODES } from '../data/codes';

export default function ActiveCodes() {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);

    // Trigger celebratory confetti effect
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#22c55e', '#00f2fe', '#f59e0b']
    });

    setTimeout(() => {
      setCopiedCode(null);
    }, 3000);
  };

  return (
    <section id="codes" className="py-20 relative bg-drag-dark border-t border-drag-border/60">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-drag-lime/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-drag-lime/10 border border-drag-lime/30 text-drag-lime text-xs font-bold uppercase tracking-widest">
            <Gift className="w-4 h-4" /> FREE IN-GAME REWARDS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-racing text-white tracking-tight">
            ACTIVE <span className="text-drag-lime glow-text-lime">PROMO CODES</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Copy active redeem codes below to unlock free cash, knalpot exhausts, nitro refills, and exclusive wheel rims in Drag Drive Simulator.
          </p>
        </div>

        {/* Codes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROMO_CODES.map((item, idx) => {
            const isCopied = copiedCode === item.code;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl bg-drag-card border border-drag-border hover:border-drag-lime/50 p-6 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                
                {/* Header Tag & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-drag-dark border border-drag-border text-slate-400 font-mono">
                    {item.type}
                  </span>
                  {item.isHot && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded bg-drag-red/10 text-drag-red border border-drag-red/30">
                      <Flame className="w-3 h-3" /> HOT REWARD
                    </span>
                  )}
                </div>

                {/* Code Display Container */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-drag-dark border border-drag-border group-hover:border-drag-lime/40 transition-colors">
                    <span className="text-xl font-extrabold font-mono tracking-wider text-white select-all">
                      {item.code}
                    </span>

                    <button
                      onClick={() => handleCopy(item.code)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold font-racing transition-all duration-200 ${
                        isCopied
                          ? 'bg-drag-lime text-black shadow-neon-lime'
                          : 'bg-drag-surface hover:bg-drag-lime hover:text-black text-slate-200 border border-drag-border'
                      }`}
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                          <span>COPIED!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>COPY</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Reward Details */}
                  <div className="flex items-start gap-2 pt-1">
                    <Sparkles className="w-4 h-4 text-drag-lime shrink-0 mt-0.5" />
                    <p className="text-xs font-semibold text-slate-300">
                      {item.reward}
                    </p>
                  </div>
                </div>

                {/* Footer Expiry/Status Notice */}
                <div className="mt-5 pt-3 border-t border-drag-border/50 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-drag-lime" /> Verified Active
                  </span>
                  <span>{item.addedDate}</span>
                </div>

              </div>
            );
          })}
        </div>

        {/* How to Redeem Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-drag-card/60 border border-drag-border text-center max-w-2xl mx-auto space-y-2">
          <h4 className="text-sm font-bold text-white font-racing uppercase tracking-wider">
            HOW TO REDEEM CODES IN GAME
          </h4>
          <p className="text-xs text-slate-400">
            Open <strong className="text-white">Drag Drive Simulator</strong> on Roblox &rarr; Click the <strong className="text-drag-lime">Codes (Gift Box) Icon</strong> on the left side menu &rarr; Paste code & click <strong className="text-white">REDEEM</strong>.
          </p>
        </div>

      </div>
    </section>
  );
}
