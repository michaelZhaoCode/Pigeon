import { useRef, useCallback, useContext, useEffect } from "react";
import { ProfileContext } from "./profileContext";

export const useProfileVisibility = () => {
  const { showProfile, setShowProfile } = useContext(ProfileContext);
  const profileRef = useRef(null);

  const handleCloseProfile = useCallback(
    (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    },
    [setShowProfile]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleCloseProfile);
    return () => {
      document.removeEventListener("mousedown", handleCloseProfile);
    };
  }, [handleCloseProfile]);

  return { showProfile, setShowProfile, profileRef };
};
