import React from "react";
import { userSingOut } from "../../services/auth";
import { UserAuthContext } from "../../contextPage/UserContext";
import { useContext } from "react";
import { Layout } from "../../components/Layout";

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
      <Layout>home</Layout>
      <button onClick={handleLogOut}>Çıkış yap</button>
    </>
  );
};
