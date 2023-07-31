import React from "react";
import MediaIcon from "../../../../components/Icon/svg/MediaIcon";
import GifIcon from "../../../../components/Icon/svg/GifIcon";
import StatsIcon from "../../../../components/Icon/svg/StatsIcon";
import SmileIcon from "../../../../components/Icon/svg/SmileIcon";
import ScheduleIcon from "../../../../components/Icon/svg/ScheduleIcon";
import Image from "../../../../assest/image/ProfileFoto.jpg";
import * as S from "./HomePageUserTweet.styled";

const HomePageUserTweet = () => {
  return (
    <S.Contanier>
      <S.Tweets>
        <S.Image>
          <img src={Image} alt="Foto" />
        </S.Image>
        <div>What’s happening</div>
      </S.Tweets>
      <S.Icons>
        <div>
          <span>
            <MediaIcon />
          </span>
          <span>
            <GifIcon />
          </span>
          <span>
            <StatsIcon />
          </span>
          <span>
            <SmileIcon />
          </span>

          <span>
            <ScheduleIcon />
          </span>
        </div>
        <button>Tweet</button>
      </S.Icons>
    </S.Contanier>
  );
};

export { HomePageUserTweet };
