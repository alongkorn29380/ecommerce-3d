import { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import api from '../api/axios.js'
import ModelViewer from "../components/ModelViewer.jsx"
import { useCart } from '../context/CartContext.jsx'

export default function Product() {
  const { addToCart } = useCart()
  const [product, setProduct] = useState(null)
  const [selectedColor, setSelectedColor] = useState(null)
  const [selectedSize, setSelectedSize] = useState('M')

  const { id } = useParams()

  const sizes = ['XS', 'S', 'M', 'L', 'XL']

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await api.get(`/products/${id}`)
        setProduct(res.data)

        if (res.data.color && res.data.color.length > 0) {
          setSelectedColor(res.data.color[0])
        }
      } catch (error) {
        console.log("Error fetching product data:", error)
      }
    }

    if (id) {
      fetchProduct()
    }
  }, [id])

  if (!product) return <div>Loading...</div>

  return (
    <>
      <Link to="/" className="flex items-center gap-2 text-gray-500 text-sm m-[20px_20px_10px]">
        <span>←</span> Back to store
      </Link>

        <div className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden max-w-7xl mx-4 md:mx-auto min-h-0 md:min-h-[600px] mt-6 md:mt-[100px]">

          <div className="w-full md:w-1/2 bg-gray-100 flex flex-col items-center justify-center p-4 md:p-8">
            <div className="w-full h-64 sm:h-80 md:h-[480px] flex items-center justify-center">
              <ModelViewer
                modelUrl={product.model_url}
                color={selectedColor?.hex}
              />
            </div>
            <p className="text-gray-400 text-xs mt-4 tracking-wide">← drag to rotate →</p>
          </div>

          <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center space-y-6 md:space-y-12">
            <p className="text-gray-400 text-xs uppercase tracking-widest">{product.category}</p>
            <p className="font-bold text-3xl mt-3 tracking-wide">{product.name}</p>
            <p className="font-bold text-2xl mt-3 tracking-wide">฿{product.price}</p>

            <div className="mt-8">
              <p className="text-gray-400 text-xs uppercase tracking-widest">
                COLOR — <span className="text-black font-medium normal-case">{selectedColor?.name}</span>
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {product.color?.map((c, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(c)}
                    style={{ backgroundColor: c.hex }}
                    className={`w-6 h-6 rounded-full border border-gray-200 ${
                      selectedColor?.hex === c.hex ? "ring-2 ring-offset-2 ring-black" : ""
                    }`}
                  />
                ))}
              </div>
            </div>

             {product.hasSize && (
                <div className="mt-8">
                  <p className="text-gray-400 text-xs uppercase tracking-widest">
                    SIZE — <span className="text-black font-medium">{selectedSize}</span>
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {sizes.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSelectedSize(s)}
                        className={selectedSize === s
                          ? "bg-black text-white px-3 py-2 rounded-lg text-sm"
                          : "bg-white border border-gray-200 px-3 py-2 rounded-lg text-sm"
                        }
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <button
                  onClick={() => addToCart(product, selectedColor, product.hasSize ? selectedSize : null, 1)}
                  className="bg-black text-white w-full py-3 rounded-lg mt-10 font-medium tracking-wide"
              >
                Add to Cart
              </button>
          </div>
        </div>
    </>
  )
}