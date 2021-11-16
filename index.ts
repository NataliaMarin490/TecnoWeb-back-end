import conectarBD from "./db/db";
import { UserModel } from "./models/user";
import { Enum_Rol, Enum_TipoObjetivo } from "./models/enums";
import { getParsedCommandLineOfConfigFile } from "typescript";
import { ProjectModel } from "./models/projects";
import { ObjectId } from "mongoose";
import { ObjectiveModel } from "./models/objectives";

const main = async () => {
  await conectarBD();

  // const object = await ObjectiveModel.create({
  //   descripcion: "Este es el objetivo especifico",
  //   tipo: Enum_TipoObjetivo.especifico,
  // });

  ProjectModel.create({
    nombre: "Proyecto 2",
    presupuesto: 120,
    fechaInicio: Date.now(),
    fechaFin: new Date("2022/11/10"),
    lider: "61931568be021e190ca4968e",
    objetivos: ["619328dbe654a235887a91a9", "619329128b52ec8a828017d7"],
  });

  //  const proyecto: any = await ProjectModel.find({ nombre: "Proyecto 2" }).populate("lider");
  //  console.log("El proyecto es: ", proyecto, proyecto[0].lider);

  // const lider = await UserModel.find({ _id: proyecto[0].lider });
  // console.log("El lider es: ", lider);
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
