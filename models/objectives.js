import mongoose from "mongoose";
import { Enum_TipoObjetivo } from "./enums/enums.js";
import { ProjectModel } from "./proyecto/proyecto.js";

const { Schema, model } = mongoose;

const objectiveSchema = new Schema({
  descripcion: {
    type: String,
    require: true,
  },
  tipo: {
    type: String,
    enum: ["GENERAL", "ESPECIFICO"],
    require: true,
  },
});

const ObjectiveModel = model("Objetivo", objectiveSchema);
export { ObjectiveModel };
