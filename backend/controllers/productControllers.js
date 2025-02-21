import Product from "../models/productModel.js";


const addProduct = async(req, resp) => {
    try {
        const data = new Product(req.body);
        const result = await data.save();
        return resp.status(201).json(result);
    }
    catch (error) {
        return resp.status(500).json({ "message": "Internal server error !!!" });
    }
};

const getAllProducts = async(req, resp) => {
    try {
        const result = await Product.find();
        return resp.status(200).json(result);
    }
    catch (error) {
        return resp.status(500).json({ "message": "Internal server error !!!" });
    }
};

const getProduct = async(req, resp) => {
    try {
        const result = await Product.findOne({ "_id": req.params.id });
        return resp.status(200).json(result);
    }
    catch (error) {
        return resp.status(500).json({ "message": "Internal server error !!!" });
    }
};

const updateProduct = async(req, resp) => {
    try {
        const result = await Product.updateOne(
            { "_id": req.params.id },
            req.body
        );
        return resp.status(201).json(result);
    }
    catch (error) {
        return resp.status(500).json({ "message": "Internal server error !!!" });
    }
};

const deleteProduct = async(req, resp) => {
    try {
        const result = await Product.deleteOne({ "_id": req.params.id });
        return resp.status(201).json(result);
    }
    catch (error) {
        return resp.status(500).json({ "message": "Internal server error !!!" });
    }
};


export default { addProduct, getAllProducts, getProduct, updateProduct, deleteProduct };