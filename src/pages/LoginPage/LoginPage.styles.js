import styled from "@emotion/styled";

const SingButton = styled.button`
  width: 100%;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;
  border-radius: 30px;
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
  color: #fff;
  border: 0;
  font-size: 15px;
  font-weight: 500;
`;

const ErrorButton = styled.span`
  color: red;
`;
const ForgetPassword = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  > p {
    margin: 25px;
  }
  @media (max-width: 600px) {
    display: block;
    margin: 13px;
    a {
      margin: 24px;
    }
  }
`;
export { SingButton, LoginButton, ErrorButton, ForgetPassword };
