import React, { useContext } from "react";
import { Layout } from "../../components/Layout";
import { UserAuthContext } from "../../context/UserContext";
import { userSingOut } from "../../services/auth";
import { HomePageHeader } from "./views/HomePageHeader/HomePageHeader";
import { HomePageUserTweet } from "./views/HomePageUserTweet";
import { TweetsBox } from "../../components/TweetsBox";

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
      <Layout>
        <HomePageHeader />
        <HomePageUserTweet />
        <TweetsBox
          defultFoto
          tweets="Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?"
        />
      </Layout>
      <button onClick={handleLogOut}>Çıkış yap</button>
    </>
  );
};
