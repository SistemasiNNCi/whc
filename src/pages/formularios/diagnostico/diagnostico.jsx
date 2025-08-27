import { useState } from "react";
import styled from "@emotion/styled";
import BtnGenerico from "../../../../componentes/generales/btnGenerico";
import InputGenerico from "../../../../componentes/generales/inputGenerico";
import ContenedorFormulario from "../../../../componentes/formularios/contenedorFormulario";

/* COLORES */
const AZUL_TITULO = "#002653";
const GRIS_TEXTO = "#252E35";
const BORDE = "#D3D7E0";
const TEXTO_NEGRO = "#010101";
const PARAM_LABELS = [
  "EXTERIOR AMPLIO",
  "INTERIOR AMPLIO",
  "LUZ NATURAL",
  "AREAS VERDES",
  "MATERIALES",
  "DISEÑO ABIERTO",
  "SEGURIDAD",
  "SERVICIOS BASICOS",
  "RESTAURANTES",
  "CAMPO GOLF",
  "GIMNASIO",
  "SALA DE CINE",
  "PISCINA",
  "GASOLINERAS",
  "PLAZA COMERCIAL",
];

/* Layout modal */

/* Encabezado */
const Encabezado = styled.div`
  background: none;
  color: ${AZUL_TITULO};
  border-radius: 12px;

  padding: 18px 20px;
  margin: -24px -24px 20px;
`;

const Titulo = styled.h2`
  margin: 0;
  font-weight: 800;
  font-size: 33px;
  line-height: 1.15;
  letter-spacing: 0.2px;
  text-align: center;
`;

const Subtitulo = styled.p`
  margin: 6px 0 0;
  font-weight: 800;
  font-size: 12px;
  color: ${GRIS_TEXTO};
  opacity: 0.95;
  text-align: center;
`;

/* Campos*/
const Grupo = styled.div`
  margin-top: 14px;
`;

const Etiqueta = styled.label`
  display: block;
  color: ${GRIS_TEXTO};
  font-weight: 800;
  font-size: 15px;
  margin: 0 0 6px;
`;

const EtiquetaParametro = styled.label`
  display:block;
  color:${TEXTO_NEGRO};
  font-weight:400;
  font-size:15px;
  margin:0 0 6px;
`;

const EntradaNumero = styled.input`
  width: 80px;
  height: 39px;
  padding: 0 10px;
  border: 1px solid ${BORDE};
  border-radius: 8px;
  outline: none;
  font-size: 15px;
  color: ${TEXTO_NEGRO};
  &:focus { border-color: ${AZUL_TITULO}; }
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
  border: 1px solid ${BORDE};
  border-radius: 8px;
  outline: none;

  background: #fff;
  font-size: 15px;
  color: #010101;

  &:focus {
    border-color: ${AZUL_TITULO};
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

/* Pie de pagina */
const Pie = styled.div`
  position: static;
  display: flex;
  justify-content: center;
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

  return (
    <ContenedorFormulario>
      <Encabezado>
        <Titulo>DIAGNOSTICA TU INVERSIÓN</Titulo>
        <Subtitulo>COMPLETA ESTE DIAGNÓSTICO PARA AYUDARTE A ENCONTRAR LAS PROPIEDADES QUE MEJOR SE AJUSTEN A TU PERFIL COMO INVERSIONISTA.</Subtitulo>
      </Encabezado>

      {paso === 1 && (
        <ContenedorLayout>
          {/* 1) Datos generales */}
          <ContenedorDatosGenerales>
            <Grupo>
              <Etiqueta>PSEUDÓNIMO</Etiqueta>
              <InputGenerico placeholder="PUEDE SER UN NOMBRE, APODO, ETC..." />
            </Grupo>

            <Grupo>
              <Etiqueta>NÚMERO DE TELÉFONO/CELULAR</Etiqueta>
              <InputGenerico placeholder="INGRESA UN NUMERO DE CONTACTO" type="tel" />
            </Grupo>

            <Grupo>
              <Etiqueta>CORREO ELECTRÓNICO</Etiqueta>
              <InputGenerico placeholder="INGRESA UN CORREO DE CONTACTO" type="email" />
            </Grupo>

            <Grupo>
              <Etiqueta>UBICACIÓN</Etiqueta>
              <InputGenerico placeholder="¿EN QUÉ ESTADO TE INTERESA BUSCAR?" />
            </Grupo>
          </ContenedorDatosGenerales>

          {/* 2) Botones desplegables */}
          <ContenedorSelectores>
            <Grupo>
              <Fila3>
                <div>
                  <Etiqueta>TIPO PROPIEDAD</Etiqueta>
                  <Select defaultValue="OFICINA">
                    <option>OFICINA</option>
                    <option>CASA</option>
                  </Select>
                </div>

                <div>
                  <Etiqueta>OBJETIVO</Etiqueta>
                  <Select defaultValue="VENDER">
                    <option>VENDER</option>
                    <option>RENTAR</option>
                  </Select>
                </div>

                <div>
                  <Etiqueta>USO DE SUELO</Etiqueta>
                  <Select defaultValue="VACACIÓN">
                    <option>VACACIÓN</option>
                    <option>TRABAJO</option>
                  </Select>
                </div>

                <div>
                  <Etiqueta>CONDICIÓN</Etiqueta>
                  <Select defaultValue="NUEVO">
                    <option>NUEVO</option>
                    <option>USADO</option>
                  </Select>
                </div>
              </Fila3>
            </Grupo>
          </ContenedorSelectores>

          {/* 3) Datos numéricos */}
          <ContenedorNumericos>
            <Grupo>
              <Etiqueta>SUPERFICIE</Etiqueta>
              <Fila2>
                <InputGenerico placeholder="DESDE" type="number" inputMode="numeric" />
                <InputGenerico placeholder="HASTA" type="number" inputMode="numeric" />
              </Fila2>
            </Grupo>

            <Grupo>
              <Etiqueta>PRESUPUESTO</Etiqueta>
              <Fila2>
                <InputGenerico placeholder="DESDE" type="number" inputMode="numeric" />
                <InputGenerico placeholder="HASTA" type="number" inputMode="numeric" />
              </Fila2>
            </Grupo>
          </ContenedorNumericos>

          {/* 4) Pie */}
          <Pie>
            <BtnGenerico onClick={() => setPaso(2)}>
              <span style={{ fontSize: 18, lineHeight: 0 }}>➜</span>
              <span>SIGUIENTE</span>
            </BtnGenerico>
          </Pie>
        </ContenedorLayout>
      )}

      {paso === 2 && (
        <>
          <Grupo>
            <Etiqueta>PARÁMETROS</Etiqueta>
          </Grupo>

          {/* 1) Botones desplegables (15) */}
          <ContenedorParametrosSelect>
            <GridParametros>
              {PARAM_LABELS.map((label) => (
                <ParametroSelect key={label} titulo={label} />
              ))}
            </GridParametros>
          </ContenedorParametrosSelect>

          {/* 2) Botones numéricos  */}
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

          {/* Botón encontrar */}
          <Pie>
            <BtnGenerico onClick={() => console.log('ENCONTRAR')}>
              <span style={{ fontSize: 18, lineHeight: 0 }}>✓</span>
              <span>ENCONTRAR</span>
            </BtnGenerico>
          </Pie>
        </>
      )}

    </ContenedorFormulario>
  );
}
