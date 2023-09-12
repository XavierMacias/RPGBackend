const express = require("express");

const {getAllMagics,getMagicByID,postMagic,deleteMagic} = require("../controllers/magics.controller");
//const { pruebaMiddleware, isAuth, isAdmin } = require("../../middlewares/auth");
const magicRouter = express.Router();

magicRouter.get("/", getAllMagics);
magicRouter.get('/:id', getMagicByID);
magicRouter.post("/", postMagic);
magicRouter.delete("/:id", deleteMagic);

module.exports = magicRouter;