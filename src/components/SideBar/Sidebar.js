import React from "react";
import * as S from "./SideBar.styled";
import {
  BellIcon,
  HangtagIcon,
  EmailIcon,
  BookMarksIcon,
  TwitterBlueIcon,
  ProfileIcon,
  MoreIcon,
  TwitterIcon,
} from "../Icon/svg/IconSideBar";
import { Link } from "react-router-dom";
import HomeIcon from "../Icon/svg/HomeIcon";
import { UserProfileBox } from "../UserProfileBox/UserProfileBox";

export const Sidebar = () => {
  return (
    <>
      <S.Contanier>
        <nav>
          <S.BirdIcon>
            <TwitterIcon />
          </S.BirdIcon>
          <S.HoverStyle>
            <S.Bar>
              <HomeIcon />
              <Link to="/">Home</Link>
            </S.Bar>
          </S.HoverStyle>

          <S.Bar>
            <HangtagIcon />
            <Link to="/">Explore</Link>
          </S.Bar>
          <S.Bar>
            <BellIcon />
            <Link to="/">Notifications</Link>
          </S.Bar>
          <S.Bar>
            <EmailIcon />
            <Link to="/">Messages</Link>
          </S.Bar>
          <S.Bar>
            <BookMarksIcon />
            <Link to="/">Bookmarks</Link>
          </S.Bar>
          <S.Bar>
            <TwitterBlueIcon />
            <Link to="/">Lists</Link>
          </S.Bar>
          <S.Bar>
            <ProfileIcon />
            <Link to="/">Profile</Link>
          </S.Bar>
          <S.Bar>
            <MoreIcon />
            <Link to="/">More</Link>
          </S.Bar>
          <S.TweetButton>Tweet</S.TweetButton>
        </nav>
        <UserProfileBox />
      </S.Contanier>
    </>
  );
};
