import { model, Schema } from "mongoose";

const sellerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    address: {
        street: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        pincode: {
            type: Number,
            required: true
        },
        country: {
            type: String,
            required: true
        },
    },
    storeName: {
        type: String,
        required: true,
        unique: true
    },
    storeDescription: {
        type: String,
        required: true
    },
    profileImage: {
        type: String,
    },
    registrationDate: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now(),
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: "products"
        }
    ]
});



sellerSchema.pre("save", function(next) {
    this.updatedAt = Date.now();
    next();
});


export default model("sellers", sellerSchema);