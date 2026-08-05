import React from 'react';
import { Flame, Wrench, Compass, Sparkles, Zap, Gauge } from 'lucide-react';

export default function FeaturesGrid() {
  const features = [
    {
      icon: Flame,
      title: "Indonesian Drag & Street Culture",
      description: "Authentic Trondol style, Herex extended swingarms, custom 2-stroke screaming engines, and real-life Indonesian street drag racing physics.",
      accent: "#22c55e",
      badge: "AUTHENTIC STREET",
      gradient: "from-drag-lime/20 to-transparent"
    },
    {
      icon: Wrench,
      title: "Deep Engine & Stance Customization",
      description: "Modify piston bore-up kits, ECU tuning, custom drag rims (Takasago, Doktrin), suspension lowering kits, and knalpot exhaust notes.",
      accent: "#00f2fe",
      badge: "BORE-UP TUNING",
      gradient: "from-drag-cyan/20 to-transparent"
    },
    {
      icon: Compass,
      title: "Dynamic Open World & Drag Strips",
      description: "Cruise around Indonesian highways, city hangout spots, gas stations, or compete in official 201m & 500m drag strips with live tree lights.",
      accent: "#a855f7",
      badge: "500M DRAG STRIP",
      gradient: "from-drag-purple/20 to-transparent"
    },
    {
      icon: Sparkles,
      title: "Limited & Seasonal Event Vehicles",
      description: "Collect exclusive seasonal motorbikes, hyper bebeks, drag builds, and rare gamepass motorbikes updated every patch.",
      accent: "#ff2a5f",
      badge: "EXCLUSIVE DROPS",
      gradient: "from-drag-red/20 to-transparent"
    }
  ];

  return (
    <section id="features" className="py-20 relative bg-drag-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-drag-lime/10 border border-drag-lime/30 text-drag-lime text-xs font-bold uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5" /> GAMEPLAY FEATURES
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-racing tracking-tight text-white">
            BUILT FOR <span className="text-drag-lime">SPEED FREAKS</span> & TUNERS
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Every feature in Drag Drive Simulator is crafted by ADV Gamers Team to deliver the most realistic Indonesian drag racing simulator on Roblox.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl bg-drag-card p-6 border border-drag-border hover:border-drag-borderHover transition-all duration-300 transform hover:-translate-y-1 shadow-lg flex flex-col justify-between overflow-hidden"
              >
                {/* Top Subtle Hover Gradient Overlay */}
                <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />

                <div>
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center bg-drag-dark border border-drag-border shadow-inner"
                      style={{ color: feature.accent }}
                    >
                      <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                    </div>
                    <span 
                      className="text-[10px] font-bold px-2 py-0.5 rounded border uppercase font-mono"
                      style={{ color: feature.accent, borderColor: `${feature.accent}40`, backgroundColor: `${feature.accent}10` }}
                    >
                      {feature.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold font-racing text-white mb-2 group-hover:text-drag-lime transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Footer Accent Line */}
                <div className="mt-6 pt-4 border-t border-drag-border/40 flex items-center justify-between text-[11px] font-bold text-slate-500">
                  <span>ADV SIMULATOR</span>
                  <span style={{ color: feature.accent }}>FEATURE 0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
