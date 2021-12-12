import { useState, useEffect } from "react";
import { useAuthContext } from "./useAuthContext";
import { projectAuth } from "../firebase/config";

export const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsLoading(true);

    try {
      await projectAuth.signOut();

      dispatch({ type: "LOGOUT" });

      if (!isCancelled) {
        setIsLoading(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        console.log(err.message);
        setError(err.message);
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    return () => {
      setIsCancelled(true);
    };
  }, []);

  return { logout, error, isLoading };
};
