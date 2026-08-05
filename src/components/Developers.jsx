import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

// Roblox Thumbnails API via Vite proxy (avoids CORS in dev) or direct URL at prod build
// In production you'd need a real backend proxy or use the headshot-thumbnail img trick.
const ROBLOX_HEADSHOT_PROXY = (userIds) =>
  `/api/roblox/thumbnails/v1/users/avatar-headshot?userIds=${userIds.join(',')}&size=420x420&format=Png&isCircular=false`;

// Fallback: Roblox direct headshot image URL (works as <img> src, no CORS for img tags)
const robloxFallbackSrc = (userId) =>
  `https://www.roblox.com/headshot-thumbnail/image?userId=${userId}&width=420&height=420&format=png`;

// Refresh interval: every 1 hour
const REFRESH_INTERVAL_MS = 60 * 60 * 1000;

const DEVS_DATA = [
  {
    id: 1658383033,
    role: 'Owner',
    name: 'ADV_Gamers',
    profileUrl: 'https://www.roblox.com/users/1658383033/profile',
  },
  {
    id: 2617603293,
    role: 'Co-Owner / Developer',
    name: 'Pak_Bodonq',
    profileUrl: 'https://www.roblox.com/users/2617603293/profile',
  },
  {
    id: 152552737,
    role: 'Head Staff',
    name: 'DevAnjayyy',
    profileUrl: 'https://www.roblox.com/users/152552737/profile',
  },
  {
    id: 8920584256,
    role: 'Developer',
    name: 'Achaa',
    profileUrl: 'https://www.roblox.com/users/8920584256/profile',
  },
  {
    id: 1876918103,
    role: 'Contributor',
    name: 'arca',
    profileUrl: 'https://www.roblox.com/users/1876918103/profile',
  },
  {
    id: 2434595186,
    role: 'Contributor',
    name: 'VanTzy',
    profileUrl: 'https://www.roblox.com/users/2434595186/profile',
  },
  {
    id: 5350394157,
    role: 'Contributor',
    name: 'tintinmarthin',
    profileUrl: 'https://www.roblox.com/users/5350394157/profile',
  },
  {
    id: 3200992096,
    role: 'Contributor',
    name: 'rafael_ynz',
    profileUrl: 'https://www.roblox.com/users/3200992096/profile',
  },
  {
    id: 4745377249,
    role: 'Support',
    name: 'ng_nuup',
    profileUrl: 'https://www.roblox.com/users/4745377249/profile',
  },
];

export default function Developers() {
  const sliderRef = useRef(null);
  const [avatarUrls, setAvatarUrls] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchAvatars = useCallback(async () => {
    try {
      const ids = DEVS_DATA.map((dev) => dev.id);
      const response = await fetch(ROBLOX_HEADSHOT_PROXY(ids));
      if (!response.ok) throw new Error('Roblox API responded with ' + response.status);

      const data = await response.json();
      const urls = {};
      data.data?.forEach((item) => {
        if (item.targetId && item.imageUrl) {
          urls[item.targetId] = item.imageUrl;
        }
      });

      if (Object.keys(urls).length > 0) {
        setAvatarUrls(urls);
      }
    } catch (error) {
      console.warn('Roblox avatar proxy fetch failed, using fallback img src:', error);
      setAvatarUrls({});
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAvatars();
    const intervalId = setInterval(() => fetchAvatars(), REFRESH_INTERVAL_MS);
    return () => clearInterval(intervalId);
  }, [fetchAvatars]);

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-avenir font-extrabold tracking-tight text-slate-900 uppercase">
            DEVELOPERS &amp; <span className="text-[#ff6b00]">CONTRIBUTORS</span>
          </h2>
          <p className="font-avenir text-slate-600 text-sm sm:text-base max-w-xl mt-1 leading-relaxed">
            Meet the team behind Drag Drive Simulator bringing realistic Indonesian driving &amp; tuning to Roblox.
          </p>
        </div>

        {/* Slider Navigation Arrows */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => handleScroll('left')}
            className="p-3 rounded-full bg-white border border-slate-200 shadow-sm text-slate-700 hover:text-[#ff6b00] hover:border-[#ff6b00] transition-colors"
            aria-label="Previous Developers"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleScroll('right')}
            className="p-3 rounded-full bg-white border border-slate-200 shadow-sm text-slate-700 hover:text-[#ff6b00] hover:border-[#ff6b00] transition-colors"
            aria-label="Next Developers"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

        {/* Horizontal Slider Carousel */}
      <div
        ref={sliderRef}
        className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth py-3 px-1 no-scrollbar select-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {DEVS_DATA.map((dev) => (
          <a
            key={dev.id}
            href={dev.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-[#ff6b00]/40 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer w-36 sm:w-44 shrink-0"
          >
            {/* Compact Avatar Image Box */}
            <div className="w-full aspect-square rounded-xl overflow-hidden bg-slate-100 border border-slate-200/60 mb-2.5 relative group-hover:scale-[1.02] transition-transform duration-300">
              {loading ? (
                // Skeleton loader
                <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-100 animate-pulse" />
              ) : (
                <img
                  src={avatarUrls[dev.id] || robloxFallbackSrc(dev.id)}
                  alt={dev.name}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  onError={(e) => {
                    // Try fallback direct Roblox src first, then letter-avatar
                    if (!e.currentTarget.dataset.fallback1) {
                      e.currentTarget.dataset.fallback1 = '1';
                      e.currentTarget.src = robloxFallbackSrc(dev.id);
                    } else {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(dev.name)}&size=420&background=ff6b00&color=fff&bold=true`;
                    }
                  }}
                />
              )}
              <div className="absolute top-1.5 right-1.5 p-1 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xs">
                <ExternalLink className="w-3 h-3" />
              </div>
            </div>

            {/* Dev Display Name */}
            <h3 className="font-avenir font-bold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-[#ff6b00] transition-colors truncate w-full px-1">
              {dev.name}
            </h3>

            {/* Role / Title */}
            <span className="font-avenir text-slate-500 font-medium text-xs mt-0.5 truncate w-full">
              {dev.role}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
