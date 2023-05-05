import React from "react";
import * as S from "./TimeLine.styled";
import SearchIcon from "../Icon/svg/SearchIcon";
import blackmanfoto from "../../theme/image/blackmanfoto.jpg";
import TwitterPage from "../../theme/image/TwitterPage.jpg";
import BigMouth from "../../theme/image/BigMouth.jpg";
import BlueScreen from "../../theme/image/BlueScreen.jpg";
import OrangeMan from "../../theme/image/OrangeMan.jpg";
import NoteBook from "../../theme/image/NoteBook.jpg";

export const TimeLine = () => {
  return (
    <>
      <S.Contanier>
        <S.SearchLine>
          <SearchIcon />
          <input type="text" placeholder=" Search Twitter"></input>
        </S.SearchLine>
        <S.images>
          <img src={blackmanfoto} alt="resim1" />
          <img src={TwitterPage} alt="resim1" />
          <img src={BigMouth} alt="resim1" />
          <img src={BlueScreen} alt="resim1" />
          <img src={NoteBook} alt="resim1" />
          <img src={OrangeMan} alt="resim1" />
        </S.images>
      </S.Contanier>
    </>
  );
};
