const express = require("express");

const {getAllCreatures,getCreatureByID,postCreature,deleteCreature} = require("../controllers/creatures.controller");
//const { pruebaMiddleware, isAuth, isAdmin } = require("../../middlewares/auth");
const creatureRouter = express.Router();

creatureRouter.get("/", getAllCreatures);
creatureRouter.get('/:id', getCreatureByID);
creatureRouter.post("/", postCreature);
creatureRouter.delete("/:id", deleteCreature);

module.exports = creatureRouter;