import React from "react";
import Icon from "../../components/Icon/Icon";
import * as S from "./GuestLayout.styled";

const GuestLayuot = ({ children }) => {
  return (
    <S.Contanier>
      <S.Wrapper>
        <S.Icons>
          <Icon.CloseButton />
          <Icon.Logo />
        </S.Icons>
        <S.Form>
          <S.Title>Entrar no Twitter</S.Title>
          {children}
        </S.Form>
      </S.Wrapper>
    </S.Contanier>
  );
};

export { GuestLayuot };
