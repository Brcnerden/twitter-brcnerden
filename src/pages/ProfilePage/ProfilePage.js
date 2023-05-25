import React from "react";
import Foto from "../../assest/image/UserFoto.jpg";
import { ProfilePhoto } from "./views/ProfilePhoto";
import { ProfileHeader } from "./views/ProfileHeader";
import { TweetsBox } from "../../components/TweetsBox";
import { Layout } from "../../components/Layout";

const ProfilePage = () => {
  return (
    <Layout>
      <ProfileHeader />
      <ProfilePhoto />
      <TweetsBox
        defultFoto
        tweets=" 4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish uchun
        moddiy jihatdan to'la-to'kis tayyor bo'lishni, sog'lik va jismoniy
        holatni normallashtirishni reja qildim"
      />
      <TweetsBox
        defultFoto
        tweets="Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima deyayotganimizga qarab ham o'tirmaymiz. 

        Bitta biznes trener nito gapirib qo'ysa, hamma biznes trenerlar yomonga chiqadi slishkom aqlli odamlar nazdida. 

        Gap faqat biznes trenerlar haqida emas."
      />
      <TweetsBox tweets="A bo'pti maskamasman" foto={Foto} />
    </Layout>
  );
};

export { ProfilePage };
