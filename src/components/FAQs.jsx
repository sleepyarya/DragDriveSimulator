import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ_DATA = [
  {
    q: 'How do I join the Drag Drive Simulator Roblox server?',
    a: 'Getting into the game is fast and easy! Search for "Drag Drive Simulator" on the Roblox app, or simply press the "Play Game" button near the top of our website to jump straight into the action. Just make sure your Roblox client is ready and logged in.',
  },
  {
    q: 'Is Drag Drive Simulator free to play?',
    a: 'Absolutely! Drag Drive Simulator is 100% free for everyone. You can freely explore all maps, drive default vehicles, and participate in drag races without spending a dime. Optional gamepasses and extra in-game currency are available for players who wish to unlock exclusive customizations faster.',
  },
  {
    q: 'How can I report bugs or suggest features?',
    a: 'We love hearing from our community! If you encounter any game glitches or have cool ideas for future updates, head over to our Official Discord Community and drop your thoughts in the dedicated #reports or #suggestions channels. Our dev team reviews community feedback daily.',
  },
  {
    q: 'What devices are supported?',
    a: 'Drag Drive Simulator is optimized to run smoothly across PC, Mac, and mobile platforms (iOS & Android). For the best performance across our detailed maps and realistic environments, a stable internet connection and at least 4GB of RAM are recommended.',
  },
  {
    q: 'Can I use Drag Drive Simulator assets for my own projects?',
    a: 'All custom vehicle models, 3D map environments, sound effects, and Lua scripts are protected intellectual property of ADV Gamers Team. Any unauthorized copying, extracting, or reusing of our game assets in external projects is strictly prohibited.',
  },
  {
    q: 'Still need help?',
    a: (
      <>
        Have more questions? Join our active{' '}
        <a
          href="https://discord.com/invite/tdZmyXQmMR"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:underline font-medium"
        >
          Discord server
        </a>{' '}
        to chat with our staff team, or contact our support directly.
      </>
    ),
  },
];

export default function FAQs() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto flex flex-col justify-center">
      {/* Header Section (Matching CDID Studio) */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2 font-sans">
          FAQ's
        </h2>
        <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Looking for answers to your frequently asked questions? Check out our FAQ below.
        </p>
      </div>

      {/* Accordion List (Matching CDID Studio Layout) */}
      <div className="w-full divide-y divide-slate-200 border-t border-b border-slate-200">
        {FAQ_DATA.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={idx} className="w-full">
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full py-6 text-left flex items-center justify-between gap-4 cursor-pointer group transition-colors"
              >
                <span className="font-semibold text-base sm:text-lg text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {faq.q}
                </span>

                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-indigo-600' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="pb-6 text-slate-500 text-sm sm:text-base leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

