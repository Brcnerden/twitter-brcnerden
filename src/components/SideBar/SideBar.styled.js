import styled from "@emotion/styled";
import { COLORS } from "../../theme/colors";

const Contanier = styled.div`
  max-width: 373px;
  overflow: hidden;


  @media screen and (max-width: 1300px) {
    max-width: 290px;
  }

  @media screen and (max-width: 992px) {
    display: none;
  }
  
`;

const SearchLine = styled.div`

  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: ${COLORS.gray.$300};
  border-radius: 31px;
  position: sticky;
  top: -0.5px;
  z-index: 3;
  > input {
    margin-left: 12px;
    border: none;
    background-color: ${COLORS.gray.$300};
    color: ${COLORS.gray.$600};
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 400;
    font-size: 18px;
  }
`;

const images = styled.div`
  max-width: 373px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 11px 0 10px 0;

  img {
    max-width: 116px;
    width: 100%;
    padding: 2px;
  }
`;

const ProfileLine = styled.div`
  display: flex;
  margin-top: 40px;
  margin-left: 12px;

  > button {
    max-width: 100px;
    height: 38px;
    border-radius: 50px;
    background-color: ${COLORS.black.$500};
    color: ${COLORS.white.$500};
    width: calc(100% - 30px);
    margin: 0 10px;
  }
`;

const ProfileDiv = styled.div`
  padding-right: 40px;
  @media screen and (max-width: 1300px) {
    padding-right: 10px;
  }
`;
const ProfileDiv2 = styled.div`
  padding-right: 70px;
  @media screen and (max-width: 1300px) {
    padding-right: 40px;
  }
`;

const ProfileBox = styled.div`
  max-width: 373px;
  width: 100%;
  background-color: ${COLORS.gray.$400};
  border-radius: 10px;
  > p {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    padding-top: 15px;
    padding-left: 20px;
  }
`;

const showButton = styled.div`
  color: ${COLORS.blue.$500};
  padding: 30px 0 25px 15px;
`;

const TrendyBox = styled.div`
  background-color: ${COLORS.gray.$400};
  max-width: 373px;
  width: 100%;
  margin-top: 20px;
  > div {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  > div > p {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: ${COLORS.black.$500};
  }
`;

export {
  Contanier, ProfileBox, ProfileDiv,
  ProfileDiv2, ProfileLine, SearchLine, TrendyBox, images, showButton
};

