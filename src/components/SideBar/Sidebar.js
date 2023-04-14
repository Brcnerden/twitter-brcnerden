import React from "react";
import * as S from "./SideBar.styled";
import {
  BellIcon,
  HangtagIcon,
  EmailIcon,
  HomeIcon,
  BookMarksIcon,
  TwitterBlueIcon,
  ProfileIcon,
  MoreIcon,
} from "../Icon/svg/IconSideBar";

export const Sidebar = () => {
  return (
    <S.Contanier>
      <S.Bar>
        <span>
          <HomeIcon />
        </span>
        <span>Home</span>
      </S.Bar>
      <S.Bar>
        <span>
          <HangtagIcon />
        </span>
        <span>Explore</span>
      </S.Bar>
      <S.Bar>
        <span>
          <BellIcon />
        </span>
        <span>Notifications</span>
      </S.Bar>
      <S.Bar>
        <span>
          <EmailIcon />
        </span>
        <span>Messages</span>
      </S.Bar>
      <S.Bar>
        <span>
          <BookMarksIcon />
        </span>
        <span>Bookmarks</span>
      </S.Bar>
      <S.Bar>
        <span>
          <TwitterBlueIcon />
        </span>
        <span>Lists</span>
      </S.Bar>
      <S.Bar>
        <span>
          <ProfileIcon />
        </span>
        <span>Profile</span>
      </S.Bar>
      <S.Bar>
        <span>
          <MoreIcon />
        </span>
        <span>More</span>
      </S.Bar>

      <S.TweetButton>Tweet</S.TweetButton>
    </S.Contanier>
  );
};
