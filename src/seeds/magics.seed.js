const Magic = require ('../api/models/magics.model');
const mongoose = require('mongoose');

const arrayMagics = [
    {
        "name": "Bubble",
        "element": "64fb9d389bc363c79c2f673d", // water
        "power": 40,
        "accuracy": 100,
        "magicPoints": 4,
        "category": "Magical",
        "target": "OneEnemy",
        "effect": "None",
        "description": "A little bubble that attack an enemy"
    },
    {
        "name": "Ember",
        "element": "64fb9d389bc363c79c2f673e", // fire
        "power": 40,
        "accuracy": 100,
        "magicPoints": 5,
        "category": "Magical",
        "target": "OneEnemy",
        "effect": "None",
        "description": "A little flame that attack an enemy"
    },
    {
        "name": "Thorns",
        "element": "64fb9d389bc363c79c2f673f", // grass
        "power": 35,
        "accuracy": 100,
        "magicPoints": 3,
        "category": "Magical",
        "target": "AdjacentEnemies",
        "effect": "None",
        "description": "A thorns that hurts enemies"
    },
    {
        "name": "Electrocute",
        "element": "64fb9d389bc363c79c2f6740", // thunder
        "power": 50,
        "accuracy": 100,
        "magicPoints": 5,
        "category": "Magical",
        "target": "AdjacentEnemies",
        "effect": "None",
        "description": "An electrical wave that attack enemies"
    },
    {
        "name": "Throw rocks",
        "element": "64fb9d389bc363c79c2f6741", // ground
        "power": 55,
        "accuracy": 90,
        "magicPoints": 6,
        "category": "Physical",
        "target": "AllEnemies",
        "effect": "None",
        "description": "Throw small rocks to enemies"
    },
    {
        "name": "Snow",
        "element": "64fb9d389bc363c79c2f6742", // ice
        "power": 40,
        "accuracy": 100,
        "magicPoints": 4,
        "category": "Magical",
        "target": "AdjacentEnemies",
        "effect": "None",
        "description": "An small snow storm that hurts enemies"
    },
    {
        "name": "Breeze",
        "element": "64fb9d389bc363c79c2f6743", // wind
        "power": 40,
        "accuracy": 100,
        "magicPoints": 5,
        "category": "Magical",
        "target": "AllEnemies",
        "effect": "None",
        "description": "A breeze that hurts enemies"
    },
    {
        "name": "Venom",
        "element": "64fb9d389bc363c79c2f6744", // poison
        "power": 30,
        "accuracy": 90,
        "magicPoints": 4,
        "category": "Magical",
        "target": "OneEnemy",
        "effect": "PoisonEnemy",
        "description": "Can poison enemy"
    },
    {
        "name": "Smash",
        "element": "64fb9d389bc363c79c2f6745", // neutral
        "power": 40,
        "accuracy": 100,
        "magicPoints": 2,
        "category": "Physical",
        "target": "OneEnemy",
        "effect": "None",
        "description": "A destructive punch"
    },
    {
        "name": "Sparkle",
        "element": "64fb9d389bc363c79c2f6746", // light
        "power": 40,
        "accuracy": 100,
        "magicPoints": 6,
        "category": "Magical",
        "target": "AllEnemies",
        "effect": "None",
        "description": "A brilliant attack to enemies"
    },
    {
        "name": "Shadow",
        "element": "64fb9d389bc363c79c2f6747", // dark
        "power": 40,
        "accuracy": 100,
        "magicPoints": 6,
        "category": "Magical",
        "target": "OneEnemy",
        "effect": "None",
        "description": "A misterious vortice of dark energy"
    }
]


mongoose.connect("mongodb+srv://root:root@cluster0.oc2ykpm.mongodb.net/RPG?retryWrites=true&w=majority")
.then(async () => {
    const allMagics = await Magic.find()
    if(allMagics.length > 0){
        await Magic.collection.drop()
        console.log('Removed magics')
    }
})
.catch(err => console.error('Error deleting',err))
.then(async() => {
    const magicsMap = arrayMagics.map((magic) => new Magic(magic))
    await Magic.insertMany(magicsMap)
    console.log('Added magics');
})
.catch(err => console.error('Error adding',err))
.finally(() => mongoose.disconnect());