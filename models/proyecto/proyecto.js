import mongoose from "mongoose";
//import { ObjectiveModel } from "../objectives";
import { UserModel } from "../usuario/usuario.js";

const { Schema, model } = mongoose;

const projectSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  presupuesto: {
    type: Number,
    required: true,
  },
  fechaInicio: {
    type: Date,
    required: true,
  },
  fechaFin: {
    type: Date,
    required: true,
  },
  estado: {
    type: String,
    enum: ["ACTIVO", "INACTIVO"],
    default: "INACTIVO",
  },
  fase: {
    type: String,
    enum: ["INICIADO", "DESARROLLO", "TERMINADO", "NULO"],
    default: "NULO",
  },
  lider: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: UserModel,
  },
  objetivos: [
    {
      descripcion: {
        type: String,
        required: true,
      },
      tipo: {
        type: String,
        enum: ["GENERAL", "ESPECIFICO"],
        required: true,
      },
    },
  ],
});

const ProjectModel = model("Proyecto", projectSchema);

export { ProjectModel };
