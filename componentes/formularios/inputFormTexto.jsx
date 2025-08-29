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

export default function InputFormularioTexto({
  titulo,
  placeholder,
  name,
  type = "text",
  value,
  onChange,
  id,
}) {
  const inputId = id ?? name;

  return (
    <Grupo>
      <Etiqueta htmlFor={inputId}>{titulo}</Etiqueta>
      <InputGenerico
        id={inputId}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Grupo>
  );
}
