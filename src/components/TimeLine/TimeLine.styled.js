import styled from "@emotion/styled";
import { COLORS } from "../../theme/colors";

const Contanier = styled.div`
  max-width: 572px;
  width: 100%;
  margin: 20px 0 11px 29px;
`;

const SearchLine = styled.div`
  max-width: 373px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: ${COLORS.gray.$300};
  border-radius: 31px;
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
  margin-top: 11px;

  img {
    max-width: 123px;
    width: 100%;
    padding: 2px;
  }
`;

const ProfileLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: -25px;
  > button {
    width: 98px;
    height: 38px;
    border-radius: 50px;
    background-color: ${COLORS.black.$500};
    color: ${COLORS.white.$500};
    margin-top: 40px;
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

export { Contanier, SearchLine, images, ProfileBox, ProfileLine };
