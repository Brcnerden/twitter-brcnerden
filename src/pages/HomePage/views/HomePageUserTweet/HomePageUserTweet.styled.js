import styled from "@emotion/styled";
import { COLORS } from "../../../../theme/colors";

const Contanier = styled.div`
  border-bottom: 1px solid ${COLORS.gray.$100};
  padding-bottom: 15px;
`;

const Image = styled.div`
  width: 60px;
  height: 60px;
  padding-top: 10px;
  > img {
    width: 100%;
    object-fit: cover;
  }
`;

const Tweets = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  > div {
    padding-right: 15px;
    color: ${COLORS.gray.$700};
    font-weight: 600;
    font-size: 20px;
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  > div > span:first-child {
    padding-left: 17px;
  }

  > div > span {
    margin-right: 23px;
  }
  > button {
    width: 108px;
    height: 50px;
    background-color: ${COLORS.blue.$600};
    color: ${COLORS.white.$500};
    border-radius: 50px;
    opacity: 40%;
    text-align: center;
    border-style: none;
  }
`;

export { Contanier, Image, Tweets, Icons };
