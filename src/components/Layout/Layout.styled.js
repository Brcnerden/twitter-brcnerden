import styled from "@emotion/styled";
import { COLORS } from "../../theme/colors";

const Contanier = styled.div`
  width: 100%;

  margin-left: auto;
  margin-right: auto;
  display: flex;

  @media screen and (min-width: 1680px) {
    max-width: 1327px;
  }

  /* @media screen and (max-width: 992px) {
    max-width: 992px;
    width: calc(100%-100px);
    margin: 0 auto;
  } */

  @media screen and (max-width: 444px) {
    display: block;
  }
`;

const Children = styled.div`
  flex: 1;
  @media screen and (max-width: 444px) {
    max-width: 375px;
    width: 100%;
    margin: 0;
    padding: 0;
    > img {
      width: 375px;
    }
  }
`;

const Main = styled.div`
  width: 100%;
  height: 150vh;
  display: flex;
  padding: 0 19px;
  transform: translate3d(145px, 0, 0);

  @media screen and (max-width: 1680px) {
    margin-left: 290px;
    transform: translate3d(0, 0, 0);
    width: calc(100% - 290px);
  }

  @media screen and (max-width: 1300px) {
    margin-left: 160px;
    width: calc(100% - 88px);
  }

  @media screen and (max-width: 444px) {
    margin: 0;
    padding: 0;
    width: 100%;
  }
`;

const Title = styled.div`
  height: 57px;

  > h1 {
    padding-left: 20px;
    @media screen and (max-width: 444px) {
      display: none;
    }
  }
`;
const Line = styled.div`
  max-width: 574px;
  width: 100%;
  border-left: 0.5px solid ${COLORS.gray.$100};
  border-right: 1px solid ${COLORS.gray.$100};
`;

export { Contanier, Children, Main, Title, Line };
