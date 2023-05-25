import React from 'react';
import BigMouth from '../../assest/image/BigMouth.jpg';
import BlueScreen from '../../assest/image/BlueScreen.jpg';
import NoteBook from '../../assest/image/NoteBook.jpg';
import OrangeMan from '../../assest/image/OrangeMan.jpg';
import GirlFoto from '../../assest/image/ProfilFotoGirl.jpg';
import ProfileMan from '../../assest/image/ProfileMan.jpg';
import TwitterPage from '../../assest/image/TwitterPage.jpg';
import blackmanfoto from '../../assest/image/blackmanfoto.jpg';
import SearchIcon from '../../src/components/Icon/svg/SearchIcon';
import * as S from './SideBar.styled';

import SettingIcon from '../../src/components/Icon/svg/SettingIcon';
import { TrendyBox } from '../../src/components/TrendyBox/TrendyBox';
import { UserProfileBox } from '../../src/pages/ProfilePage/views/UserProfileBox/UserProfileBox';

const SideBar = () => {
  return (
    <>
      <S.Contanier>
        <S.SearchLine>
          <SearchIcon />
          <input type='text' placeholder=' Search Twitter'></input>
        </S.SearchLine>
        <S.images>
          <img src={blackmanfoto} alt='resim1' />
          <img src={TwitterPage} alt='resim1' />
          <img src={BigMouth} alt='resim1' />
          <img src={BlueScreen} alt='resim1' />
          <img src={NoteBook} alt='resim1' />
          <img src={OrangeMan} alt='resim1' />
        </S.images>
        <S.ProfileBox>
          <p>You might like</p>
          <S.ProfileLine>
            <S.ProfileDiv>
              <UserProfileBox
                name='Mushtariy'
                email='@Mushtar565266'
                foto={GirlFoto}
              />
            </S.ProfileDiv>
            <button>Follow</button>
          </S.ProfileLine>
          <S.ProfileLine>
            <S.ProfileDiv2>
              <UserProfileBox
                name='Shuhratbek'
                email='@mrshukhrat'
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
