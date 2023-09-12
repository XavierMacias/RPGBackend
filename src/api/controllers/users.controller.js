const { generateSign } = require("../../utils/jwt");
const { validateEmail, validatePassword, usedEmail } = require("../../utils/validators");
const User = require("../models/users.model");
const bcrypt = require("bcrypt");

const login = async(req, res) => {
    try {
        const userInfo = await User.findOne({username: req.body.username});
        if(!userInfo){
            return res.status(404).json({message: 'Username is not registered'});
        }
        if(userInfo.email != req.body.email){
            return res.status(404).json({message: 'Email is not registered'});
        }
        if(!bcrypt.compareSync(req.body.password, userInfo.password)){
            return res.status(404).json({message: 'Password is incorrect'});
        }
        const token = generateSign(userInfo._id, userInfo.email);
        return res.status(200).json({user:userInfo, token:token});
    } catch (error) {
        return res.status(500).json(error); 
    }
};

const register = async(req, res) => {
    try {
        const newUser = new User(req.body);
        //validarEmail
        if(!validateEmail(newUser.email)){
            return res.status(400).json({message: "Invalid email"})
        }
        //validarPassword
        if(!validatePassword(newUser.password)){
            return res.status(400).json({message: "Invalid pasword"})
        }

        //validar email usado
        if(await usedEmail(newUser.email)){
            return res.status(400).json({message: "Email already used"})
        }
        
        //Encriptar Password
        newUser.password = bcrypt.hashSync(newUser.password, 10);
        const createdUser = await newUser.save();

        return res.status(201).json(createdUser)
    } catch (error) {
        return res.status(500).json(error); 
    }
};

const checkSession = (req, res) => {
    try {
        console.log("entro en try")
        return res.status(201).json(req.user)
    } catch (error) {
        console.log("entro en catch")
        return res.status(500).json(error); 
    }
}

const getUserById = async(req,res)=>{
    try {
        const {id}=req.params;
        const userById = await User.findById(id);
        return res.status(200).json(userById);
    } catch (error) {
        return res.status(500).json(error);
    }
}


module.exports = {login, register, checkSession, getUserById}