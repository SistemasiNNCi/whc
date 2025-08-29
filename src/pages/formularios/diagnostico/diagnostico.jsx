import { useState } from "react";
import styled from "@emotion/styled";
import BtnGenerico from "../../../../componentes/generales/btnGenerico";
import InputGenerico from "../../../../componentes/generales/inputGenerico";
import LayoutCuestionario from "../../../../componentes/formularios/layoutFormulario";
import { PARAMETROS, TIPO_PROPIEDAD, OBJETIVO, USO_SUELO, CONDICION } from "./opcionesDiagnostico";
import InputFormulario from "../../../../componentes/formularios/inputFormTexto";
import InputFormularioTexto from "../../../../componentes/formularios/inputFormTexto";
import InputFormNumerico from "../../../../componentes/formularios/inputFormNumerico";

/* Campos*/
const Grupo = styled.div`
  margin-top: 14px;
`;

const Etiqueta = styled.label`
  display: block;
  color: var(--colorSecundario);
  font-weight: 800;
  font-size: 15px;
  margin: 0 0 6px;
`;

const EtiquetaParametro = styled.label`
  display:block;
  color:#010101;
  font-weight:400;
  font-size:15px;
  margin:0 0 6px;
`;

const EntradaNumero = styled.input`
  width: 80px;
  height: 39px;
  padding: 0 10px;
  border: 1px solid #D3D7E0;
  border-radius: 8px;
  outline: none;
  font-size: 15px;
  color: #010101;
  &:focus { border-color: var(--colorPrincipal); }
`;

const GridParametros = styled.div`
  display:grid;
  grid-template-columns: repeat(3, minmax(120px, 1fr));
  gap: 12px;
  max-width: 514px;
  margin: 0 auto;
`;

const Select = styled.select`
  width: 180px;
  max-width: 100%;
  height: 39px;

  padding: 0 10px;
  border: 1px solid #D3D7E0;
  border-radius: 8px;
  outline: none;

  background: #fff;
  font-size: 15px;
  color: #010101;

  &:focus {
    border-color: var(--colorPrincipal);
  }
`;

const Fila3 = styled.div` 
  display:grid; 
  grid-template-columns:repeat(3,minmax(120px,1fr)); 
  gap:12px; 
  max-width:565px; 
`;

const Fila2 = styled.div` 
  display:grid; 
  grid-template-columns:repeat(2,minmax(160px,1fr)); 
  gap:12px; 
  max-width:565px; 

`;

const ContenedorLayout = styled.div``;
const ContenedorDatosGenerales = styled.div``;
const ContenedorSelectores = styled.div``;
const ContenedorNumericos = styled.div``;
const ContenedorParametrosSelect = styled.div``;
const ContenedorParametrosNumericos = styled.div``;

function ParametroSelect({ titulo, valor = "DESEABLE", onChange }) {
  return (
    <div>
      <EtiquetaParametro>{titulo}</EtiquetaParametro>
      <Select
        defaultValue={valor}
        onChange={onChange}
        aria-label={titulo}
      >
        <option>ESENCIAL</option>
        <option>DESEABLE</option>
        <option>NO APLICA</option>
      </Select>
    </div>
  );
}

export default function Diagnostico() {
  const [paso, setPaso] = useState(1);
  const [form, setForm] = useState({
    alias: "",
    telefono: "",
    email: "",
    ubicacion: "",
    superficie: { desde: "", hasta: "" },
    presupuesto: { desde: "", hasta: "" },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  return (
    <LayoutCuestionario
      titulo="DIAGNOSTICA TU INVERSIÓN"
      subtitulo="COMPLETA ESTE DIAGNÓSTICO PARA AYUDARTE A ENCONTRAR LAS PROPIEDADES QUE MEJOR SE AJUSTEN A TU PERFIL COMO INVERSIONISTA."
      footer={
        paso === 1 ? (
          <BtnGenerico onClick={() => { console.log("Diagnóstico > Paso 1:", form); setPaso(2); }}>
            <span style={{ fontSize: 18, lineHeight: 0 }}>➜</span>
            <span>SIGUIENTE</span>
          </BtnGenerico>
        ) : (
          <BtnGenerico onClick={() => console.log('ENCONTRAR')}>
            <span style={{ fontSize: 18, lineHeight: 0 }}>✓</span>
            <span>ENCONTRAR</span>
          </BtnGenerico>
        )
      }
    >
      {paso === 1 ? (
        <ContenedorLayout>
          <ContenedorDatosGenerales>
            <InputFormularioTexto
              titulo="PSEUDÓNIMO"
              name="alias"
              placeholder="PUEDE SER UN NOMBRE, APODO, ETC..."
              value={form.alias}
              onChange={handleChange}
            />
            <InputFormularioTexto
              titulo="NÚMERO DE TELÉFONO/CELULAR"
              name="telefono"
              type="tel"
              placeholder="INGRESA UN NUMERO DE CONTACTO"
              value={form.telefono}
              onChange={handleChange}
            />
            <InputFormularioTexto
              titulo="CORREO ELECTRÓNICO"
              name="email"
              type="email"
              placeholder="INGRESA UN CORREO DE CONTACTO"
              value={form.email}
              onChange={handleChange}
            />
            <InputFormularioTexto
              titulo="UBICACIÓN"
              name="ubicacion"
              placeholder="¿EN QUÉ ESTADO TE INTERESA BUSCAR?"
              value={form.ubicacion}
              onChange={handleChange}
            />
          </ContenedorDatosGenerales>

          <ContenedorSelectores>
            <Grupo>
              <Fila3>
                <div>
                  <Etiqueta>TIPO PROPIEDAD</Etiqueta>
                  <Select defaultValue={TIPO_PROPIEDAD[0]}>
                    {TIPO_PROPIEDAD.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                  </Select>
                </div>

                <div>
                  <Etiqueta>OBJETIVO</Etiqueta>
                  <Select defaultValue={OBJETIVO[0]}>
                    {OBJETIVO.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                  </Select>
                </div>

                <div>
                  <Etiqueta>USO DE SUELO</Etiqueta>
                  <Select defaultValue={USO_SUELO[0]}>
                    {USO_SUELO.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                  </Select>
                </div>

                <div>
                  <Etiqueta>CONDICIÓN</Etiqueta>
                  <Select defaultValue={CONDICION[0]}>
                    {CONDICION.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                  </Select>
                </div>
              </Fila3>
            </Grupo>
          </ContenedorSelectores>

          <ContenedorNumericos>
            <InputFormNumerico
              titulo="SUPERFICIE"
              name="superficie"
              value={form.superficie}
              onChange={(next) => setForm((f) => ({ ...f, superficie: next }))}
            />
            <InputFormNumerico
              titulo="PRESUPUESTO"
              name="presupuesto"
              value={form.presupuesto}
              onChange={(next) => setForm((f) => ({ ...f, presupuesto: next }))}
            />
          </ContenedorNumericos>
        </ContenedorLayout>
      ) : (
        <>
          <Grupo><Etiqueta>PARÁMETROS</Etiqueta></Grupo>

          <ContenedorParametrosSelect>
            <GridParametros>
              {PARAMETROS.map((label) => (
                <ParametroSelect key={label} titulo={label} />
              ))}
            </GridParametros>
          </ContenedorParametrosSelect>

          <ContenedorParametrosNumericos>
            <Grupo style={{ marginTop: 16 }}>
              <GridParametros>
                <div>
                  <EtiquetaParametro>HABITACIONES</EtiquetaParametro>
                  <EntradaNumero type="number" min="0" placeholder="0" inputMode="numeric" />
                </div>
                <div>
                  <EtiquetaParametro>NIVELES</EtiquetaParametro>
                  <EntradaNumero type="number" min="0" placeholder="0" inputMode="numeric" />
                </div>
                <div>
                  <EtiquetaParametro>BAÑOS</EtiquetaParametro>
                  <EntradaNumero type="number" min="0" placeholder="0" inputMode="numeric" />
                </div>
              </GridParametros>
            </Grupo>
          </ContenedorParametrosNumericos>
        </>
      )}
    </LayoutCuestionario>
  );


}
