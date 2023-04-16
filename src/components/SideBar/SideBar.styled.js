import styled from "@emotion/styled";
import { COLORS } from "../../theme/colors";

const Contanier = styled.div`
  max-width: 275px;
  width: 100%;
  background-color: FFFFFF;
  margin-bottom: 5px;
  font-size: 15px;
  font-weight: bold;
`;

const Bar = styled.li`
  display: flex;
  margin-bottom: 30px;
  padding-left: 50px;

  svg {
    width: 36px;
    height: 36px;
    padding-right: 5px;
  }
  a:-webkit-any-link {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    text-decoration: none;
    color: ${COLORS.black.$500};
  }

  :hover {
    background-color: #add8e6;
    border-radius: 50px;
  }

  @media screen and (max-width: 992px) {
    > div {
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
  margin-top: 50px;
  margin-left: 20px;
`;

const BirdIcon = styled.div`
  fill: ${COLORS.blue.$500};
  padding: 15px 50px;

  svg {
    width: 50px;
    height: 50px;
  }
`;

export { Contanier, Bar, TweetButton, BirdIcon };
