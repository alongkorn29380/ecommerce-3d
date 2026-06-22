import express from 'express'
import jwt from 'jsonwebtoken' 
import auth from '../middleware/auth.js'
import Order from '../models/Order.js'
import User from '../models/User.js'

const router = express.Router()

router.post('/', auth, async ( req, res ) => {
    try {
        const { items, total } = req.body

        const order = await Order.create({
            user: req.user.id,
            items,
            total
        })

        res.status(201).json(order)
    }
    catch (err) {
         res.status(500).json({ message: err.message }) 
    }
})

router.get('/me', auth, async (req, res) => {
    try {
        const order = await Order.find({ user: req.user.id })
            
        res.json(order)
    }
    catch (err) {
        res.status(500).json({ message: err.message})
    }
})

export default router