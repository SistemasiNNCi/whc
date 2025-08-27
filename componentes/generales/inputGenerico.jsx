import styled from "@emotion/styled";

const InputGenerico = styled.input`
  width: 565px;
  max-width: 100%;
  height: 39px;
  padding: 0 12px;
  border: 1px solid #D3D7E0;
  border-radius: 8px;
  outline: none;

  font-size: 15px;
  font-weight: 400;
  color: #010101;

  &::placeholder {
    color: #010101;
    opacity: 0.65;
  }

  &:focus {
    border-color: var(--ColorPrincipal);
  }
`;

export default InputGenerico;