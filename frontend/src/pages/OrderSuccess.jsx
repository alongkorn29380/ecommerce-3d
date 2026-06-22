import { Link } from "react-router-dom"

export default function OrderSuccess() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      
      <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
        <span className="text-white text-2xl">✓</span>
      </div>

      <h1 className="text-2xl font-bold text-gray-900 mb-2">Order Placed!</h1>
      <p className="text-gray-500 mb-8">Thank you for your order. We'll get it ready for you.</p>

      <Link 
        to="/" 
        className="bg-black text-white px-8 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors"
      >
        Continue Shopping
      </Link>

    </div>
  )
}