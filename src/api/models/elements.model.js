const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const elementsSchema = new Schema (
    {
        name: {type: String, required: true},
        weaknesses: [{type: String}],
        resistances: [{type: String}],
        inmunities: [{type: String}]
    }, {
        timestamps: true
    }
)

const Element = mongoose.model('element', elementsSchema);

module.exports = Element;