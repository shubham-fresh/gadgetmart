import { model, Schema } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    categoryId: {
        type: String,
        required: true,
    },
    oldPrice: {
        type: Number,
        required: true,
        min: 0,
    },
    newPrice: {
        type: Number,
        required: true,
        min: 0,
    },
    stockQuantity: {
        type: Number,
        required: true,
        min: 0
    },
    seller: {
        type: Schema.Types.ObjectId,
        ref: "sellers",
        required: true,
    },
    brandId: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    weight: {
        type: Number,
        min: 0,
    },
    dimensions: {
        length: {
            type: Number,
            min: 0,
        },
        width: {
            type: Number,
            min: 0,
        },
        height: {
            type: Number,
            min: 0,
        }
    },
    ratings: [
        {
            userId: {
                type: Schema.Types.ObjectId,
                ref: "users"
            },
            rating: {
                type: Number,
                min: 1,
                max: 5
            },
            comment: {
                type: String,
            },
            createdAt: {
                type: Date,
                default: Date.now,
            }
        }
    ]
});



productSchema.pre("save", function(next) {
    this.updatedAt = Date.now();
    next();
});


export default model("products", productSchema);