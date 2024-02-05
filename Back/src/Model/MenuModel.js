import mongoose, { Schema } from "mongoose";

const menuSchema = new Schema({
    name: String,
    image: String,
    price:Number,
    ingredient: String,
    category: String,
    description: String

});
export const MenuModel = mongoose.model("MenuModel", menuSchema);