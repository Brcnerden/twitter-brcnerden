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
  TwitterIcon,
} from "../Icon/svg/IconSideBar";
import { ButtonSubmit } from "../ButtonSubmit/ButtonSubmit";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <S.Contanier>
      <nav>
        <S.BirdIcon>
          <TwitterIcon />
        </S.BirdIcon>
        <S.Bar>
          <HomeIcon />
          <Link to="/">Home</Link>
        </S.Bar>
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
        <ButtonSubmit
          onClick={() => {
            alert("burçin");
          }}
          label={"burçin"}
        />
      </nav>
    </S.Contanier>
  );
};
