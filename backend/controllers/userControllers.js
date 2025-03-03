import User from "../models/userModel.js";

const signIn = async(req, resp) => {
    try {
        const data = new User(req.body);
        const result = await data.save();
        return resp.status(201).json(result);
    }
    catch (error) {
        return resp.status(500).json({ "message": "Internal server error !!!" });
    }
};

const logIn = async(req, resp) => {
    try {
        const result = await User.findOne(req.body);
        return resp.status(200).json(result);
    }
    catch (error) {
        return resp.status(500).json({ "message": "Internal server error !!!" });
    }
};


export default { signIn, logIn };