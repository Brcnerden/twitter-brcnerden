import styled from "@emotion/styled";

const SubmitButton = styled.button`
  background-color: ${({ typeColor }) =>
    typeColor
      ? "red"
      : "blue"}; // renkleri okumuyor ama font size da kullanabildim ?
  width: 100%;
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;
  border-radius: 30px;
  border: 0;
  font-size: 15px;
  font-weight: 500;
`;

export { SubmitButton };
