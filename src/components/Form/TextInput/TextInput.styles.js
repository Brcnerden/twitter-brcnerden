import styled from "@emotion/styled";

const Contanier = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  padding: 0 16px;
  border-radius: 16px;
`;

const Label = styled.label`
  display: inline-block;
  font-size: 14px;
`;

const Input = styled.input`
  border: 1px solid #5e5b5b;
  border-radius: 20px;
  margin: 0;
`;
export { Contanier, Label, Input };
