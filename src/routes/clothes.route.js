"use strict";
const express = require("express");

const { Clothes } = require("../models/index");
const ClothesRouter = express.Router();

ClothesRouter.get("/clothes", getClothes);
ClothesRouter.get("/clothes/:id", getOneClothes);
ClothesRouter.post("/clothes", createClothes);
ClothesRouter.put("/clothes/:id", updateClothes);
ClothesRouter.delete("/clothes/:id", deleteClothes);

async function getClothes(req, res) {
    const allClothes = await Clothes.findAll();
    console.log("helloooo")
    res.status(200).json(allClothes);
}


async function getOneClothes(req, res) {
    const ClothesId = parseInt(req.params.id);
    let Dress = await Clothes.findOne({ where: { id: ClothesId } });
    res.status(200).json(Dress);
}


async function createClothes(req, res) {
    let newDress = req.body;
    let ClothesId = await Clothes.create(newDress);
    res.status(201).json(ClothesId);
}

async function updateClothes(req, res) {
    
    let ClothesId = parseInt(req.params.id);
    let updateClothes = req.body; 
    
    let foundClothes = await Clothes.findOne({ where: { id: ClothesId } });
    if (foundClothes) {

        let updatedClothes = await foundClothes.update(updateClothes);
        res.status(201).json(updatedClothes);
    } else {

        res.status(404);
    }
}
async function deleteClothes(req, res) {
    
    let ClothesId = parseInt(req.params.id);
    let deleteClothes = await Clothes.destroy({ where: { id: ClothesId } });
res.status(204).json(deleteClothes); 
}
module.exports = ClothesRouter;