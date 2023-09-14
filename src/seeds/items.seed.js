const Item = require ('../api/models/items.model');
const mongoose = require('mongoose');

const arrayItems = [
    {
        "name": "Potion",
        "price": 10,
        "effect": "Recover50HP",
        "class": "Heal",
        "image": "",
        "description": "A potion that recovers 50 HP to a battler"
    },
    {
        "name": "Antidote",
        "price": 15,
        "effect": "HealPoison",
        "class": "Heal",
        "image": "",
        "description": "Heal poison status to one battler"
    },
    {
        "name": "Meat",
        "price": 20,
        "effect": "PowerAttack",
        "class": "PowerUp",
        "image": "",
        "description": "Increase attack of a battler during battle"
    },
    {
        "name": "Key",
        "price": 0,
        "effect": "None",
        "class": "Important",
        "image": "",
        "description": "A key that can oper a door"
    }
]


mongoose.connect("mongodb+srv://root:root@cluster0.oc2ykpm.mongodb.net/RPG?retryWrites=true&w=majority")
.then(async () => {
    const allItems = await Item.find()
    if(allItems.length > 0){
        await Item.collection.drop()
        console.log('Removed items')
    }
})
.catch(err => console.error('Error deleting',err))
.then(async() => {
    const itemsMap = arrayItems.map((item) => new Item(item))
    await Item.insertMany(itemsMap)
    console.log('Added items');
})
.catch(err => console.error('Error adding',err))
.finally(() => mongoose.disconnect());