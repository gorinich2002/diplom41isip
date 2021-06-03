const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    count: {type: Number, required: true},
    products: {type: String, required: true},
    // orders:[{type: Types.ObjectId, ref:'Orders'}]
})


module.exports = model('Admin', schema)