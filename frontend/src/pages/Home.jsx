import { useState, useEffect } from 'react'
import api from '../api/axios.js'
import ProductCard from '../components/ProductCard.jsx'

export default function Home() {
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState('All')

    useEffect(() => {
        const fetchProducts = async () => {
            const url = category === 'All' ? '/products' : `/products?category=${category}`
            const res = await api.get(url)
            setProducts(res.data)
        }
        fetchProducts()
    }, [category])

    return (
        <div>
            {/* Home Page */}
            <div className='bg-black'>
                <div className='text-center'>
                    <p className='text-[#605B51] pt-[40px] font-[100] text-[11px] tracking-[0.25em] uppercase subpixel-antialiased'>NEW COLLECTION 2026</p>
                    <h1 className='text-white font-black text-[40px] pt-[10px]'>Design Your Own.</h1>
                    <p className='text-[#605B51] pt-[10px] pb-[58px]'>Every pice starts white. You choose the color.</p>
                </div>
            </div>
            
            {/* Filter */}
            <div className="flex gap-2 px-8 py-6">
                {['All', 'Clothing', 'Shoes', 'Bags', 'Accessories'].map(cat => (
                    <button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        className={category === cat
                            ? "bg-black text-white rounded-full px-5 py-2 text-sm font-semibold"
                            : "bg-white text-gray-500 border border-gray-200 rounded-full px-5 py-2 text-sm"
                        }
                    >
                        {cat}
                    </button>
                ))}
            </div>
            
            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 px-8 pb-8">
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    )
}