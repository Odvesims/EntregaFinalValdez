import React, { createContext, useState } from 'react';

export const DataContext = createContext();

function SessionContext({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <DataContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </DataContext.Provider>
  );
}

export default SessionContext;
