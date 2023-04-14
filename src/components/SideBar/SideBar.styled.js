import styled from "@emotion/styled";

const Contanier = styled.div`
  max-width: 275px;
  width: 100%;
  background-color: FFFFFF;
  margin-bottom: 5px;
  font-size: 15px;
  font-weight: 700;
  padding: 15px;
`;

const Bar = styled.div`
  svg {
    width: 36px;
    height: 36px;
    fill: #08a0e9;
    padding-right: 5px;
  }
  display: flex;
  color: #08a0e9;
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

export { Contanier, Bar, TweetButton };
