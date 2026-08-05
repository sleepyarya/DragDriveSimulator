import React, { useState } from 'react';
import { Copy, Check, Gift, Sparkles, BookOpen } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PROMO_CODES } from '../data/codes';

export default function DocsCodes() {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#ff6b00', '#ea580c', '#f59e0b']
    });

    setTimeout(() => setCopiedCode(null), 3000);
  };

  return (
    <section id="docs" className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-drag-orange font-impact text-sm uppercase tracking-widest mb-3">
            <BookOpen className="w-4 h-4" /> DOCS & PROMO CODES
          </div>
          <h2 className="text-4xl sm:text-6xl font-impact tracking-tight text-slate-900 uppercase">
            GAME DOCS & <span className="text-drag-orange">REDEEM CODES</span>
          </h2>
          <p className="text-slate-600 font-impact text-lg uppercase tracking-wide mt-2">
            COPY ACTIVE CODES FOR FREE CASH, EXHAUSTS, AND NITRO BOOSTS
          </p>
        </div>

        {/* Promo Codes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {PROMO_CODES.map((item, idx) => {
            const isCopied = copiedCode === item.code;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-slate-50 border-2 border-slate-200/80 hover:border-drag-orange p-6 transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-impact px-3 py-1 rounded-full bg-orange-100 text-drag-orange uppercase tracking-wider">
                      {item.type}
                    </span>
                    <span className="text-xs font-impact text-slate-400 uppercase">
                      {item.addedDate}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-2xl bg-white border-2 border-slate-200 mb-4 shadow-inner">
                    <span className="text-2xl font-impact tracking-wider text-slate-900 select-all">
                      {item.code}
                    </span>

                    <button
                      onClick={() => handleCopy(item.code)}
                      className={`px-4 py-2 rounded-xl font-impact text-sm tracking-wider uppercase transition-all duration-200 flex items-center gap-1.5 ${
                        isCopied
                          ? 'bg-emerald-600 text-white shadow-md'
                          : 'bg-drag-orange text-white hover:bg-drag-orangeHover shadow-orange-glow'
                      }`}
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>COPIED</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>COPY</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-drag-orange shrink-0 mt-0.5" />
                    <p className="font-sans text-sm font-semibold text-slate-700">
                      {item.reward}
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200 text-[11px] font-impact text-slate-400 uppercase">
                  STATUS: VERIFIED ACTIVE
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
