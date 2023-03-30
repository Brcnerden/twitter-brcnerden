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

  > p {
    font-size: 14px;
    margin: 40px 0 50px;
    > a {
      text-decoration: none;
      color: #359cf0;
      margin-left: 100px;
    }
  }
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

const Google = styled.div`
  margin-right: 10px;
`;

const InputPassword = styled.input`
  width: 100%;
  outline: 0;
  border: 1px solid #999;
  padding: 15px 10px;
  border-radius: 4px;
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;
  border-radius: 30px;
  background-color: #000;
  color: #999;
  border: 0;
  font-size: 15px;
  font-weight: 500;
`;

export { Container, Google, Form, SingButton, InputPassword, LoginButton };
