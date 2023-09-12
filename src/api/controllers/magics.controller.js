const Magic = require('../models/magics.model');

const getAllMagics = async(req,res) => {
    try {
        const allMagics = await Magic.find().populate('element', {"name": 1});
        return res.status(200).json(allMagics);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getMagicByID = async(req,res) => {
    try {
        const {id}=req.params;
        const magicById = await Magic.findById(id).populate('element', {"name": 1});
        return res.status(200).json(magicById);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const postMagic = async(req,res) => {
    try {
        const newMagic = new Magic(req.body);
        const createdMagic = await newMagic.save();
        return res.status(201).json(createdMagic);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const deleteMagic = async(req,res) => {
    try {
        const {id} = req.params;
        const deletedMagic = await Magic.findByIdAndDelete(id);
        if(!deletedMagic){
            return res.status(404).json({message: "This ID does not exist"});
        }
        return res.status(200).json(deletedMagic);
        
    } catch (error) {
        return res.status(500).json(error);
    }

}

module.exports = {getAllMagics,getMagicByID,postMagic,deleteMagic}