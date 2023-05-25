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
  height: 100%;
  overflow: auto;
  flex: 1;
  display: flex;
  padding: 0 19px;
  margin-left: 290px;
  @media screen and (min-width: 1680px) {
    transform: translate3d(145px, 0, 0);
    margin-left: 0;
  }
`;

export { Contanier, Children, Main };
