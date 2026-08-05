import React, { useState } from 'react';
import { MapPin, ChevronRight, Sparkles } from 'lucide-react';

import surakartaImg from './Surakarta.png';
import pettaraniImg from './Pettarani.png';
import mandalikaImg from './Mandalika.png';
import sentulImg from './Sentul.png';
import bandungImg from './Bandung.png';

export default function World() {
  // Order: 1. Surakarta, 2. Pettarani, 3. Mandalika, 4. Sentul, 5. Bandung
  const locations = [
    {
      id: 'surakarta',
      name: 'Surakarta',
      subtitle: 'Solo Cultural Heritage & City Grid',
      category: 'Heritage City',
      image: surakartaImg,
      badge: 'Heritage & Street',
      badgeColor: '#10b981',
      description:
        'Enjoy the historic envoirment of Surakarta (Solo). The city’s wide streets, the warm, welcoming atmosphere typical of Central Java, and a favorite gathering spot for the drag racing community.',
      stats: [
        { label: 'Map Type', value: 'City Grid' },
        { label: 'Atmosphere', value: 'Javanese Culture' },
        { label: 'Popular Activity', value: 'Community Meetup' },
      ],
    },
    {
      id: 'pettarani',
      name: 'Pettarani',
      subtitle: 'Pettarani Flyover Makassar',
      category: 'Highway & Toll',
      image: pettaraniImg,
      badge: 'Highway & Toll',
      badgeColor: '#8b5cf6',
      description:
        'The Pettarani Makassar Flyover features a high-speed, barrier-free elevated highway perfect for testing vehicle top speed, late-night cruising, and high-speed drag action.',
      stats: [
        { label: 'Map Type', value: 'Elevated Tollway' },
        { label: 'Atmosphere', value: 'Night City Highway' },
        { label: 'Popular Activity', value: 'Top Speed Test' },
      ],
    },
    {
      id: 'mandalika',
      name: 'Mandalika',
      subtitle: 'International Circuit',
      category: 'Race Track',
      image: mandalikaImg,
      badge: 'Circuit Racing',
      badgeColor: '#0055BF',
      description:
        'The Mandalika International Circuit offers a world-class track racing experience with precision corners, long high-speed straights, and stunning coastal views of Lombok Island.',
      stats: [
        { label: 'Map Type', value: 'International Circuit' },
        { label: 'Atmosphere', value: 'Coastal Racetrack' },
        { label: 'Popular Activity', value: 'High Speed Laps' },
      ],
    },
    {
      id: 'sentul',
      name: 'Sentul',
      subtitle: 'Legendary Racing & Drag Strip',
      category: 'Drag & Circuit',
      image: sentulImg,
      badge: 'Legendary Drag',
      badgeColor: '#ef4444',
      description:
        'The legendary Sentul Circuit serves as Indonesia’s premiere arena for 201m & 402m drag racing. The ultimate competitive track to fine-tune bore-up engine setups and exhaust performance in Drag Drive Simulator.',
      stats: [
        { label: 'Map Type', value: 'Drag Strip & Circuit' },
        { label: 'Atmosphere', value: 'Competitive Racing' },
        { label: 'Popular Activity', value: 'Drag Battle 201m/402m' },
      ],
    },
    {
      id: 'bandung',
      name: 'Bandung',
      subtitle: 'Paris van Java & Mountain Tolls',
      category: 'Open World City',
      image: bandungImg,
      badge: 'Urban & Mountain',
      badgeColor: '#ff6b00',
      description:
        'Explore the charm of Bandung city surrounded by cool mountain air, iconic urban streetscapes, and winding highway tolls built for smooth cruising and performance tuning.',
      stats: [
        { label: 'Map Type', value: 'Urban / Scenic' },
        { label: 'Atmosphere', value: 'Cool Mountain Air' },
        { label: 'Popular Activity', value: 'City Cruising' },
      ],
    },
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  const activeLoc = locations[activeIdx];

  return (
    <section className="w-full pt-28 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-impact tracking-tight text-slate-900 uppercase">
          DISCOVER THE WORLD OF <span className="text-[#ff6b00]">Drag Drive Simulator</span>
        </h2>
        <p className="font-avenir text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mt-1 leading-relaxed">
          Explore Indonesia’s legendary racetracks, urban landscapes, and iconic highways, all rendered with realistic detail.
        </p>
      </div>

      {/* Main Showcase Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* Featured Big Showcase Card (7 cols) */}
        <div className="lg:col-span-7 relative group rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-900 text-white min-h-[350px] sm:min-h-[400px] flex flex-col justify-between transition-all duration-300">
          
          {/* Background Image with Zoom & Dark Gradient Overlay */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src={activeLoc.image}
              alt={activeLoc.name}
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-transparent" />
          </div>

          {/* Top Badge */}
          <div className="relative z-10 p-5 flex justify-between items-start">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-avenir font-bold uppercase tracking-wider text-white shadow-md backdrop-blur-md"
              style={{ backgroundColor: activeLoc.badgeColor }}
            >
              <Sparkles className="w-3 h-3" />
              {activeLoc.badge}
            </span>
            <span className="font-impact text-white/40 text-3xl">0{activeIdx + 1}</span>
          </div>

          {/* Bottom Info Details */}
          <div className="relative z-10 p-5 sm:p-6 space-y-3">
            <div>
              <div className="flex items-center gap-1.5 text-amber-400 font-avenir font-semibold text-xs sm:text-sm mb-0.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>{activeLoc.subtitle}</span>
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-impact tracking-wide text-white uppercase leading-none">
                {activeLoc.name}
              </h3>
            </div>

            <p className="font-avenir text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl">
              {activeLoc.description}
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-2.5 pt-2.5 border-t border-white/15">
              {activeLoc.stats.map((st, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md p-2 rounded-xl text-center">
                  <span className="block text-[10px] font-avenir text-slate-300 uppercase tracking-wider">{st.label}</span>
                  <span className="block text-xs font-avenir font-bold text-white mt-0.5 truncate">{st.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Thumbnail Selector Cards List (5 cols) */}
        <div className="lg:col-span-5 space-y-2.5">
          <h4 className="font-avenir font-bold text-[11px] uppercase tracking-widest text-slate-500 mb-1 px-1">
            Select Map Location ({locations.length})
          </h4>

          {locations.map((loc, idx) => {
            const isActive = idx === activeIdx;
            return (
              <div
                key={loc.id}
                onClick={() => setActiveIdx(idx)}
                className={`flex items-center gap-3 p-2.5 rounded-2xl cursor-pointer transition-all duration-200 border ${
                  isActive
                    ? 'bg-white border-[#ff6b00] shadow-md ring-2 ring-[#ff6b00]/20 translate-x-1'
                    : 'bg-white/70 border-slate-200/80 hover:bg-white hover:border-slate-300'
                }`}
              >
                {/* Thumbnail image */}
                <div className="relative w-18 h-12 sm:w-20 sm:h-14 rounded-xl overflow-hidden shrink-0 shadow-sm">
                  <img src={loc.image} alt={loc.name} className="w-full h-full object-cover" />
                  {isActive && (
                    <div className="absolute inset-0 bg-[#ff6b00]/20 backdrop-blur-[1px] flex items-center justify-center">
                      <ChevronRight className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>

                {/* Location text info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h5 className={`font-impact text-base sm:text-lg uppercase leading-tight truncate ${isActive ? 'text-[#ff6b00]' : 'text-slate-900'}`}>
                      {loc.name}
                    </h5>
                    <span
                      className="px-2 py-0.5 rounded text-[9px] font-avenir font-bold uppercase text-white shrink-0"
                      style={{ backgroundColor: loc.badgeColor }}
                    >
                      {loc.category}
                    </span>
                  </div>
                  <p className="font-avenir text-[11px] text-slate-500 truncate mt-0.5">
                    {loc.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
