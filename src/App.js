import './App.css';
import  Layout  from './Layout';
import React, { useEffect, useContext, useState, useRef } from 'react'

function App() {

  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);

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
    <div>
      <div id="background-ring" className="fixed opacity-80 -z-40 w-full min-h-screen flex flex-col text-center"></div>
      <Layout />
    </div>
  );
}

export default App;
