const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const battlersSchema = new Schema (
    {
        creature: {type: Schema.Types.ObjectId, ref: 'creature', required: true},
        ownName: {type: String, required: true},
        level: {type: Number, default: 1},
        magicLearnt: [{type: Schema.Types.ObjectId, ref: 'magic', required: true}],
        stats: [{type: Number, required: true}],
        totalExperience: {type: Number, default: 0},
        status: {type: String, default: 'Fine'},
        weapon: {type: Schema.Types.ObjectId, ref: 'weapon'},
        shield: {type: Schema.Types.ObjectId, ref: 'weapon'},
        helmet: {type: Schema.Types.ObjectId, ref: 'weapon'},
        armor: {type: Schema.Types.ObjectId, ref: 'weapon'},
        accessory: {type: Schema.Types.ObjectId, ref: 'weapon'}
    }, {
        timestamps: true
    }
)

const Battler = mongoose.model('battler', battlersSchema);

module.exports = Battler;