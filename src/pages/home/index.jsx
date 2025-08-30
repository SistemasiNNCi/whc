import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import BtnGenerico from "../../../componentes/generales/btnGenerico";


const Wrapper = styled.div`
  max-width: 720px;
  margin: 40px auto;
  text-align: center;
`;

const Titulo = styled.h1`
  margin: 0 0 16px;
  color: var(--colorPrincipal);
  font-weight: 800;
`;

const Botonera = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`;

export default function Home() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Titulo>Formularios para WHC</Titulo>
      <Botonera>
        <BtnGenerico onClick={() => navigate("/formularios/diagnostico")}>
          Diagnostica tu inversión
        </BtnGenerico>
        <BtnGenerico onClick={() => navigate("/formularios/ganancia")}>
          Calcula tu ganancia
        </BtnGenerico>
        <BtnGenerico onClick={() => navigate("/formularios/conocerte")}>
          Queremos Conocerte
        </BtnGenerico>
      </Botonera>
    </Wrapper>
  );
}
