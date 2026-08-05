import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';
import RobloxAvatars from './RobloxAvatars';

export default function Hero() {
  const [visitsText, setVisitsText] = useState('479M+');

  // Live Auto-Update from Roblox API
  useEffect(() => {
    async function fetchLiveVisits() {
      try {
        const placeId = '131378148336503';
        const universeRes = await fetch(`https://apis.roblox.com/universes/v1/places/${placeId}/universe`);
        if (!universeRes.ok) return;
        const universeData = await universeRes.json();

        if (universeData && universeData.universeId) {
          const gameRes = await fetch(`https://games.roblox.com/v1/games?universeIds=${universeData.universeId}`);
          if (!gameRes.ok) return;
          const gameData = await gameRes.json();

          if (gameData?.data?.[0]?.visits) {
            const rawVisits = gameData.data[0].visits;
            const formatted = rawVisits >= 1000000 
              ? `${(rawVisits / 1000000).toFixed(1)}M+` 
              : rawVisits.toLocaleString();
            setVisitsText(formatted);
          }
        }
      } catch (err) {
        console.log('Roblox API Live Fetch fallback active');
      }
    }

    fetchLiveVisits();
  }, []);

  return (
    <section
      id="hero-content"
      className="relative overflow-hidden bg-gradient-to-b from-[#fffbf5] via-[#fef4e8] to-white pt-20 pb-8"
      style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '100%' }}
    >      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-200/25 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Trusted by [LIVE VISITS] Players Badge with exact user Roblox avatar images */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-slate-200/90 shadow-sm mb-8 transform hover:scale-105 transition-transform cursor-pointer">
          <RobloxAvatars />
          <span className="font-sans font-medium text-slate-700 text-sm sm:text-base">
            Visited by <strong className="text-slate-900 font-bold">{visitsText} players</strong>
          </span>
        </div>

        {/* Main Headline - DRIVING SIMULATOR in Orange */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-impact tracking-tight text-slate-900 leading-tight uppercase mb-6">
          #1 INDONESIAN <span style={{ color: '#ff6b00' }} className="font-bold">DRIVING SIMULATOR</span> <span style={{ color: '#0055BF' }}>ON ROBLOX</span>
        </h1>

        {/* Subheadline - ADV GAMERS TEAM in Orange */}
        <p className="text-slate-600 font-impact text-base sm:text-xl max-w-2xl mx-auto leading-relaxed tracking-wide mb-10 uppercase">
          EXPERIENCE AUTHENTIC INDONESIAN DRAG RACING, BORE-UP TUNING, HEREX EXHAUSTS, AND OPEN-WORLD CRUISING DEVELOPED BY <span style={{ color: '#ff6b00' }} className="font-bold">ADV GAMERS TEAM</span>.
        </p>

        {/* Play Now on Roblox CTA — pill style seperti Contact Us */}
        <div className="flex items-center justify-center max-w-md mx-auto">
          <a
            href="https://www.roblox.com/games/131378148336503/Drag-Drive-Simulator"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-avenir font-bold text-lg tracking-wider text-white transition-all duration-200 transform hover:-translate-y-0.5 hover:brightness-110"
            style={{ background: '#ff6b00', boxShadow: '0 4px 14px rgba(255,107,0,0.4)' }}
          >
            <Play className="w-5 h-5 fill-white" />
            <span>Play Drag Drive Simulator</span>
          </a>
        </div>

      </div>
    </section>
  );
}
