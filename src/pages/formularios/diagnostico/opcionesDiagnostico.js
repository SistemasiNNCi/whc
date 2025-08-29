// Opciones de selects del proyecto (reusables)
export const TIPO_PROPIEDAD = ["OFICINA", "CASA"];
export const OBJETIVO = ["VENDER", "RENTAR"];
export const USO_SUELO = ["VACACIÓN", "TRABAJO"];
export const CONDICION = ["NUEVO", "USADO"];

// Etiquetas de parámetros del Paso 2
export const PARAMETROS = [
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

// (Opcional) helper para futuros <SelectGenerico>
export const toOptions = (arr) => arr.map((v) => ({ value: v, label: v }));
