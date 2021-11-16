import { Schema, model } from "mongoose";
import { Enum_TipoObjetivo } from "./enums";
import { ProjectModel } from "./projects";

interface Objective {
  descripcion: string;
  tipo: Enum_TipoObjetivo;
}

const objectiveSchema = new Schema<Objective>({
  descripcion: {
    type: String,
    require: true,
  },
  tipo: {
    type: String,
    enum: Enum_TipoObjetivo,
    require: true,
  },
});

const ObjectiveModel = model("Objetivo", objectiveSchema);
export { ObjectiveModel };
