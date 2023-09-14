const Creature = require('../models/creatures.model');
//const { deleteFile } = require('../../middlewares/delete.file');

const getAllCreatures = async(req,res) => {
    try {
        const allCreatures = await Creature.find().populate('element1', {"name": 1})
                                                    .populate('element2', {"name": 1})
                                                    .populate('magics', {"name": 1})
                                                    .populate('posibleWeapons', {"name": 1});
        return res.status(200).json(allCreatures);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getCreatureByID = async(req,res) => {
    try {
        const {id}=req.params;
        const creatureById = await Creature.findById(id).populate('element1', {"name": 1})
                                                        .populate('element2', {"name": 1})
                                                        .populate('magics', {"name": 1})
                                                        .populate('posibleWeapons', {"name": 1});
        return res.status(200).json(creatureById);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const postCreature = async(req,res) => {
    try {
        const newCreature = new Creature(req.body);
        if(req.file){
            newCreature.image = req.file.path;
        }
        const createdCreature = await newCreature.save();
        return res.status(201).json(createdCreature);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const deleteCreature = async(req,res) => {
    try {
        const {id} = req.params;
        const deletedCreature = await Creature.findByIdAndDelete(id);
        if(!deletedCreature){
            return res.status(404).json({message: "This ID does not exist"});
        }
        return res.status(200).json(deletedCreature);
        
    } catch (error) {
        return res.status(500).json(error);
    }

}

module.exports = {getAllCreatures,getCreatureByID,postCreature,deleteCreature}