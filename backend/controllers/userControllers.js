import User from "../models/userModel.js";

const addUser = async(req, resp) => {
    try {
        const data = new User(req.body);
        const result = await data.save();
        return resp.status(201).json(result);
    }
    catch (error) {
        return resp.status(500).json({ "message": "Internal server error !!!" });
    }
};

const getUser = async(req, resp) => {
    try {
        const result = await User.findOne(req.body);
        return resp.status(200).json(result);
    }
    catch (error) {
        return resp.status(500).json({ "message": "Internal server error !!!" });
    }
};

const getAllUser = async(req, resp) => {
    try {
        const result = await User.find();
        return resp.status(200).json(result);
    }
    catch (error) {
        return resp.status(500).json({ "message": "Internal server error !!!" });
    }
};

const updateUser = async(req, resp) => {
    try {
        const result = await User.updateOne(
            { "_id": req.params.id },
            req.body
        );
        return resp.status(201).json(result);
    }
    catch (error) {
        return resp.status(500).json({ "message": "Internal server error !!!" });
    }
};

const deleteUser = async(req, resp) => {
    try { 
        const result = await User.deleteOne({ "_id": req.params.id });
        return resp.status(201).json(result);
    }
    catch (error) {
        return resp.status(500).json({ "message": "Internal server error !!!" });
    }
}


export default { addUser, getUser, getAllUser, updateUser, deleteUser };