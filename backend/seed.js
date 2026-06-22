import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Product from './models/Product.js'

dotenv.config()

const products = [
  // Fashion
  { 
    name: 'Classic Shirt', 
    category: 'Fashion', 
    price: 590, 
    model_url: '/Models/Shirt.glb', 
    image: '/Images/Shirt.png',
    hasSize: true, 
    color: [
      { hex:'#ffffff', name:'White' },
      { hex:'#f4c2c2', name:'Pastel Pink' },
      { hex:'#a7c7e7', name:'Pastel Blue' },
      { hex:'#b5ead7', name:'Pastel Mint' },
      { hex:'#d7c0e0', name:'Pastel Lavender' }
    ] 
  },

  { 
    name: 'Slim Trousers', 
    category: 'Fashion', 
    price: 890, 
    model_url: '/Models/Trousers.glb', 
    image: '/Images/Trousers.png', 
    hasSize: true, 
    color: [
      { hex:'#ffffff', name:'White' },
      { hex:'#d6d6d6', name:'Pastel Gray' },
      { hex:'#d2b48c', name:'Pastel Taupe' },
      { hex:'#a7c7e7', name:'Pastel Blue' },
      { hex:'#d7c0e0', name:'Pastel Lavender' }
    ] 
  },

  { 
    name: 'Classic Boot', 
    category: 'Fashion', 
    price: 2490, 
    model_url: '/Models/Boot.glb', 
    image: '/Images/Boot.png', 
    hasSize: true, 
    color: [
      { hex:'#ffffff', name:'White' },
      { hex:'#d2b48c', name:'Pastel Taupe' },
      { hex:'#c8ad7f', name:'Pastel Brown' },
      { hex:'#d6d6d6', name:'Pastel Gray' },
      { hex:'#e8b4b8', name:'Pastel Rose' }
    ] 
  },

  { 
    name: 'Clean Sneaker', 
    category: 'Fashion', 
    price: 3290, 
    model_url: '/Models/Shoe.glb', 
    image: '/Images/Shoe.png', 
    hasSize: true, 
    color: [
      { hex:'#ffffff', name:'White' },
      { hex:'#ffd1dc', name:'Pastel Pink' },
      { hex:'#b5d8eb', name:'Pastel Blue' },
      { hex:'#c1e1c1', name:'Pastel Mint' },
      { hex:'#fff1b5', name:'Pastel Yellow' }
    ] 
  },

  { 
    name: 'Curved Cap', 
    category: 'Fashion', 
    price: 690, 
    model_url: '/Models/Cap.glb', 
    image: '/Images/Cap.png', 
    hasSize: false, 
    color: [
      { hex:'#ffffff', name:'White' },
      { hex:'#fff1b5', name:'Pastel Yellow' },
      { hex:'#a7c7e7', name:'Pastel Blue' },
      { hex:'#f4c2c2', name:'Pastel Pink' },
      { hex:'#b5ead7', name:'Pastel Mint' }
    ] 
  },

  { 
    name: 'Leather Belt', 
    category: 'Fashion', 
    price: 590, 
    model_url: '/Models/Belt.glb', 
    image: '/Images/Belt.png', 
    hasSize: false, 
    color: [
      { hex:'#ffffff', name:'White' },
      { hex:'#d2b48c', name:'Pastel Taupe' },
      { hex:'#d6d6d6', name:'Pastel Gray' },
      { hex:'#e8b4b8', name:'Pastel Rose' },
      { hex:'#c8ad7f', name:'Pastel Brown' }
    ] 
  },

  { 
    name: 'Sun Glasses', 
    category: 'Fashion',
    price: 990, 
    model_url: '/Models/Glasses.glb', 
    image: '/Images/Glasses.png', 
    hasSize: false, 
    color: [
      { hex:'#ffffff', name:'White' },
      { hex:'#d7c0e0', name:'Pastel Lavender' },
      { hex:'#ffdab9', name:'Pastel Peach' },
      { hex:'#a7c7e7', name:'Pastel Blue' },
      { hex:'#d6d6d6', name:'Pastel Gray' }
    ] 
  },

  { 
    name: 'Silk Necktie', 
    category: 'Fashion', 
    price: 490,  
    model_url: '/Models/Necktie.glb', 
    image: '/Images/Necktie.png', 
    hasSize: false, 
    color: [
      { hex:'#ffffff', name:'White' },
      { hex:'#e8b4b8', name:'Pastel Rose' },
      { hex:'#a7c7e7', name:'Pastel Blue' },
      { hex:'#d7c0e0', name:'Pastel Lavender' },
      { hex:'#fff1b5', name:'Pastel Yellow' }
    ] 
  },

  // Home & Lifestyle
  { 
    name: 'Smart Air Conditioner', 
    category: 'Home & Lifestyle', 
    price: 12900, 
    model_url: '/Models/Air.glb', 
    image: '/Images/Air.png', 
    hasSize: false, 
    color: [
      { hex:'#ffffff', name:'White' },
      { hex:'#d6d6d6', name:'Pastel Gray' },
      { hex:'#b5d8eb', name:'Pastel Blue' },
      { hex:'#c1e1c1', name:'Pastel Mint' },
      { hex:'#d7c0e0', name:'Pastel Lavender' }
    ] 
  },

  { 
    name: 'Minimal Wall Clock', 
    category: 'Home & Lifestyle', 
    price: 690, 
    model_url: '/Models/Clock.glb', 
    image: '/Images/Clock.png', 
    hasSize: false, 
    color: [
      { hex:'#ffffff', name:'White' },
      { hex:'#b5ead7', name:'Pastel Mint' },
      { hex:'#ffdab9', name:'Pastel Peach' },
      { hex:'#d7c0e0', name:'Pastel Lavender' },
      { hex:'#fff1b5', name:'Pastel Yellow' }
    ] 
  },

  { 
    name: 'Desk Fan', 
    category: 'Home & Lifestyle', 
    price: 590, 
    model_url: '/Models/Fan.glb', 
    image: '/Images/Fan.png', 
    hasSize: false, 
    color: [
      { hex:'#ffffff', name:'White' },
      { hex:'#c1e1c1', name:'Pastel Mint' },
      { hex:'#ffd1dc', name:'Pastel Pink' },
      { hex:'#b5d8eb', name:'Pastel Blue' },
      { hex:'#ffdab9', name:'Pastel Peach' }
    ] 
  },

  { 
    name: 'Camping Lantern', 
    category: 'Home & Lifestyle', 
    price: 790, 
    model_url: '/Models/Lantern.glb', 
    image: '/Images/Lantern.png', 
    hasSize: false, 
    color: [
      { hex:'#ffffff', name:'White' },
      { hex:'#b5ead7', name:'Pastel Mint' },
      { hex:'#ffdab9', name:'Pastel Peach' },
      { hex:'#fff1b5', name:'Pastel Yellow' },
      { hex:'#d2b48c', name:'Pastel Taupe' }
    ] 
  },

  // Tech & Hobby
  { 
    name: 'Acoustic Guitar', 
    category: 'Tech & Hobby', 
    price: 4990, 
    model_url: '/Models/Guitar.glb', 
    image: '/Images/Guitar.png', 
    hasSize: false, 
    color: [
      { hex:'#ffffff', name:'White' },
      { hex:'#ffdab9', name:'Pastel Peach' },
      { hex:'#d2b48c', name:'Pastel Taupe' },
      { hex:'#e8b4b8', name:'Pastel Rose' },
      { hex:'#c8ad7f', name:'Pastel Brown' }
    ] 
  },

  { 
    name: 'Mechanical Keypad', 
    category: 'Tech & Hobby', 
    price: 1290, 
    model_url: '/Models/Keypad.glb', 
    image: '/Images/Keypad.png', 
    hasSize: false, 
    color: [
      { hex:'#ffffff', name:'White' },
      { hex:'#b5ead7', name:'Pastel Mint' },
      { hex:'#d7c0e0', name:'Pastel Lavender' },
      { hex:'#ffd1dc', name:'Pastel Pink' },
      { hex:'#b5d8eb', name:'Pastel Blue' }
    ] 
  },

  { 
    name: 'Collector Pokaball', 
    category: 'Tech & Hobby', 
    price: 390, 
    model_url: '/Models/Pokaball.glb', 
    image: '/Images/Pokaball.png', 
    hasSize: false, 
    color: [
      { hex:'#ffffff', name:'White' },
      { hex:'#f8a6a6', name:'Poke Ball' },
      { hex:'#a7c7e7', name:'Great Ball' },
      { hex:'#fff1b5', name:'Ultra Ball' },
      { hex:'#d7c0e0', name:'Master Ball' }
    ] 
  }
]

await mongoose.connect(process.env.MONGODB_URI)
console.log('Connected')

await Product.deleteMany()
await Product.insertMany(products)
console.log('✅ Seeded 15 products')

await mongoose.disconnect()