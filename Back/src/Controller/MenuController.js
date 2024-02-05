import { MenuModel } from "../Model/MenuModel.js";

export const getAllProducts = async (req, res) => {
    try {
        const products = await MenuModel.find({});
        res.json(products);
    } catch (error) {
        res.send(error.message);
    }
}

export const getProduct =  async (req, res) => {
    try {
        const { id } = req.params;
        const products = await MenuModel.findById(id);
        res.json(products);
    } catch (error) {
        res.send(error.message);
    }
}

export const createProduct =  async (req, res) => {
    try {
        const {name, image,price, ingredient, category, description} = req.body;
        const newProducts = new MenuModel({name, image,price, ingredient, category, description});
        await newProducts.save();
        res.json(newProducts);
    } catch (error) {
        res.send(error.message);
    }
}

export const updateProduct=  async (req, res) => {
    try {
        const { id } = req.params
        const { name, image,price, ingredient, category, description} = req.body
        const products = await MenuModel.findByIdAndUpdate(id, {name, image,price, ingredient, category, description});
        res.json(products)
    } catch (error) {
        res.send(error.message);
    }
}

export const deleteProduct =  async (req, res) => {
    try {
        const { id } = req.params;
        const products = await MenuModel.findByIdAndDelete(id);
        res.json(products);
    } catch (error) {
        res.send(error.message);
    }
}
