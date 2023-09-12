const express = require("express");

const {getAllTeams,getTeamByID,postTeam,deleteTeam} = require("../controllers/teams.controller");
//const { pruebaMiddleware, isAuth, isAdmin } = require("../../middlewares/auth");
const teamRouter = express.Router();

teamRouter.get("/", getAllTeams);
teamRouter.get('/:id', getTeamByID);
teamRouter.post("/", postTeam);
teamRouter.delete("/:id", deleteTeam);

module.exports = teamRouter;