"use strict";
const express = require("express");

const { Food } = require("../models/index");
const FoodRouter = express.Router();

FoodRouter.get("/food", getFood);
FoodRouter.get("/food/:id", getOneFood);
FoodRouter.post("/food", createFood);
FoodRouter.put("/food/:id", updateFood);
FoodRouter.delete("/food/:id", deleteFood);

async function getFood(req, res) {
    const allFood = await Food.findAll();
    console.log("helloooo")
    res.status(200).json(allFood);
}


async function getOneFood(req, res) {
    const foodId = parseInt(req.params.id);
    let person = await Food.findOne({ where: { id: foodId } });
    res.status(200).json(person);
}


async function createFood(req, res) {
    let newFood = req.body;
    let FoodId = await Food.create(newFood);
    res.status(201).json(FoodId);
}

async function updateFood(req, res) {
    
    let foodId = parseInt(req.params.id);
    let updateFood = req.body; 
    
    let foundFood = await Food.findOne({ where: { id: foodId } });
    if (foundFood) {

        let updatedFood = await foundFood.update(updateFood);
        res.status(201).json(updatedFood);
    } else {

        res.status(404);
    }
}
async function deleteFood(req, res) {
    
    let foodId = parseInt(req.params.id);
    let deleteFood = await Food.destroy({ where: { id: foodId } });
res.status(204).json(deleteFood); 
}
module.exports = FoodRouter;