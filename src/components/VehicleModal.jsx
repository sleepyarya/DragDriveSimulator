import React from 'react';
import { X, Gauge, Zap, Flame, Shield, CheckCircle, Volume2 } from 'lucide-react';
import SpeedGaugeSVG from './svg/SpeedGaugeSVG';
import MatikTrondolSVG from './svg/MatikTrondolSVG';
import MXKingUnderboneSVG from './svg/MXKingUnderboneSVG';
import HerexSportSVG from './svg/HerexSportSVG';
import NinjaDragSVG from './svg/NinjaDragSVG';

export default function VehicleModal({ vehicle, onClose }) {
  if (!vehicle) return null;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-3xl bg-drag-card border border-drag-border rounded-2xl shadow-2xl overflow-hidden text-slate-100 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-drag-dark/80 border border-drag-border text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="relative p-6 sm:p-8 bg-gradient-to-b from-drag-surface to-drag-card border-b border-drag-border">
          <div className="flex items-center gap-3 mb-2">
            <span 
              className="text-xs font-bold px-3 py-1 rounded-full border uppercase font-mono"
              style={{ color: vehicle.rarityColor, borderColor: `${vehicle.rarityColor}40`, backgroundColor: `${vehicle.rarityColor}15` }}
            >
              {vehicle.badge}
            </span>
            <span className="text-xs font-semibold text-slate-400 font-mono">
              {vehicle.type}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-racing text-white">
            {vehicle.name}
          </h2>
          <p className="text-slate-300 text-sm mt-1 max-w-xl">
            {vehicle.description}
          </p>
        </div>

        {/* Vector SVG Graphic Stage & Gauge */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          <div className="md:col-span-8 relative h-60 rounded-xl bg-drag-dark border border-drag-border p-4 flex items-center justify-center">
            <div className="absolute inset-0 bg-carbon-dots opacity-40" />
            {renderSVGComponent(vehicle.svgType, vehicle.accentColor)}
          </div>

          <div className="md:col-span-4 flex flex-col items-center justify-center p-4 rounded-xl bg-drag-dark border border-drag-border space-y-2">
            <SpeedGaugeSVG value={vehicle.topSpeed} label="TOP SPEED" unit="KM/H" color={vehicle.accentColor} className="w-28 h-28" />
            <div className="text-center pt-2">
              <div className="text-[10px] text-slate-400 font-bold uppercase">Price / Requirement</div>
              <div className="text-sm font-bold text-white mt-0.5">{vehicle.price}</div>
            </div>
          </div>

        </div>

        {/* Detailed Spec Grid */}
        <div className="p-6 pt-0 space-y-6">
          <h3 className="text-lg font-bold font-racing text-white flex items-center gap-2 border-b border-drag-border pb-2">
            <Zap className="w-4 h-4 text-drag-lime" /> SPECIFICATIONS & ENGINE DETAILS
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-drag-dark/70 border border-drag-border/70 space-y-1">
              <span className="text-xs font-bold text-slate-400 uppercase">Engine Configuration</span>
              <p className="text-sm font-semibold text-white">{vehicle.engine}</p>
            </div>
            <div className="p-4 rounded-xl bg-drag-dark/70 border border-drag-border/70 space-y-1">
              <span className="text-xs font-bold text-slate-400 uppercase">Exhaust System</span>
              <p className="text-sm font-semibold text-drag-lime flex items-center gap-1.5">
                <Volume2 className="w-4 h-4" /> {vehicle.exhaust}
              </p>
            </div>
          </div>

          {/* Performance Sliders */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            <div className="bg-drag-dark p-3 rounded-lg border border-drag-border text-center">
              <span className="text-[10px] text-slate-400 font-bold uppercase">Acceleration</span>
              <div className="text-lg font-bold font-racing text-drag-lime">{vehicle.acceleration}%</div>
            </div>
            <div className="bg-drag-dark p-3 rounded-lg border border-drag-border text-center">
              <span className="text-[10px] text-slate-400 font-bold uppercase">Handling</span>
              <div className="text-lg font-bold font-racing text-drag-cyan">{vehicle.handling}%</div>
            </div>
            <div className="bg-drag-dark p-3 rounded-lg border border-drag-border text-center">
              <span className="text-[10px] text-slate-400 font-bold uppercase">Nitro Boost</span>
              <div className="text-lg font-bold font-racing text-drag-red">{vehicle.nitro}%</div>
            </div>
            <div className="bg-drag-dark p-3 rounded-lg border border-drag-border text-center">
              <span className="text-[10px] text-slate-400 font-bold uppercase">Dyno Grade</span>
              <div className="text-lg font-bold font-racing text-drag-gold">STAGE 3</div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
