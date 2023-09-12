const express = require("express");

const {getAllBattlers,getBattlerByID,postBattler,deleteBattler,putBattler} = require("../controllers/battlers.controller");
//const { pruebaMiddleware, isAuth, isAdmin } = require("../../middlewares/auth");
const battlerRouter = express.Router();

battlerRouter.get("/", getAllBattlers);
battlerRouter.get('/:id', getBattlerByID);
battlerRouter.post("/", postBattler);
battlerRouter.delete("/:id", deleteBattler);
battlerRouter.put("/:id", putBattler);

module.exports = battlerRouter;