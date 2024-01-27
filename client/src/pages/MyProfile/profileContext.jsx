import React, { createContext, useState } from "react";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [showProfile, setShowProfile] = useState(false);

  console.log("Profile state in provider:", showProfile);

  return (
    <ProfileContext.Provider value={{ showProfile, setShowProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};
