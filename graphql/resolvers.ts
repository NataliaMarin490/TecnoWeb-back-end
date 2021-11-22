import { resolverAvance } from "../models/avances/resolver";
import { resolverProyecto } from "../models/proyecto/resolvers";
import { resolverUsuario } from "../models/usuario/resolvers";

export const resolvers = [resolverProyecto, resolverUsuario, resolverAvance];
