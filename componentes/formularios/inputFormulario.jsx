// src/componentes/formularios/InputFormulario.jsx
import styled from "@emotion/styled";
import InputGenerico from "../generales/inputGenerico";

const Grupo = styled.div`
margin-top:14px;
`;
const Etiqueta = styled.label`
  display:block; 
  color: var(--colorSecundario);
  font-weight:700; 
  font-size:15px; 
  margin:0 0 6px;
`;

export default function InputFormulario({ titulo, placeholder, name, type = "text" }) {
  return (
    <Grupo>
      <Etiqueta>{titulo}</Etiqueta>
      <InputGenerico name={name} type={type} placeholder={placeholder} />
    </Grupo>
  );
}
