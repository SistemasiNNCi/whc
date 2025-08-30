import styled from "@emotion/styled";
import ContenedorFormulario from "./contenedorFormulario";

const Encabezado = styled.div`
  color: var(--colorPrincipal);
  padding: 12px 20px 10px;
  margin: 0 0 12px;
`;
const Titulo = styled.h2`
margin:0;
font-weight:800 !important;
font-size:30px;
text-align:center;
font-family: "Montserrat", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif !important; 
`;
const Subtitulo = styled.p`
margin:6px 0 0;
font-weight:600;
font-size:12px;
color:var(--colorSecundario);
text-align:center;
font-family: "Montserrat", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
`;

const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 0;        
  overflow-y: auto;     
  padding-bottom: 12px; 
`;

const Pie = styled.div`
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  padding-top: 12px;
`;

export default function LayoutCuestionario({ titulo, subtitulo, children, footer }) {
  return (
    <ContenedorFormulario>
      <Encabezado>
        <Titulo>{titulo}</Titulo>
        {subtitulo ? <Subtitulo>{subtitulo}</Subtitulo> : null}
      </Encabezado>

      <Contenido>{children}</Contenido>
      {footer ? <Pie>{footer}</Pie> : null}
    </ContenedorFormulario>
  );
}
