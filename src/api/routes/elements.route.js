const express = require("express");

const {getAllElements,getElementByID,postElement,deleteElement} = require("../controllers/elements.controller");
//const { pruebaMiddleware, isAuth, isAdmin } = require("../../middlewares/auth");
const elementRouter = express.Router();

elementRouter.get("/", getAllElements);
elementRouter.get('/:id', getElementByID);
elementRouter.post("/", postElement);
elementRouter.delete("/:id", deleteElement);

module.exports = elementRouter;