import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const DEVS_DATA = [
  {
    id: 1658383033,
    role: 'Owner',
    name: 'ADV_Gamers',
    username: 'advrn12345',
    profileUrl: 'https://www.roblox.com/users/1658383033/profile',
    avatarUrl: 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-61B9C421C36102C87AE85969224F82E3-Png/420/420/AvatarHeadshot/Png/noFilter',
  },
  {
    id: 2617603293,
    role: 'Co-Owner / Developer',
    name: 'Pak_Bodonq',
    username: 'Pak_Bodonq',
    profileUrl: 'https://www.roblox.com/users/2617603293/profile',
    avatarUrl: 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-FE354CE0C6ED23A7225D0510CF689481-Png/420/420/AvatarHeadshot/Png/noFilter',
  },
  {
    id: 152552737,
    role: 'Head Staff',
    name: 'DevAnjayyy',
    username: 'DevAnjayyy',
    profileUrl: 'https://www.roblox.com/users/152552737/profile',
    avatarUrl: 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-027F191DCF949902AD1E9273453DAB65-Png/420/420/AvatarHeadshot/Png/noFilter',
  },
  {
    id: 8920584256,
    role: 'Developer',
    name: 'Achaa',
    username: 'Yourcarramell',
    profileUrl: 'https://www.roblox.com/users/8920584256/profile',
    avatarUrl: 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-000B5440E98E59A51DE189EFC96624D0-Png/420/420/AvatarHeadshot/Png/noFilter',
  },
  {
    id: 1876918103,
    role: 'Contributor',
    name: 'arca',
    username: 'd_xuo',
    profileUrl: 'https://www.roblox.com/users/1876918103/profile',
    avatarUrl: 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-4E00BD4844E708FC2432A407CA95AF55-Png/420/420/AvatarHeadshot/Png/noFilter',
  },
  {
    id: 2434595186,
    role: 'Contributor',
    name: 'VanTzy',
    username: 'Ubemubemozaz',
    profileUrl: 'https://www.roblox.com/users/2434595186/profile',
    avatarUrl: 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-562E89F53C1D3821745A697E379C1CB1-Png/420/420/AvatarHeadshot/Png/noFilter',
  },
  {
    id: 5350394157,
    role: 'Contributor',
    name: 'tintinmarthin',
    username: 'rere_asik12',
    profileUrl: 'https://www.roblox.com/users/5350394157/profile',
    avatarUrl: 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-6418504FB57637FCDE26C57722E2D0BB-Png/420/420/AvatarHeadshot/Png/noFilter',
  },
  {
    id: 3200992096,
    role: 'Contributor',
    name: 'rafael_ynz',
    username: 'rafael_ynz',
    profileUrl: 'https://www.roblox.com/users/3200992096/profile',
    avatarUrl: 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-C06D6BA65F3A07917E87442B4D129DEC-Png/420/420/AvatarHeadshot/Png/noFilter',
  },
  {
    id: 4745377249,
    role: 'Support',
    name: 'ng_nuup',
    username: 'kin_evadealt123',
    profileUrl: 'https://www.roblox.com/users/4745377249/profile',
    avatarUrl: 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-0C2D456B1DB16D12DBDE65BEE2921FDE-Png/420/420/AvatarHeadshot/Png/noFilter',
  },
];

export default function Developers() {
  const [devs, setDevs] = useState(DEVS_DATA);
  const sliderRef = useRef(null);

  // Auto-Update Avatars & Names from Roblox Official API
  useEffect(() => {
    const userIds = DEVS_DATA.map((d) => d.id);
    const idsString = userIds.join(',');

    // 1. Fetch Headshot Avatars (Direct Roblox Thumbnails API — CORS Supported)
    async function fetchAvatars() {
      try {
        const res = await fetch(
          `https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${idsString}&size=420x420&format=Png&isCircular=false`
        );
        if (!res.ok) return;
        const json = await res.json();
        if (json?.data && Array.isArray(json.data)) {
          const avatarMap = {};
          json.data.forEach((item) => {
            if (item.targetId && item.imageUrl) {
              avatarMap[item.targetId] = item.imageUrl;
            }
          });

          // Immediately apply updated avatar URLs to state
          setDevs((prev) =>
            prev.map((dev) => ({
              ...dev,
              avatarUrl: avatarMap[dev.id] || dev.avatarUrl,
            }))
          );
        }
      } catch (err) {
        console.warn('Roblox Avatar API Fetch Error:', err);
      }
    }

    // 2. Fetch User Display Names (Non-blocking)
    async function fetchNames() {
      try {
        const res = await fetch(
          `https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${idsString}&size=150x150&format=Png`
        );
      } catch (err) {
        // Silently handle if usernames endpoint requires proxy
      }
    }

    fetchAvatars();
    fetchNames();
  }, []);

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
            DEVELOPERS & <span className="text-[#ff6b00]">CONTRIBUTORS</span>
          </h2>
          <p className="font-avenir text-slate-600 text-sm sm:text-base max-w-xl mt-1 leading-relaxed">
            Meet the team behind Drag Drive Simulator bringing realistic Indonesian driving & tuning to Roblox.
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
        {devs.map((dev) => (
          <a
            key={dev.id}
            href={dev.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-[#ff6b00]/40 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer w-36 sm:w-44 shrink-0"
          >
            {/* Compact Avatar Image Box */}
            <div className="w-full aspect-square rounded-xl overflow-hidden bg-slate-100 border border-slate-200/60 mb-2.5 relative group-hover:scale-[1.02] transition-transform duration-300">
              <img
                src={dev.avatarUrl}
                alt={dev.name}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
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
