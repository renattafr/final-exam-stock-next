import {model, models, Schema} from "mongoose";

const supplierSchema = new Schema(
  {
    name: String,
    address: String,
    phoneNumber: String,
  },
  { strict: false }
);

console.log("Mongoose Models", models)
module.exports = models?.supplier || model('supplier', supplierSchema);
