import styled from "@emotion/styled";
import { COLORS } from "../../../../theme/colors";

const Body = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
`;

const Contanier = styled.div`
  max-width: 650px;
  width: 100%;
  height: 600px;
  position: fixed;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  z-index: 1;
  background-color: ${COLORS.white.$500};
  border-radius: 20px;
  text-align: center;

  @media screen and (max-width: 992px) {
    max-width: 376px;
    width: 100%;
  }

  @media screen and (max-width: 380px) {
    height: 850px;
  }
`;

const Logo = styled.div`
  padding-top: 10px;
`;

const Picture = styled.div`
  margin-top: 50px;
  cursor: pointer;
`;
const ButtonProfile = styled.button`
  border: 1px solid black;
  border-radius: 20px;
  max-width: 375px;
  width: 100%;
  height: 51px;
  cursor: pointer;
  background-color: ${COLORS.white.$500};
  text-align: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 15px;
  font-weight: 700;
  word-wrap: break-word;
  line-height: 20px;
  margin-top: 70px;
  @media screen and (max-width: 992px) {
    max-width: 250px;
    width: 100%;
  }
`;

export { Contanier, Logo, Picture, ButtonProfile, Body };
