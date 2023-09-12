const express = require("express");

const {getAllWeapons,getWeaponByID,postWeapon,deleteWeapon} = require("../controllers/weapons.controller");
//const { pruebaMiddleware, isAuth, isAdmin } = require("../../middlewares/auth");
const weaponRouter = express.Router();

weaponRouter.get("/", getAllWeapons);
weaponRouter.get('/:id', getWeaponByID);
weaponRouter.post("/", postWeapon);
weaponRouter.delete("/:id", deleteWeapon);

module.exports = weaponRouter;