const express = require("express");

const {getAllItems,getItemByID,postItem,deleteItem} = require("../controllers/items.controller");
//const { pruebaMiddleware, isAuth, isAdmin } = require("../../middlewares/auth");
const itemRouter = express.Router();

itemRouter.get("/", getAllItems);
itemRouter.get('/:id', getItemByID);
itemRouter.post("/", postItem);
itemRouter.delete("/:id", deleteItem);

module.exports = itemRouter;