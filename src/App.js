import React, { useContext, useEffect, useState } from "react";
import { GUEST_ROUTER, USER_ROUTER } from "./router";
import { RouterProvider } from "react-router-dom";
import { UserAuthContext } from "./ContextPage/UserContext";
import { isUserSingIn } from "./services/auth";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { user, setUser } = useContext(UserAuthContext);

  useEffect(() => {
    isUserSingIn((response) => {
      if (!response) {
        setUser(null);
      } else if ("uid" in response) {
        setUser({ name: "burak" });
      } else {
        setUser(null);
      }

      setIsLoading(false);
    });
  }, [setUser]);

  if (isLoading) return "yükleniyor";

  return <RouterProvider router={user ? USER_ROUTER : GUEST_ROUTER} />;
}

export default App;
