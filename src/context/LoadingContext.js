import React, { createContext, useContext, useState } from 'react';
import LoadingModal from '../components/LoadingModal';

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ setLoading }}>
      <div>
        <div>{loading && <LoadingModal className="text-center" />}</div>
      </div>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
