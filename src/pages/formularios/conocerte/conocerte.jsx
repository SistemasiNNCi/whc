// src/paginas/formularios/conocerte/conocerte.jsx
import { useState, useMemo } from "react";
import styled from "@emotion/styled";
import LayoutCuestionario from "../../../../componentes/formularios/layoutFormulario";
import InputFormularioTexto from "../../../../componentes/formularios/inputFormTexto";

import BtnGenerico from "../../../../componentes/generales/btnGenerico";
import InputFormDespleg from "../../../../componentes/formularios/inputFormDespleg";

const TxtGenerico = styled.p`
  opacity: 0.85;
  font-size: 14px;
  line-height: 1.45;
  text-transform: uppercase;
  color: var(--colorPrincipal);
`;

const Etiqueta = styled.div`
  font-weight: 700;
  margin-top: 6px;
  margin-bottom: 4px;
  color: var(--colorSecundario);
`;

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
        alias: "",
        telefono: "",
        email: "",
        autorizo: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: value }));
    };

    const validoPaso1 = useMemo(() => {
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
                    <BtnGenerico onClick={() => setPaso(2)} disabled={!validoPaso1}>
                        <span style={{ fontSize: 18, lineHeight: 0 }}>➜</span>
                        <span>SIGUIENTE</span>
                    </BtnGenerico>
                ) : (
                    <>
                        <BtnGenerico onClick={() => setPaso(1)}>Anterior</BtnGenerico>
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
                            <Etiqueta>AUTORIZACIÓN</Etiqueta>

                            <TxtGenerico>
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
                    <Grid2>
                        <Grupo>
                            <Etiqueta>Edad</Etiqueta>
                            <InputFormDespleg
                                name="edad"
                                value={form.edad}
                                onChange={handleChange}
                                opciones={[
                                    "18 a 29",
                                    "30 a 44",
                                    "45 a 54",
                                    "55 a 64",
                                    "65+"
                                ]}
                            />
                        </Grupo>

                        <Grupo>
                            <Etiqueta>Estudios</Etiqueta>
                            <InputFormDespleg
                                name="estudios"
                                value={form.estudios}
                                onChange={handleChange}
                                opciones={[
                                    "Básica",
                                    "Media Superior",
                                    "Superior",
                                    "No aplica"
                                ]}
                            />
                        </Grupo>

                        <Grupo>
                            <Etiqueta>Rango Ocupantes</Etiqueta>
                            <InputFormDespleg
                                name="rangoOcupantes"
                                value={form.rangoOcupantes}
                                onChange={handleChange}
                                opciones={[
                                    "1 a 5",
                                    "6 a 10",
                                    "10+"
                                ]}
                            />
                        </Grupo>

                        <Grupo>
                            <Etiqueta>Mascotas</Etiqueta>
                            <InputFormDespleg
                                name="mascotas"
                                value={form.mascotas}
                                onChange={handleChange}
                                opciones={[
                                    "Exóticos",
                                    "Domésticos",
                                    "Silvestres",
                                    "No aplica"
                                ]}
                            />
                        </Grupo>

                        <Grupo>
                            <Etiqueta>Finanzas</Etiqueta>
                            <InputFormDespleg
                                name="finanzas"
                                value={form.finanzas}
                                onChange={handleChange}
                                opciones={[
                                    "Próspera",
                                    "Igual",
                                    "Cautelosa",
                                    "Recuperación",
                                    "Conflicto"
                                ]}
                            />
                        </Grupo>

                    </Grid2>
                </>
            )}
        </LayoutCuestionario>
    );
}
