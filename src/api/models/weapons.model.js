const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const weaponsSchema = new Schema (
    {
        name: {type: String, required: true},
        element: {type: Schema.Types.ObjectId, ref: 'element', required: true},
        price: {type: Number, required: true},
        statsChange: [{type: Number, required: true}],
        category: {type: String, default: "Physical", enum: ["Physical", "Magical"]},
        class: {type: String, default: "Weapon", enum: ["Weapon", "Shield", "Armor", "Helmet", "Accessory"]},
        effect: {type: String, required: true},
        image: {type: String},
        description: {type: String}
    }, {
        timestamps: true
    }
)

const Weapon = mongoose.model('weapon', weaponsSchema);

module.exports = Weapon;