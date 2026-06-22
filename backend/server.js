import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import authRouter from './routes/auth.js'
import productRoutes from './routes/products.js'
import orderRoutes from './routes/order.js'

dotenv.config()

const app = express()

app.use(cors({    
    origin: [        
        'http://localhost:5173',        
        'https://your-app.vercel.app' 
    ],    
    credentials: true
}))

app.use(express.json())

app.use('/api/auth', authRouter)
app.use('/api/products', productRoutes)
app.use('/api/orders', orderRoutes)

app.get('/', (req, res) => res.json({ status: 'ok' }))

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('MongoDB connected')
        app.listen(process.env.PORT || 5000, () => {
            console.log(`server on port: ${process.env.PORT || 5000}`)
        })
    })
    .catch(err => console.error('DB Error:', err))