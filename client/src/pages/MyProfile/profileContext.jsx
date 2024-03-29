import React, { createContext, useState } from "react";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <ProfileContext.Provider value={{ showProfile, setShowProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};
