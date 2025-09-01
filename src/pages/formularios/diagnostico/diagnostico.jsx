import { useState } from "react";
import styled from "@emotion/styled";
import BtnGenerico from "../../../../componentes/generales/btnGenerico";
import LayoutCuestionario from "../../../../componentes/formularios/layoutFormulario";
import { SELECTS_PASO1, PARAMETROS, OPCIONES_PARAM } from "./opcionesDiagnostico";
import InputFormularioTexto from "../../../../componentes/formularios/inputFormTexto";
import InputFormNumerico from "../../../../componentes/formularios/inputFormNumerico";
import InputFormDespleg from "../../../../componentes/formularios/inputFormDespleg";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Grupo = styled.div`
  margin-top: 14px;
`;

const Grid = styled.div`
  display:grid;
  grid-template-columns: repeat(3, minmax(120px, 1fr));
  gap: 12px;
  max-width: 565px;
  margin: 0 auto;
`;

const initParametros = Object.fromEntries(
  PARAMETROS.map((p) => [p.id, "DESEABLE"])
);

export default function Diagnostico() {
  const [paso, setPaso] = useState(1);
  const [form, setForm] = useState({
    //VISTA 1
    alias: "",
    telefono: "",
    email: "",
    ubicacion: "",

    tipo: SELECTS_PASO1[0].opciones[0],
    objetivo: SELECTS_PASO1[1].opciones[0],
    uso: SELECTS_PASO1[2].opciones[0],
    condicion: SELECTS_PASO1[3].opciones[0],

    superficie: { desde: "", hasta: "" },
    presupuesto: { desde: "", hasta: "" },

    //VISTA 2
    parametros: initParametros,
    habitaciones: "",
    niveles: "",
    banos: "",

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  // específico para los 15 parámetros
  const setParametro = (name, value) => {
    setForm((f) => ({ ...f, parametros: { ...f.parametros, [name]: value } }));
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
          <BtnGenerico onClick={() => console.log("Diagnóstico > Paso 2:", form)}>
            <span style={{ fontSize: 18, lineHeight: 0 }}>✓</span>
            <span>ENCONTRAR</span>
          </BtnGenerico>
        )
      }
    >
      {paso === 1 ? (
        <>
          <Grupo>
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
          </Grupo>


          <Grupo>
            <Grid>
              {SELECTS_PASO1.map(({ name, titulo, opciones }) => (
                <InputFormDespleg
                  key={name}
                  titulo={titulo}
                  name={name}
                  opciones={opciones}
                  value={form[name]}
                  onChange={handleChange}
                />
              ))}
            </Grid>
          </Grupo>

          <Grupo>
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
          </Grupo>
        </>
      ) : (
        <>
          <ArrowBackIcon
            onClick={() => setPaso(1)}
            style={{
              position: "absolute",
              left: "16px",
              top: "32px",
              cursor: "pointer",
              color: "black",
              fontSize: 28,
              "&:hover": { color: "var(--colorSecundario)", transform: "scale(1.1)" }
            }}
          />
          <Grupo>
            <Grid>
              {PARAMETROS.map((p) => (
                <InputFormDespleg
                  key={p.id}
                  titulo={p.titulo}
                  name={p.id}
                  opciones={OPCIONES_PARAM}
                  value={form.parametros[p.id]}
                  onChange={(e) => setParametro(p.id, e.target.value)}
                />
              ))}
            </Grid>
          </Grupo>

          <Grupo style={{ marginTop: 16 }}>
            <Grid>
              <InputFormularioTexto
                titulo="HABITACIONES"
                name="habitaciones"
                type="number"
                placeholder="0"
                value={form.habitaciones}
                onChange={handleChange}
              />
              <InputFormularioTexto
                titulo="NIVELES"
                name="niveles"
                type="number"
                placeholder="0"
                value={form.niveles}
                onChange={handleChange}
              />
              <InputFormularioTexto
                titulo="BAÑOS"
                name="banos"
                type="number"
                placeholder="0"
                value={form.banos}
                onChange={handleChange}
              />
            </Grid>
          </Grupo>
        </>
      )}
    </LayoutCuestionario>
  );
}