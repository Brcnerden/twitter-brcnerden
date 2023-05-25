import styled from "@emotion/styled";

const Contanier = styled.div`
  max-width: 1327px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
`;

const Children = styled.div`
  flex: 1;
`;

const Main = styled.div`
  width: 100%;
  height: 150vh;
  max-width: 1328px;
  display: flex;
  padding: 0 19px;
  margin-left: 290px;
  transform: translate3d(145px, 0, 0);

  @media screen and (max-width: 1680px) {
    margin-left: 290;
    transform: translate3d(0, 0, 0);
    width: calc(100% - 290px);
  }
`;

export { Contanier, Children, Main };
