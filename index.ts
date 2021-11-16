import conectarBD from "./db/db";
import { UserModel } from "./models/user";
import { Enum_Rol } from "./models/enums";

const main = async () => {
  await conectarBD();

  //Crear un usuario
    UserModel.create({
      apellido:"Pamplona",
      correo:"juanpamplona@gmail.com",
      identificacion:"4321",
      nombre:"Juan",
      rol:Enum_Rol.administrador,
    })
      .then((u) => {
        console.log("usuario creado", u);
      })
      .catch((e) => {
        console.error("Error creando usuario", e);
      });

  //Obtener usuarios - conssultas
  await UserModel.find({correo:'marinnatalia10m@gmail.c'})
    .then((u) => {
      console.log("usuarios", u);
    })
    .catch((e) => {
      console.error("error obteniendo los usuarios", e);
    });
};

main();
