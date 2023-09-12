const Element = require('../models/elements.model');

const getAllElements = async(req,res) => {
    try {
        const allElements = await Element.find();
        return res.status(200).json(allElements);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getElementByID = async(req,res) => {
    try {
        const {id}=req.params;
        const elementById = await Element.findById(id);
        return res.status(200).json(elementById);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const postElement = async(req,res) => {
    try {
        const newElement = new Element(req.body);
        const createdElement = await newElement.save();
        return res.status(201).json(createdElement);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const deleteElement = async(req,res) => {
    try {
        const {id} = req.params;
        const deletedElement = await Element.findByIdAndDelete(id);
        if(!deletedElement){
            return res.status(404).json({message: "This ID does not exist"});
        }
        return res.status(200).json(deletedElement);
        
    } catch (error) {
        return res.status(500).json(error);
    }

}

module.exports = {getAllElements,getElementByID,postElement,deleteElement}