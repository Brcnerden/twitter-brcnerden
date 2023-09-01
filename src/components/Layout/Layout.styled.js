import styled from '@emotion/styled';

const Contanier = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 10px;

  @media screen and (max-width: 650px) {
    padding: 0;
  }
`;

const Children = styled.div``;

const Main = styled.div`
  width: 100%;
  max-width: 1311px;
  display: flex;

  transform: translate3d(134px, 0, 0);


  @media screen and (max-width: 1615px) {
    transform: translate3d(0, 0, 0);
    margin-left: 268px;
  }

  @media screen and (max-width: 1300px) {
    margin-left: 50px;
  }

  @media screen and (max-width: 1300px) {
    margin-left: 50px;
  }

  @media screen and (max-width: 650px) {
    margin-left: 0;
  }
`;

const Content = styled.div`
  flex: 1;
  margin-right: 29px;

  > h1 {
    padding-left: 20px;
    @media screen and (max-width: 650px) {
      display: none;
    }
  }
`;

export { Children, Contanier, Content, Main };
