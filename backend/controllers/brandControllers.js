import Brand from "../models/brandModel.js";

const addBrand = async(req, resp) => {
    try {
        const data = new Brand(req.body);
        const result = await data.save();
        return resp.status(201).json(result);
    }
    catch (error) {
        return resp.status(500).json({ "message": "Internal server error !!!" });
    }
};

const getAllBrands = async(req, resp) => {
    try {
        const result = await Brand.find();
        return resp.status(200).json(result);
    }
    catch (error) {
        return resp.status(500).json({ "message": "Internal server error !!!" });
    }
};

const getBrand = async(req, resp) => {
    try {
        const result = await Brand.findOne({"_id": req.params.id});
        return resp.status(200).json(result);
    }
    catch (error) {
        return resp.status(500).json({ "message": "Internal server error !!!" });
    }
};

const updateBrand = async(req, resp) => {
    try {
        const result = await Brand.updateOne(
            { "_id": req.params.id },
            req.body
        );
        return resp.status(201).json(result);
    }
    catch (error) {
        return resp.status(500).json({ "message": "Internal server error !!!" });
    }
};

const deleteBrand = async(req, resp) => {
    try {
        const result = await Brand.deleteOne({ "_id": req.params.id });
        return resp.status(201).json(result);
    }
    catch (error) {
        return resp.status(500).json({ "message": "Internal server error !!!" });
    }
}

export default { addBrand, getAllBrands, getBrand, updateBrand, deleteBrand };