import './App.css';
import  Layout  from './Layout';
import React, { useEffect, useState, } from 'react'

function App() {

  const [vantaEffect, setVantaEffect] = useState(0);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        window.VANTA.HALO({
          el: "#background-ring",
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          baseColor: "cyan",
          backgroundColor: "#baff8f",
          amplitudeFactor: 3,
          xOffset: -0.11,
          yOffset: 0.06,
          size: 2.35
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className='relative'>
      <div id="background-ring" className="fixed top-0 opacity-80 -z-40 w-full min-h-screen flex flex-col text-center"></div>
      <Layout />
    </div>
  );
}

export default App;
