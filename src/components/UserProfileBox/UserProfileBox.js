import React from "react";
import * as S from "./UserProfileBoxstyled";

export const UserProfileBox = ({
  name,
  email,
  foto = "https://t4.ftcdn.net/jpg/03/59/58/91/240_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg",
}) => {
  return (
    <S.ProfileInformation>
      <S.ProfileFoto>
        <img src={foto} alt="foto" />
      </S.ProfileFoto>
      <S.TextInformation>
        <span>{name}</span>
        <span>{email}</span>
      </S.TextInformation>
    </S.ProfileInformation>
  );
};
