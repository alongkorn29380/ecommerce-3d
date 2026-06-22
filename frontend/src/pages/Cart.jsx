import { Link, useNavigate } from "react-router-dom"
import { useCart } from '../context/CartContext.jsx'
import api from '../api/axios.js'

export default function Cart() {
  const navigate = useNavigate()
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useCart()

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)
  const shipping = 0
  const total = subtotal + shipping

  const handleCheckout = async () => {
  const token = localStorage.getItem('token')

  if (!token) {
    navigate('/login')
    return
  }

  if (cartItems.length === 0) return

  try {
    await api.post('/orders', { items: cartItems, total })
    clearCart()
    navigate('/order-success')
  } catch (err) {
    alert('Error: ' + err.message)  
    console.error(err)
  }
}

  const handleDecreaseQuantity = (cartItemId, currentQuantity) => {
    if (currentQuantity <= 1) {
      removeFromCart(cartItemId)
    } else {
      updateQuantity(cartItemId, currentQuantity - 1)
    }
  }

  return (
    <>
      <Link to="/" className="flex items-center gap-2 text-gray-500 text-sm m-[20px_20px_10px]">
        <span>←</span> Back to store
      </Link>

      <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

        <div className="lg:col-span-2">
          {cartItems.length === 0 ? (
            <div className="text-center py-12 text-gray-500 bg-gray-50 rounded-xl border border-dashed border-gray-200">
              Your cart is empty.
            </div>
          ) : (
            cartItems.map(item => (
              <div key={item.cartItemId} className="flex bg-gray-100 items-center gap-4 border border-gray-200 rounded-xl p-4 mb-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-contain" />

                <div className="flex-1">
                  <p className="font-medium text-gray-900">{item.name}</p>
                  <div className="flex items-center gap-1.5 text-sm text-gray-500 mt-0.5">
                    {item.color?.hex && (
                      <div
                        className="w-3 h-3 rounded-full border border-gray-300"
                        style={{ backgroundColor: item.color.hex }}
                      />
                    )}
                    <p>{item.color?.name} {item.size && `· ${item.size}`}</p>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4 border border-gray-200 bg-white rounded-lg p-2">
                  <button
                    onClick={() => handleDecreaseQuantity(item.cartItemId, item.quantity)}
                    className="px-2 text-gray-500 hover:text-black font-bold"
                  >
                    -
                  </button>
                  <span className="text-gray-900 text-base font-medium min-w-[20px] text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                    className="px-2 text-gray-500 hover:text-black font-bold"
                  >
                    +
                  </button>
                </div>

                <p className="font-bold min-w-[80px] text-right">฿{(item.price * item.quantity).toLocaleString()}</p>
              </div>
            ))
          )}
        </div>

        <div className="bg-gray-100 border border-gray-200 rounded-xl p-6 lg:sticky lg:top-6">
          <h2 className="text-xl font-bold mb-6 text-gray-900">Order summary</h2>

          <div className="space-y-4 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-medium text-gray-900">฿{subtotal.toLocaleString()}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="font-medium text-gray-900">
                {shipping === 0 ? "Free" : `฿${shipping}`}
              </span>
            </div>

            <hr className="border-gray-200 my-4" />

            <div className="flex justify-between text-base font-bold text-gray-900">
              <span>Total</span>
              <span className="text-xl">฿{total.toLocaleString()}</span>
            </div>
          </div>

          <button
            className={`w-full mt-6 py-3 rounded-xl font-medium transition-colors ${
              cartItems.length === 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-black text-white hover:bg-gray-800'
            }`}
            onClick={handleCheckout}
            disabled={cartItems.length === 0}
          >
            Proceed to checkout
          </button>

          <Link to="/" className="block text-center text-sm text-gray-500 hover:underline mt-4">
            Continue shopping
          </Link>
        </div>

      </div>
    </>
  )
}