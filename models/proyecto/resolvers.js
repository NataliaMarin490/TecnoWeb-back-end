import { ProjectModel } from "./proyecto.js";

const resolverProyecto = {
  Query: {
    Proyectos: async (parent, args) => {
      const proyectos = await ProjectModel.find()
        .populate("lider")
        .populate("avances")
        .populate("inscripciones");
      return proyectos;
    },
  },

  Mutation: {
    crearProyecto: async (parent, args) => {
      const proyectoCreado = await ProjectModel.create({
        nombre: args.nombre,
        estado: args.estado,
        fase: args.fase,
        fechaInicio: args.fechaInicio,
        fechaFin: args.fechaFin,
        presupuesto: args.presupuesto,
        objetivos: args.objetivos,
        lider: args.lider,
      });
      return proyectoCreado;
    },
  },
};

export { resolverProyecto };
