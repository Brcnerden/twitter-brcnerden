import React from "react";
import { userSingOut } from "../services/auth";
import { UserAuthContext } from "../ContextPage/UserContext";
import { useContext } from "react";

export const HomePage = () => {
  const { setUser } = useContext(UserAuthContext);

  const handleLogOut = () => {
    userSingOut()
      .then(() => {
        setUser(null); // eger kullanıcı başarı ile çıkış yaptıysa user 'ın boş kalır
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <>
      <div>HomePage</div>
      <button onClick={handleLogOut}>çıkış yap </button>
    </>
  );
};
