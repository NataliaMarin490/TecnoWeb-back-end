enum Enum_Rol {
  estudiante = "Estudiante",
  lider = "Líder",
  administrador = "Administrador",
}

enum Enum_EstadoUsuario {
  pendiente = "Pendiente",
  autorizado = "Autorizado",
  no_autorizado = "No Autorizado",
}

enum Enum_EstadoProyecto {
  activo = "Activo",
  inactivo = "Inactivo",
}

enum Enum_FaseProyecto {
  iniciado = "Iniciado",
  desarrollo = "En Desarrollo",
  termiando = "Terminado",
  nula = "nula",
}

enum Enum_TipoObjetivo {
  general = "General",
  especifico = "Específico",
}

enum Enum_EstadoInscripcion {
  aceptada = "Aceptada",
  rechazada = "Rechazada",
}

export {
  Enum_Rol,
  Enum_EstadoUsuario,
  Enum_EstadoProyecto,
  Enum_FaseProyecto,
  Enum_TipoObjetivo,
  Enum_EstadoInscripcion,
};
