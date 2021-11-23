import { resolverAvance } from "../models/avances/resolver.js";
import { resolverInscripciones } from "../models/inscripcion/resolvers.js";
import { resolverProyecto } from "../models/proyecto/resolvers.js";
import { resolverUsuario } from "../models/usuario/resolvers.js";

export const resolvers = [resolverProyecto, resolverUsuario, resolverAvance, resolverInscripciones];
