import { Schema, model } from "mongoose";

const brandSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
});


export default model("brands", brandSchema);