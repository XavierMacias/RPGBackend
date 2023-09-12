const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const creaturesSchema = new Schema (
    {
        name: {type: String, required: true},
        element1: {type: Schema.Types.ObjectId, ref: 'element', required: true},
        element2: {type: Schema.Types.ObjectId, ref: 'element'},
        statsBase: [{type: Number, required: true}],
        magics: [{type: Schema.Types.ObjectId, ref: 'magic', required: true}],
        magicsLevels: [{type: Number, required: true}],
        posibleWeapons: [{type: Schema.Types.ObjectId, ref: 'weapon'}],
        experienceRate: {type: Number, required: true},
        moneyRate: {type: Number, required: true},
        image: {type: String},
        description: {type: String}
    }, {
        timestamps: true
    }
)

const Creature = mongoose.model('creature', creaturesSchema);

module.exports = Creature;