import Seller from "../models/sellerModel.js";

const addSeller = async(req, resp) => {
    try {
        const data = new Seller(req.body);
        const result = await data.save();
        return resp.status(201).json(result);
    }
    catch (error) {
        return resp.status(500).json({ "message": "Internal server error !!!" });
    }
};

const getAllSellers = async(req, resp) => {
    try {
        const result = await Seller.find();
        return resp.status(200).json(result);
    }
    catch (error) {
        return resp.status(500).json({ "message": "Internal server error !!!" });
    }
};

const getSeller = async(req, resp) => {
    try {
        const result = await Seller.findOne({ "_id": req.params.id });
        return resp.staus(200).json(result);
    }
    catch (error) {
        return resp.status(500).json({ "message": "Internal server error !!!" });
    }
};

const updateSeller = async(req, resp) => {
    try {
        const result = await Seller.updateOne(
            { "_id": req.params.id },
            req.body
        );
        return resp.satus(201).json(result);
    }
    catch (error) {
        return resp.status(500).json({ "message": "Internal server error !!!" });
    }
};

const deleteSeller = async(req, resp) => {
    try {
        const result = await Seller.deleteOne({ "_id": req.params.id });
        return resp.status(201).json(result);
    }
    catch (error) {
        return resp.status(500).json({ "message": "Internal server error !!!" });
    }
};



export default { addSeller, getAllSellers, getSeller, updateSeller, deleteSeller };