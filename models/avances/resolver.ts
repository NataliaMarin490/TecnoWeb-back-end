import { ModeloAvance } from "./avance";

const resolverAvance = {
  Query: {
    Avances: async (parent, args) => {
      const avances = await ModeloAvance.find();
      return avances;
    },
  },
  Mutation: {
    crearAvance: async (parent, args) => {
      const avanceCreado = await ModeloAvance.create({
        fecha: args.fecha,
        descripcion: args.descripcion,
        observaciones: args.proyecto,
        proyecto: args.proyecto,
        creradoPor: args.creadoPor,
      });
      return avanceCreado;
    },
  },
};

export { resolverAvance };
