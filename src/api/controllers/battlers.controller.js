const Battler = require('../models/battlers.model');
//const { deleteFile } = require('../../middlewares/delete.file');

const getAllBattlers = async(req,res) => {
    try {
        const allBattlers = await Battler.find();
        return res.status(200).json(allBattlers);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getBattlerByID = async(req,res) => {
    try {
        const {id}=req.params;
        const battlerById = await Battler.findById(id);
        return res.status(200).json(battlerById);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const postBattler = async(req,res) => {
    try {
        const newBattler = new Battler(req.body);
        if(req.file){
            newBattler.image = req.file.path;
        }
        const createdBattler = await newBattler.save();
        return res.status(201).json(createdBattler);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const deleteBattler = async(req,res) => {
    try {
        const {id} = req.params;
        const deletedBattler = await Battler.findByIdAndDelete(id);
        if(!deletedBattler){
            return res.status(404).json({message: "This ID does not exist"});
        }
        return res.status(200).json(deletedBattler);
        
    } catch (error) {
        return res.status(500).json(error);
    }

}

const putBattler = async(req,res) => {
    try {
        const {id} = req.params;
        const putBattler = new Battler(req.body);
        putBattler._id = id;        
        const updatedBattler = await Battler.findByIdAndUpdate(id, putBattler)
        if(!updatedBattler){
            return res.status(404).json({message: "This id does not exist"});
        }
        return res.status(200).json(updatedBattler);
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = {getAllBattlers,getBattlerByID,postBattler,deleteBattler,putBattler}