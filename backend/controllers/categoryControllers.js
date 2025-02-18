import Category from "../models/categoryModel.js";

const addCategory = async(req, resp) => {
    try {
        const data = new Category(req.body);
        const result = await data.save();
        return resp.status(201).json(result);
    }
    catch (error) {
        return resp.status(500).json({ "message": "Internal server error !!!" });
    }
};

const getAllCategories = async(req, resp) => {
    try {
        const result = await Category.find();
        return resp.status(200).json(result);
    }
    catch (error) {
        return resp.status(500).json({ "message": "Internal server error !!!" });
    }
};

const getCategory = async(req, resp) => {
    try {
        const result = await Category.findOne({"_id": req.params.id});
        return resp.status(200).json(result);
    }
    catch (error) {
        return resp.status(500).json({ "message": "Internal server error !!!" });
    }
};

const updateCategory = async(req, resp) => {
    try {
        const result = await Category.updateOne(
            { "_id": req.params.id },
            req.body
        );
        return resp.status(201).json(result);
    }
    catch (error) {
        return resp.status(500).json({ "message": "Internal server error !!!" });
    }
};

const deleteCategory = async(req, resp) => {
    try {
        const result = await Category.deleteOne({ "_id": req.params.id });
        return resp.status(201).json(result);
    }
    catch (error) {
        return resp.status(500).json({ "message": "Internal server error !!!" });
    }
};


export default { addCategory, getAllCategories, getCategory, updateCategory, deleteCategory };