"use strict";
const Clothes = (sequelize, DataTypes) =>
    sequelize.define("Clothes", {
        ClothesType: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        Season: {
            type: DataTypes.STRING,
        },
    });

module.exports = Clothes;