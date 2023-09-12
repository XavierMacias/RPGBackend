const Team = require('../models/teams.model');
//const { deleteFile } = require('../../middlewares/delete.file');

const getAllTeams = async(req,res) => {
    try {
        const allTeams = await Team.find();
        return res.status(200).json(allTeams);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getTeamByID = async(req,res) => {
    try {
        const {id}=req.params;
        const teamById = await Team.findById(id);
        return res.status(200).json(teamById);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const postTeam = async(req,res) => {
    try {
        const newTeam = new Team(req.body);
        if(req.file){
            newTeam.image = req.file.path;
        }
        const createdTeam = await newTeam.save();
        return res.status(201).json(createdTeam);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const deleteTeam = async(req,res) => {
    try {
        const {id} = req.params;
        const deletedTeam = await Team.findByIdAndDelete(id);
        if(!deletedTeam){
            return res.status(404).json({message: "This ID does not exist"});
        }
        return res.status(200).json(deletedTeam);
        
    } catch (error) {
        return res.status(500).json(error);
    }

}

module.exports = {getAllTeams,getTeamByID,postTeam,deleteTeam}