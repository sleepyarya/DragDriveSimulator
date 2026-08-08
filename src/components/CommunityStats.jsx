import React from 'react';
import { Users, Play, MessageSquare, ThumbsUp, Star, ExternalLink, ShieldCheck } from 'lucide-react';
import { useRobloxVisits } from '../hooks/useRobloxVisits';

export default function CommunityStats() {
  const { visitsText } = useRobloxVisits();

  const stats = [
    { label: "Active Simulator Drivers", value: "15,400+", icon: Users, color: "#22c55e" },
    { label: "Total Roblox Visits", value: visitsText, icon: Play, color: "#00f2fe" },
    { label: "Community Favorite Rating", value: "94.8%", icon: ThumbsUp, color: "#f59e0b" },
    { label: "Discord Server Members", value: "28,500+", icon: MessageSquare, color: "#a855f7" },
  ];

  return (
    <section id="community" className="py-20 relative bg-drag-dark border-t border-drag-border/60">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-drag-card border border-drag-border text-center space-y-2 hover:border-drag-borderHover transition-colors shadow-lg"
              >
                <div 
                  className="w-10 h-10 mx-auto rounded-xl flex items-center justify-center bg-drag-dark border border-drag-border"
                  style={{ color: item.color }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-3xl font-extrabold font-racing text-white">
                  {item.value}
                </div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Discord / Roblox Group Banner */}
        <div className="relative rounded-3xl bg-gradient-to-r from-drag-card via-drag-surface to-drag-card border border-drag-border p-8 sm:p-12 overflow-hidden shadow-2xl">
          
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-drag-lime/10 blur-[90px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-drag-lime/10 text-drag-lime border border-drag-lime/30 text-xs font-bold font-mono">
                <ShieldCheck className="w-3.5 h-3.5" /> OFFICIAL ADV GAMERS COMMUNITY
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold font-racing text-white leading-tight">
                JOIN OVER <span className="text-drag-lime">28,000+ SPEED ENTHUSIASTS</span> ON DISCORD
              </h3>

              <p className="text-slate-300 text-sm max-w-xl">
                Get early access to patch previews, vehicle sneaks, code giveaways, drag racing tournaments, and hang out with the developers from ADV Gamers Team.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href="https://discord.gg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-racing font-bold text-sm text-white bg-[#5865F2] hover:bg-[#4752C4] shadow-lg transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4" />
                <span>JOIN DISCORD SERVER</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <a
                href="https://www.roblox.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-racing font-bold text-sm text-black bg-drag-lime hover:bg-emerald-400 shadow-neon-lime transition-all duration-200"
              >
                <Play className="w-4 h-4 fill-black" />
                <span>JOIN ROBLOX GROUP</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
