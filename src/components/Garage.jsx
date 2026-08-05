import React, { useState } from 'react';
import { Search, Filter, Gauge, Zap, Flame, Shield, Info, ArrowUpRight } from 'lucide-react';
import { VEHICLES, VEHICLE_CATEGORIES } from '../data/vehicles';
import MatikTrondolSVG from './svg/MatikTrondolSVG';
import MXKingUnderboneSVG from './svg/MXKingUnderboneSVG';
import HerexSportSVG from './svg/HerexSportSVG';
import NinjaDragSVG from './svg/NinjaDragSVG';

export default function Garage({ onSelectVehicle }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter vehicles
  const filteredVehicles = VEHICLES.filter((v) => {
    const matchesCat = activeCategory === 'all' || v.category === activeCategory;
    const matchesSearch = v.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          v.type.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const renderSVGComponent = (svgType, color) => {
    switch (svgType) {
      case 'matik':
        return <MatikTrondolSVG color={color} className="w-full h-full" />;
      case 'bebek':
        return <MXKingUnderboneSVG color={color} className="w-full h-full" />;
      case 'herex':
        return <HerexSportSVG color={color} className="w-full h-full" />;
      case 'ninja':
        return <NinjaDragSVG color={color} className="w-full h-full" />;
      default:
        return <MatikTrondolSVG color={color} className="w-full h-full" />;
    }
  };

  return (
    <section id="garage" className="py-20 relative bg-drag-dark border-t border-drag-border/60">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-drag-cyan/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-drag-cyan/10 border border-drag-cyan/30 text-drag-cyan text-xs font-bold uppercase tracking-widest">
              <Gauge className="w-3.5 h-3.5" /> VEHICLE SHOWCASE & SPECS
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-racing text-white tracking-tight">
              ADV <span className="text-drag-cyan">GARAGE CATALOG</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-xl">
              Filter by vehicle class, inspect top speeds, torque stats, exhaust tuning, and rarity tags built for Drag Drive Simulator.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative min-w-[260px] sm:min-w-[320px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search vehicle name or spec..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-drag-card border border-drag-border text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-drag-cyan transition-colors"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {VEHICLE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold font-racing uppercase tracking-wider whitespace-nowrap transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-drag-cyan text-black shadow-neon-cyan'
                  : 'bg-drag-card border border-drag-border text-slate-400 hover:text-white hover:border-drag-borderHover'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Vehicle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVehicles.map((v) => (
            <div
              key={v.id}
              className="group relative rounded-2xl bg-drag-card border border-drag-border hover:border-drag-borderHover transition-all duration-300 shadow-lg flex flex-col justify-between overflow-hidden"
            >
              
              {/* Card Top Header & Rarity Badge */}
              <div className="p-5 pb-2 flex items-center justify-between z-10">
                <span 
                  className="text-[10px] font-bold px-2.5 py-1 rounded-full border uppercase tracking-wider font-mono"
                  style={{ color: v.rarityColor, borderColor: `${v.rarityColor}40`, backgroundColor: `${v.rarityColor}15` }}
                >
                  {v.rarity}
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase font-mono">
                  {v.type}
                </span>
              </div>

              {/* Vector Vehicle Art Display */}
              <div className="relative h-48 mx-4 my-2 rounded-xl bg-drag-dark/70 border border-drag-border/60 p-3 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-carbon-dots opacity-30" />
                {renderSVGComponent(v.svgType, v.accentColor)}
              </div>

              {/* Specs & Info */}
              <div className="p-5 pt-3 space-y-4">
                
                {/* Vehicle Name & Badge */}
                <div>
                  <h3 className="text-xl font-bold font-racing text-white group-hover:text-drag-cyan transition-colors">
                    {v.name}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                    {v.description}
                  </p>
                </div>

                {/* Meter Bars: Top Speed & Acceleration */}
                <div className="space-y-2 pt-1 border-t border-drag-border/60">
                  {/* Top Speed Bar */}
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-bold mb-1">
                      <span className="text-slate-400">TOP SPEED</span>
                      <span style={{ color: v.accentColor }}>{v.topSpeed} KM/H</span>
                    </div>
                    <div className="h-1.5 w-full bg-drag-dark rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-700" 
                        style={{ width: `${(v.topSpeed / 300) * 100}%`, backgroundColor: v.accentColor }} 
                      />
                    </div>
                  </div>

                  {/* Acceleration Bar */}
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-bold mb-1">
                      <span className="text-slate-400">ACCELERATION</span>
                      <span className="text-slate-200">{v.acceleration}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-drag-dark rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-drag-lime rounded-full transition-all duration-700" 
                        style={{ width: `${v.acceleration}%` }} 
                      />
                    </div>
                  </div>
                </div>

                {/* Price & Action Button */}
                <div className="pt-3 border-t border-drag-border/60 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-500 font-bold uppercase">Price / Unlock</span>
                    <span className="text-xs font-bold text-slate-200">{v.price}</span>
                  </div>

                  <button
                    onClick={() => onSelectVehicle(v)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-drag-surface hover:bg-drag-cyan hover:text-black text-xs font-bold font-racing text-slate-200 transition-all duration-200 border border-drag-border hover:border-drag-cyan"
                  >
                    <span>VIEW SPECS</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
