import React from 'react';
import Swal from 'sweetalert2';
import Logo from './Logo';

export default function Footer() {
  const handleComingSoon = (e, featureName) => {
    e.preventDefault();
    Swal.fire({
      title: '🚀 Coming Soon!',
      text: `The ${featureName} feature is currently under development. Stay tuned for the latest updates on our Discord server!`,
      icon: 'info',
      confirmButtonText: 'OK!',
      confirmButtonColor: '#ff6b00',
      background: '#0f172a',
      color: '#f8fafc',
      customClass: {
        popup: 'rounded-3xl border border-amber-500/30 shadow-2xl font-sans',
        confirmButton: 'font-bold px-8 py-3 rounded-full font-avenir text-sm'
      }
    });
  };

  return (
    <footer className="bg-gradient-to-b from-white via-slate-50 to-indigo-50/30 text-slate-700 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid - matching Image 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-16">
          
          {/* Col 1: Logo matching Navbar */}
          <div className="lg:col-span-1">
            <Logo size="md" showSub={false} />
          </div>

          {/* Col 2: Community */}
          <div>
            <h4 className="font-avenir font-bold text-slate-900 text-base mb-4">
              Community
            </h4>
            <ul className="space-y-2.5 font-avenir text-sm text-slate-600">
              <li><a href="https://www.roblox.com/share/g/11378976" target="_blank" rel="noopener noreferrer" className="hover:text-drag-orange transition-colors">Roblox Group</a></li>
              <li><a href="#community" onClick={(e) => handleComingSoon(e, 'Community Standards')} className="hover:text-drag-orange transition-colors">Community Standards</a></li>
              <li><a href="#events" onClick={(e) => handleComingSoon(e, 'Events')} className="hover:text-drag-orange transition-colors">Events</a></li>
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div>
            <h4 className="font-avenir font-bold text-slate-900 text-base mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5 font-avenir text-sm text-slate-600">
              <li><a href="https://dragdrivesimulator.com/" className="hover:text-drag-orange transition-colors">Game Wiki</a></li>
              <li><a href="https://discord.com/invite/tdZmyXQmMR" className="hover:text-drag-orange transition-colors">Support Center</a></li>
              <li><a href="#faqs" className="hover:text-drag-orange transition-colors">FAQ</a></li>
              <li><a href="#legal" onClick={(e) => handleComingSoon(e, 'Legal')} className="hover:text-drag-orange transition-colors">Legal</a></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="font-avenir font-bold text-slate-900 text-base mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 font-avenir text-sm text-slate-600">
              <li><a href="mailto:advgamersofficial@gmail.com" className="hover:text-drag-orange transition-colors">Business Inquiries</a></li>
              <li><a href="https://discord.com/invite/tdZmyXQmMR" target="_blank" rel="noopener noreferrer" className="hover:text-drag-orange transition-colors">Report Issue</a></li>
              <li><a href="https://instagram.com" onClick={(e) => handleComingSoon(e, 'Instagram')} className="hover:text-drag-orange transition-colors">Instagram</a></li>
            </ul>
          </div>

          {/* Col 5: Stay updated & Join Discord Button */}
          <div>
            <h4 className="font-avenir font-bold text-slate-900 text-base mb-4">
              Stay updated!
            </h4>
            <p className="font-avenir text-sm text-slate-600 mb-5 leading-relaxed">
              Get the latest leaks, patch notes, and dev logs delivered straight to you via Discord Server.
            </p>

            <a
              href="https://discord.com/invite/tdZmyXQmMR"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-avenir font-semibold text-sm text-white bg-[#3b49df] hover:bg-[#2d3ab3] shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Join Discord
            </a>
          </div>

        </div>

        {/* Bottom Copyright line */}
        <div className="pt-8 border-t border-slate-200/80 text-center font-avenir text-xs text-slate-600">
          Copyright &copy; {new Date().getFullYear()} Drag Drive Simulator. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
