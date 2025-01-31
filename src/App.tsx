import React, { useState } from 'react';
import { Sparkles, Shuffle } from 'lucide-react';
import "./fonts/RelativeFaux.ttf"
import Hero from './components/Hero';
import Generate from './components/Generate';
import Advert from './components/Advert';
import guestCursor from './guest.png';

function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-[#F1F0EE] text-black relative overflow-hidden" style={{ cursor: `url(${guestCursor}) 16 16, auto` }}>
      {/* Top Banner */}
      <Advert />

      {/* Hero Section */}
      <Hero isHovered={isHovered} setIsHovered={setIsHovered} />

      {/* Bottom Bar */}
      <Generate />
    </div>
  );
}

export default App;