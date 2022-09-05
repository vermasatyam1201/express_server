var express = require('express');
var CarApp = express.Router();
const {myCars,createCar,myCarByNumber,deleteCar,updateCar}=require("../Controllers/CarAppController");
const auth=require("../Middlewares/auth")

CarApp.get("/",auth , myCars);
CarApp.post("/",auth , createCar);
CarApp.get("/:registration_number",auth , myCarByNumber);
CarApp.delete("/:id",auth , deleteCar)
CarApp.put("/:id",auth , updateCar)

module.exports = CarApp;
 