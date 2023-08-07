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
import CloseButton from "../Icon/svg/CloseButton";

const Menu = ({ menuOpen, handleChange, invisible }) => {
  return (
    <>
      <S.Contanier className={menuOpen ? "menuOpen" : " "}>
        <nav>
          <S.BirdIcon>
            <TwitterLogo />
            <S.CloseButton onClick={handleChange}>
              <CloseButton />
            </S.CloseButton>
          </S.BirdIcon>

          <S.Bar>
            <Link to="/">
              <div>
                <HomeIcon />
                <span>Home</span>
              </div>
            </Link>
          </S.Bar>

          <S.Bar>
            <Link to="/">
              <div>
                <HangtagIcon />
                <span>Explore</span>
              </div>
            </Link>
          </S.Bar>
          <S.Bar>
            <Link to="/">
              <div>
                <BellIcon />
                <span>Notifications</span>
              </div>
            </Link>
          </S.Bar>
          <S.Bar>
            <Link to="/">
              <div>
                <EmailIcon />
                <span> Messages</span>
              </div>
            </Link>
          </S.Bar>
          <S.Bar className="hidden">
            <Link to="/">
              <div>
                <BookMarksIcon />
                <span> Bookmarks</span>
              </div>
            </Link>
          </S.Bar>
          <S.Bar className="hidden">
            <Link to="/">
              <div>
                <TwitterBlueIcon />
                <span>Lists</span>
              </div>
            </Link>
          </S.Bar>
          <S.Bar>
            <Link to="/profile">
              <div>
                <ProfileIcon />
                <span> Profile</span>
              </div>
            </Link>
          </S.Bar>
          <S.Bar>
            <Link to="/">
              <div>
                <MoreIcon />
                <span>More</span>
              </div>
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
          <UserProfileBox invisible name="Burçin" email="brcnerden@gmail.com" />
        </S.ProfileBox>
      </S.Contanier>
    </>
  );
};

export { Menu };
