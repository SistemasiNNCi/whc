export const EDAD = ["18 a 29", "30 a 44", "45 a 54", "55 a 64", "65+"];
export const ESTUDIOS = ["Básica", "Media Superior", "Superior", "No aplica"];
export const RANGO_OCUPANTES = ["1 a 5", "6 a 10", "10+"];
export const MASCOTAS = ["Exóticos", "Domésticos", "Silvestres", "No aplica"];
export const FINANZAS = [
  "Próspera",
  "Igual",
  "Cautelosa",
  "Recuperación",
  "Conflicto",
];
export const RELAJARSE = [
  "Espectáculos culturales",
  "Espectáculos deportivos",
  "Actividades físicas",
  "Actividad social",
  "Eventos familiares",
  "Viajar",
  "Cocinar",
  "Jardinería",
  "Descansar en casa",
];
export const SELECTS_CONOCERTE = [
  { name: "edad", titulo: "EDAD", opciones: EDAD },
  { name: "estudios", titulo: "ESTUDIOS", opciones: ESTUDIOS },
  { name: "rangoOcupantes", titulo: "RANGO OCUPANTES", opciones: RANGO_OCUPANTES },
  { name: "mascotas", titulo: "MASCOTAS", opciones: MASCOTAS },
  { name: "finanzas", titulo: "FINANZAS", opciones: FINANZAS },
  { name: "sueloRelajarme", titulo: "¿SUELE RELAJARSE?", opciones: RELAJARSE },
];

// ARREGLOS PARA LAS 8 PREGUNTAS DE OPCION UNICA PARA LA TABLA CON Material UI
export const PREGUNTAS_RADIOGRID = [
  // ¿QUÉ LO MOTIVA A INVERTIR?
  {
    nombre: "motivaInvertir",
    titulo: "¿QUÉ LO MOTIVA A INVERTIR?",
    columnas: ["Indiferente", "Me motiva", "Es mi meta"],
    filas: [
      "Diversificación de ingresos",
      "Diversificación de inversiones",
      "Plusvalía de la inversión",
      "Cercanía con familia/amigos",
      "Gusto personal",
    ],
  },

  // ¿CÓMO SE DISTRIBUYEN SUS INGRESOS?
  {
    nombre: "distribucionIngresos",
    titulo: "¿CÓMO SE DISTRIBUYEN SUS INGRESOS?",
    columnas: ["Menos del 30%", "Del 30 al 60%", "Más del 60%", "No aplica"],
    filas: [
      "Inversiones",
      "Comercio formal",
      "Comercio informal",
      "Herencia",
      "Sueldos y salarios",
      "Sorteos",
    ],
  },

  // ¿QUÉ ZONAS DE INVERSIÓN SON DE SU PREFERENCIA?
  {
    nombre: "zonasPreferencia",
    titulo: "¿QUÉ ZONAS DE INVERSIÓN SON DE SU PREFERENCIA?",
    columnas: ["No me interesa", "Me interesa", "Es mi meta"],
    filas: ["Noroeste", "Norte", "Bajío", "Centro", "CDMX", "Sureste"],
  },

  // ¿QUÉ TIPO DE LOCALIDADES SON DE SU PREFERENCIA?
  {
    nombre: "localidadesPreferencia",
    titulo: "¿QUÉ TIPO DE LOCALIDADES SON DE SU PREFERENCIA?",
    columnas: ["No me interesa", "Me interesa", "Es mi meta"],
    filas: ["Rural", "Semi-urbana", "Urbana"],
  },

  // ¿QUÉ ESTACIONES DEL AÑO PREFIERE?
  {
    nombre: "estacionesPreferidas",
    titulo: "¿QUÉ ESTACIONES DEL AÑO PREFIERE?",
    columnas: ["Indiferente", "Me gusta", "Mi favorita"],
    filas: ["Primavera", "Verano", "Otoño", "Invierno"],
  },

  // ¿QUÉ ES LO MÁS IMPORTANTE PARA USTED?
  {
    nombre: "masImportante",
    titulo: "¿QUÉ ES LO MÁS IMPORTANTE PARA USTED?",
    columnas: ["No me interesa", "Deseado", "Importante", "Es mi meta"],
    filas: [
      "Lujo y exclusividad",
      "Entretenimiento y ocio",
      "Vida nocturna",
      "Ambiente familiar",
      "Cultura y tradición",
      "Paz y tranquilidad",
      "Privacidad y seguridad",
      "Cercanía a áreas verdes",
    ],
  },

  // ¿QUÉ TIPO DE AMBIENTE PREFIERE?
  {
    nombre: "ambientePreferido",
    titulo: "¿QUÉ TIPO DE AMBIENTE PREFIERE?",
    columnas: ["Indiferente", "Me gusta", "Mi favorito", "Quiero conocerlo"],
    filas: [
      "Cálido",
      "Acogedor",
      "Relajante",
      "Moderno",
      "Sofisticado",
      "Rústico",
      "Minimalista",
    ],
  },

  // ¿QUÉ ESTILOS ARQUITECTÓNICOS SON DE SU PREFERENCIA?
  {
    nombre: "estilosArquitectonicos",
    titulo: "¿QUÉ ESTILOS ARQUITECTÓNICOS SON DE SU PREFERENCIA?",
    columnas: [
      "No me interesa",
      "Me interesa",
      "Es mi meta",
      "No lo conozco y me interesa",
    ],
    filas: [
      "Contemporáneo",
      "Clásico",
      "Moderno",
      "Mediterráneo",
      "Minimalista",
      "Colonial",
      "Rústico | Cottage",
      "Sostenible",
    ],
  },
];
