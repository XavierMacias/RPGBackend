const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teamsSchema = new Schema (
    {
        battlers: [{type: Schema.Types.ObjectId, ref: 'battle', required: true}],
        money: {type: Number, default: 0},
        inventory: [{type: Schema.Types.ObjectId, ref: 'item', required: true}]
    }, {
        timestamps: true
    }
)

const Team = mongoose.model('team', teamsSchema);

module.exports = Team;