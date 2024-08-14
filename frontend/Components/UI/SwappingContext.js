import React, { createContext, useContext, useReducer } from 'react';

const SwappingContext = createContext();

const swappingReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_DRESS':
      return [...state, action.payload];
    default:
      return state;
  }
};

export const SwappingProvider = ({ children }) => {
  const [swappingDresses, dispatch] = useReducer(swappingReducer, []);

  return (
    <SwappingContext.Provider value={{ swappingDresses, dispatch }}>
      {children}
    </SwappingContext.Provider>
  );
};

export const useSwapping = () => useContext(SwappingContext);