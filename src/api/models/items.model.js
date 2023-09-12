const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemsSchema = new Schema (
    {
        name: {type: String, required: true},
        price: {type: Number, required: true},
        effect: {type: String, required: true},
        class: {type: String, default: "Heal", enum: ["Heal", "PowerUp", "Important"]},
        image: {type: String},
        description: {type: String}
    }, {
        timestamps: true
    }
)

const Item = mongoose.model('item', itemsSchema);

module.exports = Item;