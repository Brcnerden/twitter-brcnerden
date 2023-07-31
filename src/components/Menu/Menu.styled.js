import styled from "@emotion/styled";
import { COLORS } from "../../theme/colors";

const Contanier = styled.div`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: ${COLORS.white.$500};
  margin-bottom: 5px;
  font-size: 15px;
  font-weight: bold;
  line-height: 24px;
  position: fixed;
  left: 0;
  right: 0;
  margin: auto;
  height: 100%;
  width: 290px;
  transform: translate3d(-663px, 0, 0);
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 0 29px 80px;

  @media screen and (max-width: 1680px) {
    right: auto;
    transform: translate3d(0, 0, 0);
  }

  @media screen and (max-width: 992px) {
    width: 88px;
  }
  @media screen and (max-width: 444px) {
    width: 100%;
    max-width: 280px;
    background-color: ${COLORS.white.$500};
    left: 100%;
    &.menuOpen {
      left: 0;
    }
  }

  > nav {
    @media screen and (max-width: 992px) and (max-height: 650px) {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      padding-right: 29px;
    }
    @media screen and (max-height: 650px) {
      .hidden {
        visibility: hidden;
      }
    }
  }
`;

const Bar = styled.li`
  list-style: none;

  a {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    text-decoration: none;
    color: ${COLORS.black.$500};
    line-height: 24px;
    display: inline-block;
    border-radius: 50px;

    > div {
      display: flex;
      align-items: center;
      padding: 10px;

      @media screen and (max-height: 650px) {
        padding: 7px;
      }
    }

    svg {
      width: 28px;
      height: 28px;
      margin-right: 20px;
    }
    span {
      @media screen and (max-width: 1300px) {
        display: none;
      }
      @media screen and (max-width: 444px) {
        display: flex;
      }
    }

    :hover {
      background-color: #add8e6;
    }
  }
`;

const TweetButton = styled.button`
  text-align: center;
  width: 200px;
  height: 50px;
  background-color: #1da1f2;
  color: white;
  border: none;
  border-radius: 50px;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  margin-top: 32px;
  > span {
    display: none;
  }
  @media screen and (max-width: 1300px) {
    width: 36px;
    height: 36px;
    margin-right: 27px;
    margin-top: 15px;
    > div {
      display: none;
    }
    > span {
      display: flex;
      align-items: center;

      > svg {
        fill: ${COLORS.white.$500};
      }
    }
  }
`;

const BirdIcon = styled.div`
  fill: ${COLORS.blue.$500};
  margin-bottom: 30px;

  > span {
    display: none;
  }

  svg {
    display: block;
    width: 50px;
    height: 50px;
  }

  @media screen and (max-width: 992px) {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    margin-right: 8px;
  }
  @media screen and (max-width: 444px) {
    align-items: center;
  }
`;

const ProfileBox = styled.div`
  margin-right: -31px;
  @media (max-height: 650px) and (max-width: 1300px) {
    margin-top: 15px;
    margin-left: 90px;
    > div > div {
      margin-right: -54px;
    }
  }
`;

const CloseButton = styled.button`
  display: none;
  @media screen and (max-width: 444px) {
    display: block;
    margin-left: 200px;
    margin-top: -25px;
    border-style: none;
    background-color: ${COLORS.white.$500};
  }
`;

export { Contanier, Bar, TweetButton, BirdIcon, ProfileBox, CloseButton };
