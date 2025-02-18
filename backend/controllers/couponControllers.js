import Coupon from "../models/couponModel.js";

const addCoupon = async(req, resp) => {
    try {
        const data = new Coupon(req.body);
        const result = await data.save();
        return resp.status(201).json(result);
    }
    catch (error) {
        return resp.status(500).json({ "message": "Internal server error !!!" });
    }
};

const getAllCoupons = async(req, resp) => {
    try {
        const result = await Coupon.find();
        return resp.status(200).json(result);
    }
    catch (error) {
        return resp.status(500).json({ "message": "Internal server error !!!" });
    }
};

const getCoupon = async(req, resp) => {
    try {
        const result = await Coupon.findOne({ "_id": req.params.id });
        return resp.status(200).json(result);
    }
    catch (error) {
        return resp.status(500).json({ "message": "Internal server error !!!" });
    }
};

const updateCoupon = async(req, resp) => {
    try {
        const result = await Coupon.updateOne(
            { "_id": req.params.id },
            req.body
        );
        return resp.status(201).json(result);
    }
    catch (error) {
        return resp.status(500).json({ "message": "Internal server error !!!" });
    }
};

const deleteCoupon = async(req, resp) => {
    try {
        const result = await Coupon.deleteOne({ "_id": req.params.id });
        return resp.status(201).json(result);
    }
    catch (error) {
        return resp.status(500).json({ "message": "Internal server error !!!" });
    }
};


export default { addCoupon, getAllCoupons, getCoupon, updateCoupon, deleteCoupon };