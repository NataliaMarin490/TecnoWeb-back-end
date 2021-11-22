import { ModeloAvance } from "./avance.js";

const resolverAvance = {
  Query: {
    Avances: async (parent, args) => {
      const avances = await ModeloAvance.find()
        .populate("proyecto")
        .populate("creadoPor");
      return avances;
    },
    filtrarAvance: async (parents, args) => {
      const avanceFiltrado = await ModeloAvance.find({
        proyecto: args.idProyecto
      })
        .populate("proyecto")
        .populate("creadoPor");
        return avanceFiltrado;
    },
  },
  Mutation: {
    crearAvance: async (parent, args) => {
      const avanceCreado = ModeloAvance.create({
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
