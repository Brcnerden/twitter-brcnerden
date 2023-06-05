import React, { useContext } from "react";
import { Layout } from "../../components/Layout";
import { UserAuthContext } from "../../context/UserContext";
import { userSingOut } from "../../services/auth";
import { HomePageUserTweet } from "./views/HomePageUserTweet";
import { TweetsBox } from "../../components/TweetsBox";
import Kebab from "../../assest/image/Kebab.jpg";
import * as S from "./HomePage.styled";

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
      <Layout title="Home">
        <S.Contanier>
          <HomePageUserTweet />

          <TweetsBox
            defultFoto
            tweets="Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?"
          />
          <TweetsBox
            defultFoto
            tweets="YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam."
          />
          <TweetsBox
            tweets="Обетда..... 
            Кечиринглар"
            foto={Kebab}
          />
        </S.Contanier>
      </Layout>
      <button onClick={handleLogOut}>Çıkış yap</button>
    </>
  );
};
