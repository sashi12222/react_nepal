import React, { useRef, useState, useEffect } from "react";
import World from "@react-map/nepal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  const lastToastTime = useRef(0);

  const handleToast = (message) => {
    const now = Date.now();

    if (now - lastToastTime.current > 100) {
      toast(message);
      lastToastTime.current = now;
    }
  };

  // Responsive map size based on screen size
  const getMapSize = () => {
    if (typeof window === "undefined") return 1000; // SSR fallback
    if (window.innerWidth <= 480) return 300; // Mobile
    if (window.innerWidth <= 768) return 500; // Tablet
    if (window.innerWidth <= 1024) return 700; // Small desktop
    return 1000; // Large desktop
  };

  const [mapSize, setMapSize] = useState(900); // Default size

  useEffect(() => {
    // Set initial size after component mounts
    setMapSize(getMapSize());

    const handleResize = () => {
      setMapSize(getMapSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="container">
      <h1 className="text">Map of Nepal</h1>
      <div className="map">
        <World
          onSelect={handleToast}
          size={mapSize}
          type="select-multiple"
          strokeColor="#34495e"
          strokeWidth={2}
          hoverColor="orange"
          selectColor="#e74c3c"
          hints={true}
          hintTextColor="#ffffff"
          hintBackgroundColor="rgba(0,0,0,0.8)"
          hintPadding="8px 12px"
          hintBorderRadius="6px"
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
