// src/paginas/formularios/conocerte/conocerte.jsx
import { useState, useMemo } from "react";
import styled from "@emotion/styled";
import LayoutCuestionario from "../../../../componentes/formularios/layoutFormulario";
import InputFormularioTexto from "../../../../componentes/formularios/inputFormTexto";
import { TxtGenerico } from "../../../../componentes/generales/txtGenerico";
import BtnGenerico from "../../../../componentes/generales/btnGenerico";
import InputFormDespleg from "../../../../componentes/formularios/inputFormDespleg";
import { SELECTS_CONOCERTE, PREGUNTAS_RADIOGRID } from "./opcionesConocerte";
import RadioGrid from "../../../../componentes/generales/radioGrid";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Grupo = styled.div`
  margin-top: 14px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(220px, 1fr));
  gap: 12px;
  max-width: 720px;
  margin: 0 auto;
`;
//(esto de aqui es temporal, no usare 2 grids pero es para rapido)
const Grid2 = styled.div`
  display:grid;
  grid-template-columns: repeat(3, minmax(120px, 1fr));
  gap: 12px;
  max-width: 565px;
  margin: 0 auto;
`;

const Checkbox = styled.label`
  display: flex;
  color: var(--varSecundario);
  align-items: center;
  gap: 10px;
  padding: 0 12px;
  border-radius: 10px;
  background: #fff;
  border: 1px solid var(--colorBorde);
  cursor: pointer;
  user-select: none;
  input { transform: scale(1.15); }
`;

export default function Conocerte() {
    const [paso, setPaso] = useState(1);
    const [form, setForm] = useState({
        //VISTA 1
        alias: "",
        telefono: "",
        email: "",
        autorizo: false,

        //VISTA 2
        edad: "",
        estudios: "",
        rangoOcupantes: "",
        mascotas: "",
        finanzas: "",
        sueloRelajarme: "",
        motivaInvertir: {},
        distribucionIngresos: {},
        zonasPreferencia: {},
        localidadesPreferencia: {},
        estacionesPreferidas: {},
        masImportante: {},
        ambientePreferido: {},
        estilosArquitectonicos: {},
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: value }));
    };

    const handleRadioGridChange = (nombre, fila, col) => {
        setForm((f) => ({
            ...f,
            [nombre]: { ...f[nombre], [fila]: col },
        }));
    };

    const validarVista1 = useMemo(() => {
        const emailOk = /^\S+@\S+\.\S+$/.test(form.email);
        const telOk = String(form.telefono || "").trim().length > 0;
        return form.alias.trim() !== "" && telOk && emailOk && form.autorizo === true;
    }, [form]);

    const enviar = () => {
        console.log("Conocerte :: payload", form);
        alert("¡Gracias! Hemos recibido tus datos.");
    };

    return (
        <LayoutCuestionario
            titulo="¡QUEREMOS CONOCERTE!"
            subtitulo="AYÚDANOS A ENTENDER MEJOR LO QUE BUSCAS PARA OFRECERTE UNA MEJOR EXPERIENCIA."
            paginaActual={paso}
            paginasTotales={2}
            footer={
                paso === 1 ? (
                    <BtnGenerico onClick={() => setPaso(2)} disabled={!validarVista1}>
                        <span style={{ fontSize: 18, lineHeight: 0 }}>➜</span>
                        <span>SIGUIENTE</span>
                    </BtnGenerico>
                ) : (
                    <>
                        <BtnGenerico onClick={enviar}>
                            <span style={{ fontSize: 18, lineHeight: 0 }}>✓</span>
                            <span>TERMINAR</span>
                        </BtnGenerico>
                    </>
                )
            }
        >
            {paso === 1 && (
                <>
                    <Grid>
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
                        </Grupo>

                        <Grupo>
                            <TxtGenerico size="15px" color="var(--colorSecundario)" uppercase margin="0 0 6px">USO DE DATOS PERSONALES</TxtGenerico>
                            <TxtGenerico justify>
                                AUTORIZO A WELCOME HOME CONNECTIONS S.A. DE C.V. A UTILIZAR MIS
                                DATOS PARA PERSONALIZAR MI EXPERIENCIA, TRATARLOS CON
                                CONFIDENCIALIDAD Y NO COMPARTIRLOS CON TERCEROS NO RELACIONADOS.
                                EN CASO NEGATIVO, POR FAVOR ABANDONE EL CUESTIONARIO.
                            </TxtGenerico>

                            <Checkbox as="label">
                                <input
                                    type="checkbox"
                                    name="autorizo"
                                    checked={form.autorizo}
                                    onChange={(e) =>
                                        setForm((f) => ({ ...f, autorizo: e.target.checked }))
                                    }
                                />
                                <TxtGenerico>SÍ AUTORIZO</TxtGenerico>
                            </Checkbox>
                        </Grupo>
                    </Grid>
                </>
            )}
            {paso === 2 && (
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
                        <Grid2>
                            {SELECTS_CONOCERTE.map(({ name, titulo, opciones }) => (
                                <InputFormDespleg
                                    key={name}
                                    titulo={titulo}
                                    name={name}
                                    value={form[name]}
                                    onChange={handleChange}
                                    opciones={opciones}
                                />
                            ))}
                        </Grid2>
                    </Grupo>
                    <Grupo>
                        {PREGUNTAS_RADIOGRID.map((preg) => (
                            <RadioGrid
                                key={preg.nombre}
                                titulo={preg.titulo}
                                name={preg.nombre}
                                columnas={preg.columnas}
                                filas={preg.filas}
                                value={form[preg.nombre] || {}}
                                onChange={handleRadioGridChange}
                            />
                        ))}
                    </Grupo>
                </>

            )}
        </LayoutCuestionario>
    );
}
