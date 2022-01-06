const { Schema, model, Types } = require("mongoose");
const schema = new Schema({
  isSended: { type: Boolean, required: true },
  products: [
    {
        count:{type: Number, required: true},
        product:{
            name: { type: String, required: true },
            imgname: { type: String },
            id: { type: String },
            category: { type: String },
            price: { type: Number },
          }
    }
  ],
  clientData: {
    firstName: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    surname: { type: String, required: true },
    mail: { type: String, required: true },
  },
});
module.exports = model("Order", schema);
