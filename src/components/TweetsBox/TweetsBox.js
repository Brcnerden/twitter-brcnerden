import React from "react";
import { UserProfileBox } from "../UserProfileBox/UserProfileBox";
import * as S from "./TweetsBox.styled";
import Cloud from "../Icon/svg/Cloud";
import Retweet from "../Icon/svg/Retweet";
import Heard from "../Icon/svg/Heard";
import Share from "../Icon/svg/Share";
import Statistics from "../Icon/svg/Statistics";

export const TweetsBox = ({ tweets, foto, defultFoto }) => {
  return (
    <div>
      <S.UserInfo>
        <UserProfileBox />
        <p>Burçin</p>
        <span>brcnerden@gmail.com</span>
      </S.UserInfo>
      <S.Tweets>{tweets}</S.Tweets>
      <S.UserFoto defultFoto={defultFoto} src={foto} alt="" />

      <S.Icon>
        <span />
        <Cloud />
        <span>10</span>
        <Retweet />
        <span>1</span>
        <Heard />
        <span>8</span>
        <Share />
        <span />
        <Statistics />
        <span />
      </S.Icon>
      <hr></hr>
    </div>
  );
};
