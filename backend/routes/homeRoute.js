const express = require("express");
const homeRoute = express.Router();

homeRoute.get("/", (req, res)=>{
    res.status(200).json({message: "Home Route"})
});

module.exports = homeRoute;