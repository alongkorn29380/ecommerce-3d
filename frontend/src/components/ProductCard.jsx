import { useNavigate } from 'react-router-dom'
import ModelViewer from './ModelViewer'

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/products/${product._id}`)}
      className='border-2 border-gray-100 bg-white rounded-2xl shadow-sm cursor-pointer hover:-translate-y-1'
    >
      <div className='bg-gray-100 rounded-xl m-4 h-44 flex items-center justify-center'>
          <img 
            src={product.image} 
            alt={product.name} 
            className="h-full w-full object-contain"
          />
      </div>

      <div className='px-[20px] pb-[20px]'>
        <p className='text-[#BFC9D1] text-[13px]'>{product.category}</p>
        <p className='font-medium'>{product.name}</p>

        <div className='flex justify-between items-center pt-[5px]'>
          <p className='font-bold text-[15px]'>฿{product.price}</p>

          <div className="flex space-x-1">
            {product.color?.map((c, index) => (
              <div
                key={index}
                style={{ backgroundColor: c.hex }}
                className="w-[10px] h-[10px] rounded-full border border-gray-200"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}