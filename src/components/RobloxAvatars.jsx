import React from 'react';

export default function RobloxAvatars() {
  return (
    <div className="flex -space-x-2.5 overflow-hidden items-center">
      {/* Avatar 1: Police Officer Roblox Avatar */}
      <img
        src="/avatars/avatar1.png"
        alt="Roblox Police Avatar"
        className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover shadow-sm bg-slate-100 shrink-0"
      />

      {/* Avatar 2: Blond Hair Glasses Roblox Avatar */}
      <img
        src="/avatars/avatar2.png"
        alt="Roblox Blond Avatar"
        className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover shadow-sm bg-slate-100 shrink-0"
      />

      {/* Avatar 3: Green Hair Halo Headphones Roblox Avatar */}
      <img
        src="/avatars/avatar3.png"
        alt="Roblox Green Hair Avatar"
        className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover shadow-sm bg-slate-100 shrink-0"
      />
    </div>
  );
}
