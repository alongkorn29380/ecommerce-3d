import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    model_url: {
        type: String
    },
    color: [{
        hex: { 
            type: String, 
            required: true 
        },
        name: { 
            type: String, 
            required: true 
        }
        }],
    hasSize: { 
        type: Boolean, 
        default: true 
    },
    image: {
    type: String
    },
}, {
    timestamps: true 
})

export default mongoose.model('Product', productSchema)