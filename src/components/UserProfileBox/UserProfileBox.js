import React from "react";
import * as S from "./UserProfileBoxstyled";

export const UserProfileBox = ({
  name,
  email,
  foto = "https://www.shutterstock.com/image-vector/user-login-authenticate-icon-human-260nw-1365533969.jpg",
}) => {
  return (
    <S.ProfileInformation>
      <S.ProfileFoto src={foto} alt="foto"></S.ProfileFoto>
      <S.TextInformation>
        <span>{name}</span>
        <span>{email}</span>
      </S.TextInformation>
    </S.ProfileInformation>
  );
};
