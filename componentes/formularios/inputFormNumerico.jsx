import styled from "@emotion/styled";
import InputGenerico from "../generales/inputGenerico";

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
const Fila2 = styled.div`
  display:grid; 
  grid-template-columns:repeat(2, minmax(160px,1fr));
  gap:12px; max-width:565px;
`;

export default function InputFormNumerico({
  titulo,
  name,
  value = { desde: "", hasta: "" },
  onChange,
  placeholderDesde = "DESDE",
  placeholderHasta = "HASTA",
}) {
  const handleDesde = (e) => onChange?.({ ...value, desde: e.target.value });
  const handleHasta = (e) => onChange?.({ ...value, hasta: e.target.value });

  return (
    <Grupo>
      <Etiqueta htmlFor={`${name}-desde`}>{titulo}</Etiqueta>
      <Fila2>
        <InputGenerico
          id={`${name}-desde`}
          type="number"
          inputMode="numeric"
          placeholder={placeholderDesde}
          value={value.desde ?? ""}
          onChange={handleDesde}
        />
        <InputGenerico
          id={`${name}-hasta`}
          type="number"
          inputMode="numeric"
          placeholder={placeholderHasta}
          value={value.hasta ?? ""}
          onChange={handleHasta}
        />
      </Fila2>
    </Grupo>
  );
}
