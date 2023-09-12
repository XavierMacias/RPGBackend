const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const magicsSchema = new Schema (
    {
        name: {type: String, required: true},
        element: {type: Schema.Types.ObjectId, ref: 'element', required: true},
        power: {type: Number, required: true},
        accuracy: {type: Number, required: true},
        magicPoints: {type: Number, required: true},
        category: {type: String, default: "Physical", enum: ["Physical", "Magical", "NoDamage"]},
        target: {type: String, default: "OneEnemy", enum: ["OneEnemy", "AllEnemies", "AdjacentEnemies", "User", "Ally", "AllAllies", "AdjacentAllies", "AdjacentBattlers", "AllBattlers"]},
        effect: {type: String, required: true},
        description: {type: String}
    }, {
        timestamps: true
    }
)

const Magic = mongoose.model('magic', magicsSchema);

module.exports = Magic;