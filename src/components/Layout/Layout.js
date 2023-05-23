import React from "react";
import * as S from "./Layout.styled";
import { Menu } from "../Menu";
import { SideBar } from "../SideBar";

export const Layout = ({ children }) => {
  return (
    <S.Contanier>
      <Menu />
      <S.Children>{children}</S.Children>
      <SideBar />
    </S.Contanier>
  );
};
