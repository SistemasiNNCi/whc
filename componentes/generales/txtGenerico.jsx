// componentes/generales/txtGenerico.jsx
import styled from "@emotion/styled";

export const TxtGenerico = styled.p`
  font-size: ${(p) => p.size || "14px"};
  line-height: ${(p) => p.lineHeight || "1.45"};
  text-transform: ${(p) => (p.uppercase ? "uppercase" : "none")};
  color: ${(p) => p.color || "var(--colorPrincipal)"};
  margin: ${(p) => p.margin || "6px 0 10px"};
  text-align: ${(p) => (p.justify ? "justify" : "left")};
`;
