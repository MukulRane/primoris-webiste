import React, { createContext, useContext, useEffect, useState } from 'react';

// Create a context for the window dimensions
const WindowDimensionsContext = createContext();

export const WindowDimensionsProvider = ({ children }) => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <WindowDimensionsContext.Provider value={windowDimensions}>
      {children}
    </WindowDimensionsContext.Provider>
  );
};

export const useWindowDimensions = () => {
  return useContext(WindowDimensionsContext);
};
