import { gql } from "apollo-server-express";

const tiposUsuario = gql`
  type Usuario {
    _id: ID!
    nombre: String!
    apellido: String!
    identificacion: String!
    correo: String!
    estado: Enum_EstadoUsuario
    rol: Enum_Rol!
  }

  type Query {
    Usuarios: [Usuario]
    Usuario(_id: String): Usuario
  }

  type Mutation {
    crearUsuario(
      nombre: String!
      apellido: String!
      identificacion: String!
      correo: String!
      estado: Enum_EstadoUsuario
      rol: Enum_Rol!
    ): Usuario

    editarUsuario(
      _id: String!
      nombre: String!
      apellido: String!
      identificacion: String!
      correo: String!
      estado: Enum_EstadoUsuario
      rol: Enum_Rol!
    ): Usuario

    eliminarUsuario(_id: String, correo: String): Usuario # tambien se puede ingresar aparte del ID el correo o nombre o identificacion, etc
  }
`;

export { tiposUsuario };
