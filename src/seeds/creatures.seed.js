const Creature = require ('../api/models/creatures.model');
const mongoose = require('mongoose');

const arrayCreatures = [
    {
        "name": "Rat",
        "element1": "64fb9d389bc363c79c2f6745", // physical
        "element2": null,
        "statsBase": [10,10,15,8,5,8,20], // hp, mp, attack, defense, magic, magic defense, speed
        "magics": ["64fcfe574e895d916633b853","64fcfe574e895d916633b852"],
        "magicsLevels": [1,10],
        "posibleWeapons": ["64fd6378ac4d780db30a03b1"],
        "experienceRate": 5,
        "moneyRate": 3,
        "image": "",
        "description": "A simple rat. Can't use too much magic power"
    }
]


mongoose.connect("mongodb+srv://root:root@cluster0.oc2ykpm.mongodb.net/RPG?retryWrites=true&w=majority")
.then(async () => {
    const allCreatures = await Creature.find()
    if(allCreatures.length > 0){
        await Creature.collection.drop()
        console.log('Removed creatures')
    }
})
.catch(err => console.error('Error deleting',err))
.then(async() => {
    const creaturesMap = arrayCreatures.map((creature) => new Creature(creature))
    await Creature.insertMany(creaturesMap)
    console.log('Added creatures');
})
.catch(err => console.error('Error adding',err))
.finally(() => mongoose.disconnect());