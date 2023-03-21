import styled from "@emotion/styled";
import { COLORS } from "../../theme/colors";

const Container = styled.div`
  background-color: ${COLORS.gray.$500};
  width: 100vm;
  height: 100vh;
`;

const Form = styled.div`
  background-color: ${COLORS.white.$500};
  padding: 30px 120px;
  min-width: 550px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  text-align: center;
`;

const SingButton = styled.button`
  width: 100%;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;
  border-radius: 30px;
`;
export { Container, Form, SingButton };
