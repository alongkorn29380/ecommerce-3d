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
            <div>
                {['All', 'Clothing', 'Shoes', 'Bags', 'Accessories'].map(cat => (
                    <button 
                        key={cat}
                        onClick={() => setCategory(cat)}
                        style={{ fontWeight: category === cat ? 'bold' : 'normal' }} // แถม: ไฮไลท์ปุ่มที่เลือกอยู่
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div>
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    )
}