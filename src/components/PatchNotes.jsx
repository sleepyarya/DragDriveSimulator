import React from 'react';
import { GitCommit, Calendar, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { PATCH_NOTES } from '../data/updates';

export default function PatchNotes() {
  return (
    <section id="updates" className="py-20 relative bg-drag-dark border-t border-drag-border/60">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-drag-purple/10 border border-drag-purple/30 text-drag-purple text-xs font-bold uppercase tracking-widest">
            <GitCommit className="w-4 h-4" /> DEVELOPMENT TIMELINE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-racing text-white tracking-tight">
            PATCH NOTES & <span className="text-drag-purple">UPDATES</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Stay up to date with new motorbikes, map expansions, engine tuning patches, and physics improvements.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="max-w-4xl mx-auto space-y-8">
          {PATCH_NOTES.map((patch, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl bg-drag-card border border-drag-border p-6 sm:p-8 shadow-xl hover:border-drag-purple/40 transition-colors"
            >
              
              {/* Top Banner & Tags */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-drag-border/60">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-extrabold font-racing text-white">
                    {patch.version}
                  </span>
                  <span 
                    className="text-[10px] font-bold px-2.5 py-1 rounded-md border uppercase font-mono"
                    style={{ color: patch.tagColor, borderColor: `${patch.tagColor}40`, backgroundColor: `${patch.tagColor}15` }}
                  >
                    {patch.tag}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{patch.date}</span>
                </div>
              </div>

              {/* Update Title */}
              <h3 className="text-xl font-bold font-racing text-white mb-4">
                {patch.title}
              </h3>

              {/* Highlights List */}
              <ul className="space-y-2.5">
                {patch.highlights.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-drag-purple shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
