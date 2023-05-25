import styled from "@emotion/styled";
import { COLORS } from "../../theme/colors";

const Contanier = styled.div`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: FFFFFF;
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
  @media screen and (max-width: 1680px) {
    right: auto;
    transform: translate3d(0, 0, 0);
  }

  > nav {
    @media screen and (max-width: 992px) {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      padding-right: 29px;
    }
  }
  @media screen and (max-width: 380px) {
    display: none;
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
    background-color: #add8e6;
    border-radius: 50px;

    > div {
      display: flex;
      align-items: center;
      padding: 10px;
    }

    svg {
      width: 28px;
      height: 28px;
      margin-right: 20px;
    }

    :hover {
    }

    @media screen and (max-width: 992px) {
      display: none;
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
  margin-left: 20px;
  > span {
    display: none;
  }
  @media screen and (max-width: 992px) {
    width: 36px;
    height: 36px;
    margin-right: 12px;
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
  padding-left: 50px;

  svg {
    display: block;
    width: 50px;
    height: 50px;
  }

  @media screen and (max-width: 992px) {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
  }
`;

const ProfileBox = styled.div`
  margin-left: 50px;
  margin-top: 100px;
  @media screen and (max-width: 992px) {
    display: flex;
    justify-content: flex-end;
  }
`;

export { Contanier, Bar, TweetButton, BirdIcon, ProfileBox };
