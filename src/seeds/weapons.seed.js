const Weapon = require ('../api/models/weapons.model');
const mongoose = require('mongoose');

const arrayWeapons = [
    {
        "name": "Simple sword",
        "element": "64fb9d389bc363c79c2f6745", // physical
        "price": 50,
        "statsChange": [0,0,5,0,0,0,0], // hp, mp, attack, defense, magic, magic defense, speed
        "category": "Physical",
        "class": "Weapon",
        "effect": "None",
        "image": "",
        "description": "A regular sword"
    },
    {
        "name": "Iron Shield",
        "element": "64fb9d389bc363c79c2f6745", // physical
        "price": 250,
        "statsChange": [0,0,0,25,0,0,0], // hp, mp, attack, defense, magic, magic defense, speed
        "category": "Physical",
        "class": "Shield",
        "effect": "None",
        "image": "",
        "description": "A very resistent shield"
    },
    {
        "name": "Acuatic Armor",
        "element": "64fb9d389bc363c79c2f673d", // physical
        "price": 175,
        "statsChange": [0,0,0,18,0,0,0], // hp, mp, attack, defense, magic, magic defense, speed
        "category": "Physical",
        "class": "Armor",
        "effect": "ProtectFire",
        "image": "",
        "description": "Protect of Fire Magic"
    },
    {
        "name": "Magic Hat",
        "element": "64fb9d389bc363c79c2f6746", // physical
        "price": 200,
        "statsChange": [0,0,0,0,0,15,0], // hp, mp, attack, defense, magic, magic defense, speed
        "category": "Magical",
        "class": "Helmet",
        "effect": "ProtectDark",
        "image": "",
        "description": "A magic hat that protects of Dark magic"
    },
    {
        "name": "Gold Ring",
        "element": "64fb9d389bc363c79c2f6745", // physical
        "price": 100,
        "statsChange": [0,0,0,0,10,0,10], // hp, mp, attack, defense, magic, magic defense, speed
        "category": "Magical",
        "class": "Accessory",
        "effect": "None",
        "image": "",
        "description": "A golden ring that increases magic and speed"
    }
]


mongoose.connect("mongodb+srv://root:root@cluster0.oc2ykpm.mongodb.net/RPG?retryWrites=true&w=majority")
.then(async () => {
    const allWeapons = await Weapon.find()
    if(allWeapons.length > 0){
        await Weapon.collection.drop()
        console.log('Removed weapons')
    }
})
.catch(err => console.error('Error deleting',err))
.then(async() => {
    const weaponsMap = arrayWeapons.map((weapon) => new Weapon(weapon))
    await Weapon.insertMany(weaponsMap)
    console.log('Added weapons');
})
.catch(err => console.error('Error adding',err))
.finally(() => mongoose.disconnect());