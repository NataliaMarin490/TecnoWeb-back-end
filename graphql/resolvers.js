import { resolverAvance } from "../models/avances/resolver.js";
import { resolverProyecto } from "../models/proyecto/resolvers.js";
import { resolverUsuario } from "../models/usuario/resolvers.js";

export const resolvers = [resolverProyecto, resolverUsuario, resolverAvance];
