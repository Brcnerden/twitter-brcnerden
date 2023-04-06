import { createContext, useState } from "react";

export const UserAuthContext = createContext();

export const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserAuthContext.Provider value={{ user, setUser }}>
      {children}
    </UserAuthContext.Provider>
  );
};
