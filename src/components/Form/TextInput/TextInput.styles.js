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
  padding: 15px;

  @media screen and (min-width: 900px) {
  }
`;

const Error = styled.span`
  color: red;
  font-size: 12px;
  padding-left: 1rem;
  margin-top: 0.5rem;
`;

export { Contanier, Label, Input, Error };
