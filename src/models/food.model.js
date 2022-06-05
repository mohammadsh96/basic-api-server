
"use strict";
const Food = (sequelize, DataTypes) =>
    sequelize.define("Food", {
        FoodId: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        FoodType: {
            type: DataTypes.STRING,
        },
    });

module.exports = Food;
