import styled from "@emotion/styled";
import { COLORS } from "../../theme/colors";

const Contanier = styled.div`
  background-color: ${COLORS.gray.$500};
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  ::after {
    content: "";
  }
`;

const Title = styled.h1`
  font-weight: 700px;
  font-size: 31px;
  line-height: 37px;
  padding: 19px;
`;

const Wrapper = styled.div`
  background-color: ${COLORS.white.$500};
  border-radius: 16px;
  min-width: 663px;
  min-height: 633px;
  padding: 19px;
  button {
    background-color: #0a0a23;
    color: #fff;
    border: none;
    border-radius: 20px;
    padding: 15px;
    width: 91%;
    margin-left: 18px;
  }
`;

const Form = styled.div`
  max-width: 296px;
  margin: 0 auto;
`;

export { Contanier, Wrapper, Icons, Form, Title };
