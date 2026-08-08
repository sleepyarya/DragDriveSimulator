import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('hero');

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'World', id: 'world' },
    { name: 'Developers', id: 'developers' },
    { name: "FAQ's", id: 'faqs' },
  ];

  useEffect(() => {
    const container = document.getElementById('snap-container');
    if (!container) return;

    const handleScroll = () => {
      setScrolled(container.scrollTop > 20);

      // Detect which section is currently in view
      const sectionIds = navLinks.map(l => l.id);
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop;
        const height = el.offsetHeight;
        const scrollTop = container.scrollTop;
        if (scrollTop >= top - height / 2 && scrollTop < top + height / 2) {
          setActiveId(id);
          break;
        }
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to a section inside snap-container smoothly
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const container = document.getElementById('snap-container');
    const target = document.getElementById(id);
    if (container && target) {
      container.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
    }
    setActiveId(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      style={scrolled ? { backgroundColor: '#4FC3F7' } : {}}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md py-1 shadow-md'
          : 'bg-transparent py-1'
      }`}
    >
      <style>{`
        .nav-link {
          position: relative;
          display: inline-block;
          font-size: 0.95rem;
          font-family: 'Avenir Next', 'Avenir', 'Nunito', 'Segoe UI', sans-serif;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: ${scrolled ? '#0f2744' : '#1e293b'};
          text-decoration: none;
          transition: color 0.2s, transform 0.2s;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -3px;
          width: 100%;
          height: 2px;
          background: #ff6b00;
          border-radius: 2px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-link:hover {
          color: #ff6b00;
          transform: translateY(-2px);
        }
        .nav-link:hover::after {
          transform: scaleX(1);
        }
        .nav-link.active {
          color: #ff6b00;
          font-weight: 700;
        }
        .nav-link.active::after {
          transform: scaleX(1);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex items-center justify-between w-full">

        {/* Logo (Far Left) */}
        <a href="#hero" onClick={(e) => scrollToSection(e, 'hero')} className="flex items-center z-10 shrink-0">
          <Logo size="md" showSub={false} />
        </a>

        {/* Desktop Navigation (Dead Center) */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 md:absolute md:left-1/2 md:-translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className={`nav-link${activeId === link.id ? ' active' : ''}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Buttons (Far Right) */}
        <div className="hidden sm:flex items-center gap-3 z-10 shrink-0">
          {/* Contact Us — opens email client */}
          <a
            href="mailto:advgamersofficial@gmail.com?subject=Contact%20ADV%20Gamers%20Team"
            className="inline-flex items-center justify-center gap-2 px-5 py-2 sm:px-6 sm:py-2.5 rounded-full font-avenir font-bold text-sm sm:text-base tracking-wider text-white transition-all duration-200 transform hover:-translate-y-0.5 hover:brightness-110"
            style={{ background: '#1B3FA6', boxShadow: '0 4px 14px rgba(27,63,166,0.35)' }}
          >
            <span>Contact Us</span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-drag-orange shrink-0"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-4 pt-4 pb-6 space-y-3 mt-2 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className={`block px-4 py-2.5 text-xl font-impact tracking-wide rounded-lg transition-colors ${
                activeId === link.id
                  ? 'text-slate-900 border-l-4 border-black pl-3'
                  : 'text-slate-700 hover:text-drag-orange hover:bg-orange-50'
              }`}
            >
              {link.name}
            </a>
          ))}

        </div>
      )}
    </header>
  );
}
