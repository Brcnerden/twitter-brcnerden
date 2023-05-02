import React from "react";
import * as S from "./UserProfileBoxstyled";

export const UserProfileBox = () => {
  return (
    <S.ProfileInformation>
      <S.ProfileFoto
        src="https://www.shutterstock.com/image-vector/user-login-authenticate-icon-human-260nw-1365533969.jpg"
        alt="foto"
      ></S.ProfileFoto>
      <S.TextInformation>
        <span>Burçin</span>
        <span>brcnerden@gmail.com</span>
      </S.TextInformation>
      <div />
      <div />
      <div />
    </S.ProfileInformation>
  );
};
