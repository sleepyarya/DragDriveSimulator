import React, { useState } from 'react';
import { Search, Gauge, ArrowUpRight } from 'lucide-react';
import { VEHICLES, VEHICLE_CATEGORIES } from '../data/vehicles';
import MatikTrondolSVG from './svg/MatikTrondolSVG';
import MXKingUnderboneSVG from './svg/MXKingUnderboneSVG';
import HerexSportSVG from './svg/HerexSportSVG';
import NinjaDragSVG from './svg/NinjaDragSVG';

export default function Products({ onSelectVehicle }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredVehicles = VEHICLES.filter((v) => {
    const matchesCat = activeCategory === 'all' || v.category === activeCategory;
    const matchesSearch = v.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          v.type.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const renderSVGComponent = (svgType) => {
    switch (svgType) {
      case 'matik':
        return <MatikTrondolSVG color="#ff6b00" className="w-full h-full" />;
      case 'bebek':
        return <MXKingUnderboneSVG color="#ff6b00" className="w-full h-full" />;
      case 'herex':
        return <HerexSportSVG color="#ea580c" className="w-full h-full" />;
      case 'ninja':
        return <NinjaDragSVG color="#ff6b00" className="w-full h-full" />;
      default:
        return <MatikTrondolSVG color="#ff6b00" className="w-full h-full" />;
    }
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-white via-orange-50/20 to-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title in Impact Font */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <h2 className="text-4xl sm:text-6xl font-impact tracking-tight text-slate-900 uppercase">
              DRAG & DRIVE <span className="text-drag-orange">PRODUCTS</span>
            </h2>
            <p className="text-slate-600 font-impact text-lg uppercase tracking-wide mt-1">
              EXPLORE MOTORBIKES, DRAG BUILDS, AND ENGINE KITS BY ADV GAMERS TEAM
            </p>
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px] sm:min-w-[320px]">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search bike name or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border-2 border-slate-200 text-slate-900 font-impact tracking-wide text-lg placeholder-slate-400 focus:outline-none focus:border-drag-orange transition-colors shadow-sm"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {VEHICLE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 rounded-xl font-impact text-lg uppercase tracking-wider whitespace-nowrap transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-drag-orange text-white shadow-orange-glow'
                  : 'bg-white border-2 border-slate-200 text-slate-600 hover:text-drag-orange hover:border-drag-orange'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Vehicles Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((v) => (
            <div
              key={v.id}
              className="group relative rounded-3xl bg-white border-2 border-slate-200/80 hover:border-drag-orange transition-all duration-300 shadow-md hover:shadow-xl flex flex-col justify-between overflow-hidden"
            >
              
              {/* Card Header & Badge */}
              <div className="p-5 pb-2 flex items-center justify-between z-10">
                <span className="text-xs font-impact uppercase px-3 py-1 rounded-full bg-orange-100 text-drag-orange border border-orange-300 tracking-wider">
                  {v.rarity}
                </span>
                <span className="text-xs font-impact text-slate-400 uppercase tracking-widest">
                  {v.type}
                </span>
              </div>

              {/* Vector SVG Motorbike Graphic */}
              <div className="relative h-48 mx-4 my-2 rounded-2xl bg-slate-900 border border-slate-800 p-4 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-carbon-dots opacity-40" />
                {renderSVGComponent(v.svgType)}
              </div>

              {/* Specs & Information */}
              <div className="p-6 pt-3 space-y-4">
                
                <div>
                  <h3 className="text-2xl font-impact tracking-wide text-slate-900 uppercase group-hover:text-drag-orange transition-colors">
                    {v.name}
                  </h3>
                  <p className="text-sm font-sans text-slate-500 line-clamp-2 mt-1">
                    {v.description}
                  </p>
                </div>

                {/* Top Speed & Acceleration Bars */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div>
                    <div className="flex items-center justify-between font-impact text-sm mb-1">
                      <span className="text-slate-500 uppercase">TOP SPEED</span>
                      <span className="text-drag-orange">{v.topSpeed} KM/H</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-drag-orange rounded-full transition-all duration-700" 
                        style={{ width: `${(v.topSpeed / 300) * 100}%` }} 
                      />
                    </div>
                  </div>
                </div>

                {/* Price & Action */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-impact text-slate-400 uppercase tracking-wider">PRICE / UNLOCK</div>
                    <div className="text-sm font-impact text-slate-900">{v.price}</div>
                  </div>

                  <button
                    onClick={() => onSelectVehicle(v)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 text-white font-impact text-base tracking-wider hover:bg-drag-orange transition-colors shadow-sm"
                  >
                    <span>DETAILS</span>
                    <ArrowUpRight className="w-4 h-4" />
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
