import React, { createContext, useState, useContext, ReactNode } from 'react';

type NavColorContextType = {
  navColor: string;
  setNavColor: (color: string) => void;
};

const NavColorContext = createContext<NavColorContextType | undefined>(undefined);

export const useNavColor = () => {
  const context = useContext(NavColorContext);
  if (!context) {
    throw new Error('useNavColor must be used within a NavColorProvider');
  }
  return context;
};

export const NavColorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [navColor, setNavColor] = useState<string>('#183d3d');

  return (
    <NavColorContext.Provider value={{ navColor, setNavColor }}>
      {children}
    </NavColorContext.Provider>
  );
};