import styled from "@emotion/styled";

const BtnGenerico = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;

  background: #F2C08D;
  border: none;
  border-radius: 12px;

  height: 40px;
  padding: 0 18px;
  cursor: pointer;

  color: var(--ColorPrincipal);
  font-weight: 800;
  font-size: 11px;
  letter-spacing: 0.4px;
  margin-top: auto;
  bottom: 0px;
`;


BtnGenerico.defaultProps = { type: "button" };

export default BtnGenerico;