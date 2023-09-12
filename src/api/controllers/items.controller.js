const Item = require('../models/items.model');
//const { deleteFile } = require('../../middlewares/delete.file');

const getAllItems = async(req,res) => {
    try {
        const allItems = await Item.find();
        return res.status(200).json(allItems);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getItemByID = async(req,res) => {
    try {
        const {id}=req.params;
        const itemById = await Item.findById(id);
        return res.status(200).json(itemById);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const postItem = async(req,res) => {
    try {
        const newItem = new Item(req.body);
        if(req.file){
            newItem.image = req.file.path;
        }
        const createdItem = await newItem.save();
        return res.status(201).json(createdItem);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const deleteItem = async(req,res) => {
    try {
        const {id} = req.params;
        const deletedItem = await Item.findByIdAndDelete(id);
        if(!deletedItem){
            return res.status(404).json({message: "This ID does not exist"});
        }
        return res.status(200).json(deletedItem);
        
    } catch (error) {
        return res.status(500).json(error);
    }

}

module.exports = {getAllItems,getItemByID,postItem,deleteItem}