import styled from "@emotion/styled";

const Grupo = styled.div` 
margin-top:14px;
`;
const Etiqueta = styled.label`
  display:block; 
  color:var(--colorSecundario);
  font-weight:800; 
  font-size:15px; 
  margin:0 0 6px;
`;
const Select = styled.select`
  width: 100%; 
  height: 39px; 
  padding: 0 10px;
  border: 1px solid #D3D7E0; 
  border-radius: 8px; outline: none;
  background:#fff; font-size:15px; 
  color:#010101;
  &:focus { border-color: var(--colorPrincipal); }
`;

export default function InputFormDespleg({
  titulo,
  name,
  value,
  onChange,
  opciones = [],
  id,
}) {
  const inputId = id ?? name;

  return (
    <Grupo>
      <Etiqueta htmlFor={inputId}>{titulo}</Etiqueta>
      <Select id={inputId} name={name} value={value} onChange={onChange}>
        {opciones.map((opt) => {
          const val = typeof opt === "string" ? opt : opt.value;
          const lab = typeof opt === "string" ? opt : opt.label;
          return (
            <option key={val} value={val}>
              {lab}
            </option>
          );
        })}
      </Select>
    </Grupo>
  );
}
