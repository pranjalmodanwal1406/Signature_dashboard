import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [data, setData] = useState({
    name: "",
    address: "",
    phone: "",
    title: "",
    company: "",
    email: "",
    website: "",
    color: "",
    font: "",
    spacing: "",
    scale: "",
    size: "",
    position: "",
    shape: ""
  });

  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
};
