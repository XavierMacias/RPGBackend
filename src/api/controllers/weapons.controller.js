const Weapon = require('../models/weapons.model');
//const { deleteFile } = require('../../middlewares/delete.file');

const getAllWeapons = async(req,res) => {
    try {
        const allWeapons = await Weapon.find().populate('element', {"name": 1});
        return res.status(200).json(allWeapons);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getWeaponByID = async(req,res) => {
    try {
        const {id}=req.params;
        const weaponById = await Weapon.findById(id).populate('element', {"name": 1});
        return res.status(200).json(weaponById);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const postWeapon = async(req,res) => {
    try {
        const newWeapon = new Weapon(req.body);
        if(req.file){
            newWeapon.image = req.file.path;
        }
        const createdWeapon = await newWeapon.save();
        return res.status(201).json(createdWeapon);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const deleteWeapon = async(req,res) => {
    try {
        const {id} = req.params;
        const deletedWeapon = await Weapon.findByIdAndDelete(id);
        if(!deletedWeapon){
            return res.status(404).json({message: "This ID does not exist"});
        }
        return res.status(200).json(deletedWeapon);
        
    } catch (error) {
        return res.status(500).json(error);
    }

}

module.exports = {getAllWeapons,getWeaponByID,postWeapon,deleteWeapon}