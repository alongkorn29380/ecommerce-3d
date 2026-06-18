import { Link, useNavigate } from 'react-router-dom'

export default function Navbar()
{
    const navigate = useNavigate()
    const token = localStorage.getItem('token')

    const logout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }

    return (
        <nav>
            <div>
                <div>
                    <div>
                        <Link to="/">Shoppinginging</Link>
                    </div>
                    <ul>
                        <Link to="/cart">Cart</Link>
                        {token ? (
                            <button onClick={logout}>Logout</button>
                        ) : (
                            <>
                                <Link to="/login">Login</Link>
                                <Link to="/register">Register</Link>
                            </>
                        )
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}