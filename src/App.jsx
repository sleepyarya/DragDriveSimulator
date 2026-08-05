import React, { useState } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import World from './components/World';
import Developers from './components/Developers';
import FAQs from './components/FAQs';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="text-slate-900 font-avenir">
      {/* Racing Preloader Animation */}
      <Preloader />

      {/* Sticky Header */}
      <Navbar />

      {/* Full-page scroll container — NO snap lock, scroll bebas */}
      <div
        id="snap-container"
        style={{
          height: '100vh',
          overflowY: 'scroll',
          scrollBehavior: 'smooth',
        }}
      >
        {/* Section: Hero — full 100vh, berakhir di #ffffff */}
        <div
          id="hero"
          style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Hero />
        </div>

        {/* Section: World — mulai dari #ffffff (sama dgn akhir Hero) → #fef4e8 */}
        <div
          id="world"
          style={{
            minHeight: '100vh',
            background: 'linear-gradient(to bottom, #ffffff 0%, #fef4e8 50%, #fef0e0 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <World />
        </div>

        {/* Section: Developers — mulai dari #fef0e0 → #fff */}
        <div
          id="developers"
          style={{
            minHeight: '100vh',
            background: 'linear-gradient(to bottom, #fef0e0 0%, #fff8f2 50%, #ffffff 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Developers />
        </div>

        {/* Section: FAQs — mulai dari #ffffff → #f8faff → #ffffff (nyambung mulus ke Footer) */}
        <div
          id="faqs"
          style={{
            minHeight: '100vh',
            background: 'linear-gradient(to bottom, #ffffff 0%, #f8faff 50%, #ffffff 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '60px',
            paddingBottom: '60px',
          }}
        >
          <FAQs />
        </div>

        {/* Footer */}
        <div id="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}
