import mongoose from "mongoose"

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    items: [{
        product:  { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        name:     { type: String },
        price:    { type: Number },
        color:    { hex: { type: String}, name: { type: String } },
        size:     { type: String },
        quantity: { type: Number } 
    }],
    total:  { type: Number, required: true },
    status: { type: String, default: 'pending' }
}, { timestamps: true })

export default mongoose.model('Order', orderSchema)