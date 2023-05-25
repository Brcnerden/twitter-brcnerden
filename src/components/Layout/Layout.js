import React from "react";
import * as S from "./Layout.styled";
import { Menu } from "../Menu";
import { SideBar } from "../SideBar";

export const Layout = ({ children }) => {
  return (
    <S.Contanier>
      <Menu />
      <S.Main>
        <S.Children>{children}</S.Children>
        <SideBar />
      </S.Main>
    </S.Contanier>
  );
};
