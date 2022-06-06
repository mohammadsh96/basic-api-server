"use strict";
require('dotenv').config();
const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;
const { Sequelize, DataTypes } = require("sequelize");
const Food = require("./food.model.js");
const Clothes = require("./clothes.model.js");
let sequelizeOptions =
    process.env.NODE_ENV === "production"
        ? {
            dialect: 'postgres',
            protocol: 'postgres',
            dialectOptions: {
               ssl: { require: true, rejectUnauthorized: false},  
                native: true
            }
        } : {};

let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);
module.exports = {
    db: sequelize,
    Food: Food(sequelize, DataTypes),
    Clothes: Clothes(sequelize, DataTypes)
};
