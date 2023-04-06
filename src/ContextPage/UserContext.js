import { createContext, useContext, useEffect, useState } from "react";
import { isUserSingIn } from "../services/auth";

export const UserAuthContext = createContext();

export const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    isUserSingIn((e) => {
      if ("uid" in e) {
        setUser(null);
      } else {
        setUser(true);
      }
    });
  }, []);

  return (
    <UserAuthContext.Provider value={user}>{children}</UserAuthContext.Provider>
  );
};

export function useUserAuth() {
  return useContext(UserAuthContext);
}
