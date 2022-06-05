'use strict'; 
require('dotenv').config();
const PORT = process.env.PORT || 3030;
const express = require("express");
const app = express();
const notFoundHandler = require("./handlers/404");
const errorHandler = require("./handlers/500");
const FoodRouter = require("./routes/food.route");
const ClothesRouter = require("./routes/clothes.route");
app.use(express.json());



app.use(ClothesRouter);
app.use(FoodRouter);
app.use("*", notFoundHandler);

app.use(errorHandler); 


function start(PORT) {
    app.listen(PORT, () => {
        console.log(`Listen and Running on port ${PORT}`);
    });
}

module.exports = {
    app: app,
    start: start,
};