import React from "react";
import * as S from "./SideBar.styled";
import SearchIcon from "../Icon/svg/SearchIcon";
import blackmanfoto from "../../theme/image/blackmanfoto.jpg";
import TwitterPage from "../../theme/image/TwitterPage.jpg";
import BigMouth from "../../theme/image/BigMouth.jpg";
import BlueScreen from "../../theme/image/BlueScreen.jpg";
import OrangeMan from "../../theme/image/OrangeMan.jpg";
import NoteBook from "../../theme/image/NoteBook.jpg";
import GirlFoto from "../../theme/image/ProfilFotoGirl.jpg";
import ProfileMan from "../../theme/image/ProfileMan.jpg";

import { UserProfileBox } from "../UserProfileBox/UserProfileBox";
import { TrendyBox } from "../TrendyBox/TrendyBox";
import SettingIcon from "../Icon/svg/SettingIcon";

const SideBar = () => {
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
        <S.ProfileBox>
          <p>You might like</p>
          <S.ProfileLine>
            <S.ProfileDiv>
              <UserProfileBox
                name="Mushtariy"
                email="@Mushtar565266"
                foto={GirlFoto}
              />
            </S.ProfileDiv>
            <button>Follow</button>
          </S.ProfileLine>
          <S.ProfileLine>
            <S.ProfileDiv2>
              <UserProfileBox
                name="Shuhratbek"
                email="@mrshukhrat"
                foto={ProfileMan}
              />
            </S.ProfileDiv2>

            <button>Follow</button>
          </S.ProfileLine>
          <S.showButton>Show more</S.showButton>
        </S.ProfileBox>
        <S.TrendyBox>
          <div>
            <p>Trends for you </p>
            <SettingIcon />
          </div>
          <TrendyBox />
          <TrendyBox />
          <TrendyBox />
        </S.TrendyBox>
      </S.Contanier>
    </>
  );
};

export { SideBar };
