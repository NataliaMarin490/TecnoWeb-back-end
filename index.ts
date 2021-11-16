import conectarBD from "./db/db";
import { UserModel } from "./models/user";
import {
  Enum_EstadoUsuario,
  Enum_Rol,
  Enum_TipoObjetivo,
} from "./models/enums";
import { ProjectModel } from "./models/projects";
import { ObjectId } from "mongoose";
import { ObjectiveModel } from "./models/objectives";

//Metodologia one to many #1
const crearProyectoConObj = async () => {
  const usuarioInicial = await UserModel.create({
    nombre: "Natalia",
    apellido: "Marin",
    correo: "nm@gmail.com",
    identificacion: "1234",
    rol: Enum_Rol.administrador,
    estado: Enum_EstadoUsuario.autorizado,
  });

  const proyectoCreado = await ProjectModel.create({
    nombre: "Proyecto MINTIC 2022",
    fechaInicio: new Date(2021 / 12 / 34),
    fechaFin: new Date(2022 / 12 / 34),
    presupuesto: 200000,
    lider: usuarioInicial._id,
  });

  const objetivoGeneral = await ObjectiveModel.create({
    descripcion: "OBJ general",
    tipo: Enum_TipoObjetivo.general,
    proyecto: proyectoCreado._id,
  });

  const objetivoEspecifico1 = await ObjectiveModel.create({
    descripcion: "OBJ Especifico 1",
    tipo: Enum_TipoObjetivo.especifico,
    proyecto: proyectoCreado._id,
  });

  const objetivoEspecifico2 = await ObjectiveModel.create({
    descripcion: "OBJ Especifico 2",
    tipo: Enum_TipoObjetivo.especifico,
    proyecto: proyectoCreado._id,
  });

  console.log("proyecto creado", proyectoCreado);
};

const consultaProyectoConObj = async () => {
  const proyecto = ProjectModel.findOne({ _id: "6193467311afd3ebff1dd311" });

  console.log("Proyecto encontrado", proyecto);

  const objetivos = await ObjectiveModel.find({
    project: "6193467311afd3ebff1dd311",
  });

  console.log("los objetivos son: ", objetivos);

  const proyectoConObj = { ...proyecto, objetivos: objetivos };

  console.log("el proyecto con objetivos es: ", proyectoConObj);
};

//Metodologia ONE 2 Many #2
const crearProyectoConObj2 = async () => {
  const usuarioInicial = await UserModel.create({
    nombre: "Natalia",
    apellido: "Marin",
    correo: "nm@gmail.com",
    identificacion: "1234",
    rol: Enum_Rol.administrador,
    estado: Enum_EstadoUsuario.autorizado,
  });

  const objetivoGeneral = await ObjectiveModel.create({
    descripcion: "OBJ general",
    tipo: Enum_TipoObjetivo.general,
  });

  const objetivoEspecifico1 = await ObjectiveModel.create({
    descripcion: "OBJ Especifico 1",
    tipo: Enum_TipoObjetivo.especifico,
  });

  const objetivoEspecifico2 = await ObjectiveModel.create({
    descripcion: "OBJ Especifico 2",
    tipo: Enum_TipoObjetivo.especifico,
  });

  const proyectoCreado = await ProjectModel.create({
    nombre: "Proyecto MINTIC 2022",
    fechaInicio: new Date(2021 / 12 / 34),
    fechaFin: new Date(2022 / 12 / 34),
    presupuesto: 200000,
    lider: usuarioInicial._id,
    objetivos: [
      objetivoGeneral._id,
      objetivoEspecifico1._id,
      objetivoEspecifico2._id,
    ],
  });

  console.log("proyecto creado", proyectoCreado);
};

const consultarProyectoConObj2 = async () => {
  const proyecto = await ProjectModel.find({ id: "idProyecto" }).populate(
    "objetivos"
  );
  console.log("proyecto encontrado", JSON.stringify(proyecto));
};

//Metodologia one 2 many #3
const crearProyectoConObj3 = async () => {
  const usuarioInicial = await UserModel.create({
    nombre: "Natalia",
    apellido: "Marin",
    correo: "nm@gmail.com",
    identificacion: "1234",
    rol: Enum_Rol.administrador,
    estado: Enum_EstadoUsuario.autorizado,
  });

  const proyectoCreado = await ProjectModel.create({
    nombre: "Proyecto MINTIC 2022",
    fechaInicio: new Date(2021 / 12 / 34),
    fechaFin: new Date(2022 / 12 / 34),
    presupuesto: 200000,
    lider: usuarioInicial._id,
    objetivos: [
      { descripcion: "OBJ general", tipo: Enum_TipoObjetivo.general },
      { descripcion: "OBJ especifico1", tipo: Enum_TipoObjetivo.especifico },
      { descripcion: "OBJ especifico2", tipo: Enum_TipoObjetivo.especifico },
    ],
  });
};

const consultarProyectoConObj3 = async () => {
  const proyectoCreado = await ProjectModel.find({ id: "6193543a24c574d1cdcd8f1d" });
  console.log("proyecto", proyectoCreado);
};

const main = async () => {
  await conectarBD();
};

main();

// CRUD USUARIO
// //Crear un usuario
// UserModel.create({
//   apellido:"Giraldo",
//   correo:"nmm@gmail.com",
//   identificacion:"111",
//   nombre:"Andrea",
//   rol:Enum_Rol.administrador,
// })
//   .then((u) => {
//     console.log("usuario creado", u);
//   })
//   .catch((e) => {
//     console.error("Error creando usuario", e);
//   });

// //Obtener usuarios - consultas
// await UserModel.find({correo:'marinnatalia10m@gmail.c'})
//   .then((u) => {
//     console.log("usuarios", u);
//   })
//   .catch((e) => {
//     console.error("error obteniendo los usuarios", e);
//   });

// //Obtener un solo usuario
// await UserModel.findOne({ identificacion: "1234567" })
//   .then((u) => {
//     console.log("usuario encontrado", u);
//   })
//   .catch((e) => {
//     console.error("error encontrando usuario", e);
//   });

// // Editar un usuario
// await UserModel.findOneAndUpdate(
//   { correo: "marinnatalia10m@gmail.com" },
//   { nombre: "Andrea" }
// )
//   .then((u) => {
//     console.log("usuario actualizado", u);
//   })
//   .catch((e) => {
//     console.error("error editando los usuarios", e);
//   });

// // Eliminar un usuario
// await UserModel.findOneAndDelete(
//   { correo: "marinnatalia10m@gmail.com" },
//   { nombre: "Andrea" }
// )
//   .then((u) => {
//     console.log("usuario eliminado", u);
//   })
//   .catch((e) => {
//     console.error("error eliminando usuario", e);
//   });
