import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')

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
                <li >
                    <Link to="/cart" className='hover:text-black transition'>Cart</Link>
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
                    // แก้ไข: ใช้ li ครอบชิ้นส่วนในลิสต์ และเพิ่มสไตล์ให้สวยงาม
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