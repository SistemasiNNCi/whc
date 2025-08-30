// Opciones de selects del proyecto (reusables)
export const TIPO_PROPIEDAD = ["OFICINA", "CASA"];
export const OBJETIVO = ["VENDER", "RENTAR"];
export const USO_SUELO = ["VACACIÓN", "TRABAJO"];
export const CONDICION = ["NUEVO", "USADO"];

export const SELECTS_PASO1 = [
  { name: "tipo",      titulo: "TIPO PROPIEDAD", opciones: TIPO_PROPIEDAD },
  { name: "objetivo",  titulo: "OBJETIVO",       opciones: OBJETIVO },
  { name: "uso",       titulo: "USO DE SUELO",   opciones: USO_SUELO },
  { name: "condicion", titulo: "CONDICIÓN",      opciones: CONDICION },
];

export const OPCIONES_PARAM = ["ESENCIAL", "DESEABLE", "NO APLICA"];
export const PARAMETROS = [
  { id: "exterior_amplio",   titulo: "EXTERIOR AMPLIO" },
  { id: "interior_amplio",   titulo: "INTERIOR AMPLIO" },
  { id: "luz_natural",       titulo: "LUZ NATURAL" },
  { id: "areas_verdes",      titulo: "AREAS VERDES" },
  { id: "materiales",        titulo: "MATERIALES" },
  { id: "diseno_abierto",    titulo: "DISEÑO ABIERTO" },
  { id: "seguridad",         titulo: "SEGURIDAD" },
  { id: "servicios_basicos", titulo: "SERVICIOS BASICOS" },
  { id: "restaurantes",      titulo: "RESTAURANTES" },
  { id: "campo_golf",        titulo: "CAMPO GOLF" },
  { id: "gimnasio",          titulo: "GIMNASIO" },
  { id: "sala_de_cine",      titulo: "SALA DE CINE" },
  { id: "piscina",           titulo: "PISCINA" },
  { id: "gasolineras",       titulo: "GASOLINERAS" },
  { id: "plaza_comercial",   titulo: "PLAZA COMERCIAL" },
];

export const toOptions = (arr) => arr.map((v) => ({ value: v, label: v }));

