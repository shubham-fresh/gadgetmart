import { Schema, model } from "mongoose";

const couponSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    code: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    discount_type: {
        type: String,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    minPurchaseAmount: {
        type: Number,
        min: 0,
        default: 0
    },
    usedCount: {
        type: Number,
        default: 0
    },
    status: {
        type: Boolean,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    expirationDate: {
        type: Date,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true
    }
});

export default model("coupons", couponSchema);