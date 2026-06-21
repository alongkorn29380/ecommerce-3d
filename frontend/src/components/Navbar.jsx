import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

export default function Navbar() {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const { cartCount } = useCart()

    const logout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }

    return (
        <nav className='bg-white h-16 shadow-sm flex items-center justify-between px-6'>
            <div className='font-[700] text-[20px] text-back-800'>
                <Link to="/">FORMA</Link>
            </div>
            <ul className='flex items-center gap-6 font-medium text-gray-600'>
                <li className='relative'>
                    <Link to="/cart" className='hover:text-black transition'>
                        Cart
                        {cartCount > 0 && (
                            <span className='absolute -top-2 -right-3 bg-black text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center'>
                                {cartCount}
                            </span>
                        )}
                    </Link>
                </li>
                
                {token ? (
                    <li>
                        <button 
                            onClick={logout} 
                            className='bg-red-500 text-white px-4 py-1.5 rounded hover:bg-red-600 transition'
                        >
                            Logout
                        </button>
                    </li>
                ) : (
                    
                    <div className='flex items-center gap-4'>
                        <li>
                            <Link to="/login" className='hover:text-black transition'>Login</Link>
                        </li>
                        <li>
                            <Link 
                                to="/register" 
                                className='bg-black text-white px-4 py-1.5 rounded hover:bg-gray-800 transition'
                            >
                                Register
                            </Link>
                        </li>
                    </div>
                )}
            </ul>
        </nav>
    )
}