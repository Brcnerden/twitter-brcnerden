import React from "react";
import * as S from "./Menu.styled";
import {
  BellIcon,
  HangtagIcon,
  EmailIcon,
  BookMarksIcon,
  TwitterBlueIcon,
  ProfileIcon,
  MoreIcon,
  TweetPhoneIcon,
} from "../Icon/svg/IconSideBar";
import { Link } from "react-router-dom";
import HomeIcon from "../Icon/svg/HomeIcon";
import { UserProfileBox } from "../../pages/ProfilePage/views/UserProfileBox/UserProfileBox";
import TwitterLogo from "../Icon/svg/Logo";

const Menu = () => {
  return (
    <>
      <S.Contanier>
        <nav>
          <S.BirdIcon>
            <TwitterLogo />
          </S.BirdIcon>

          <S.Bar>
            <Link to="/">
              <div>
                <HomeIcon />
                Home
              </div>
            </Link>
          </S.Bar>

          <S.Bar>
            <Link to="/">
              <HangtagIcon />
              Explore
            </Link>
          </S.Bar>
          <S.Bar>
            <Link to="/">
              <BellIcon />
              Notifications
            </Link>
          </S.Bar>
          <S.Bar>
            <Link to="/">
              <EmailIcon />
              Messages
            </Link>
          </S.Bar>
          <S.Bar>
            <Link to="/">
              <BookMarksIcon />
              Bookmarks
            </Link>
          </S.Bar>
          <S.Bar>
            <Link to="/">
              <TwitterBlueIcon />
              Lists
            </Link>
          </S.Bar>
          <S.Bar>
            <Link to="/">
              <ProfileIcon />
              Profile
            </Link>
          </S.Bar>
          <S.Bar>
            <Link to="/">
              <MoreIcon />
              More
            </Link>
          </S.Bar>
          <S.TweetButton>
            <div>Tweet</div>
            <span>
              <TweetPhoneIcon />
            </span>
          </S.TweetButton>
        </nav>
        <S.ProfileBox>
          <UserProfileBox name="Burçin" email="brcnerden@gmail.com" />
        </S.ProfileBox>
      </S.Contanier>
    </>
  );
};

export { Menu };
