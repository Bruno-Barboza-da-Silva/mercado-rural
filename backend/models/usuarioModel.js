const {DataTypes} = require('sequelize');
const sequelize = require('../config/sequelize');

const usuarios = sequelize.define("usuarios", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        senha: {
            type: DataTypes.STRING
        },
        createdAt: {
            type: DataTypes.DATE,
            field: "created_at"
        },
        updatedAt:{
            type: DataTypes.DATE,
            field: "updated_at"
        }
    }, 
    {
        tableName: "usuarios",
        timestamps: true,
        createdAt: "createdAt",
        updatedAt: "updatedAt"
    }
    );

module.exports = usuarios;