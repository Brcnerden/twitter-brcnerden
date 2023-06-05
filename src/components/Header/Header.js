import React from "react";
import * as S from "./Header.styled";

const Header = ({
  foto = "https://t4.ftcdn.net/jpg/03/59/58/91/240_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg",
  handleChange,
}) => {
  console.log(handleChange);

  return (
    <S.Contanier>
      <S.MenuButton onClick={handleChange}>
        <img src={foto} alt="" />
      </S.MenuButton>
    </S.Contanier>
  );
};

export { Header };
