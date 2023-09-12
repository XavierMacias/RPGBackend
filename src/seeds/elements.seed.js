const Element = require ('../api/models/elements.model');
const mongoose = require('mongoose');

const arrayElements = [
    {
        "name": "Water",
        "weaknesses": ["Grass","Thunder"],
        "resistances": ["Fire","Water","Ice","Poison"],
        "inmunities": []
    },
    {
        "name": "Fire",
        "weaknesses": ["Water","Ground","Wind"],
        "resistances": ["Fire","Grass","Ice"],
        "inmunities": []
    },
    {
        "name": "Grass",
        "weaknesses": ["Fire","Ice"],
        "resistances": ["Grass","Water","Poison"],
        "inmunities": []
    },
    {
        "name": "Thunder",
        "weaknesses": ["Ground","Grass"],
        "resistances": ["Thunder","Water","Light"],
        "inmunities": []
    },
    {
        "name": "Ground",
        "weaknesses": ["Water","Ice"],
        "resistances": ["Fire","Poison","Light"],
        "inmunities": ["Thunder"]
    },
    {
        "name": "Ice",
        "weaknesses": ["Fire","Water"],
        "resistances": ["Ice","Grass","Ground"],
        "inmunities": []
    },
    {
        "name": "Wind",
        "weaknesses": ["Thunder","Ice"],
        "resistances": ["Grass"],
        "inmunities": ["Ground"]
    },
    {
        "name": "Poison",
        "weaknesses": ["Ground","Dark"],
        "resistances": ["Light","Grass"],
        "inmunities": ["Poison"]
    },
    {
        "name": "Neutral",
        "weaknesses": ["Dark"],
        "resistances": [],
        "inmunities": []
    },
    {
        "name": "Light",
        "weaknesses": ["Poison","Light"],
        "resistances": ["Dark"],
        "inmunities": []
    },
    {
        "name": "Dark",
        "weaknesses": ["Light"],
        "resistances": ["Grass","Fire","Water","Thunder","Poison","Wind","Ground","Ice"],
        "inmunities": ["Neutral"]
    }
]


mongoose.connect("mongodb+srv://root:root@cluster0.oc2ykpm.mongodb.net/RPG?retryWrites=true&w=majority")
.then(async () => {
    const allElements = await Element.find()
    if(allElements.length > 0){
        await Element.collection.drop()
        console.log('Removed elements')
    }
})
.catch(err => console.error('Error deleting',err))
.then(async() => {
    const elementsMap = arrayElements.map((element) => new Element(element))
    await Element.insertMany(elementsMap)
    console.log('Added elements');
})
.catch(err => console.error('Error adding',err))
.finally(() => mongoose.disconnect());