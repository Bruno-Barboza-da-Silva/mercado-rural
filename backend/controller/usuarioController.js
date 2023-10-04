const ClientsModel = require("../models/usuarioModel");
const sequelize = require("../config/sequelize");
sequelize.sync();

const usuarioController = {
  index: async (request, response) => {
    await ClientsModel.create({
      nome: request.body.nome,
      email: request.body.email,
      senha: request.body.senha,
    });
  },
};


module.exports = usuarioController;