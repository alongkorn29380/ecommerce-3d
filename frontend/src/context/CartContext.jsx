import { createContext, useContext, useState, useEffect } from "react"

const CartContext = createContext()

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState(() => {
        const raw = localStorage.getItem('cart')
        return raw ? JSON.parse(raw) : []
    })

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }, [cartItems])

    const addToCart = (product, color, size, quantity) => {
        const cartItemId = `${product._id}-${color.name}-${size}`

        setCartItems(prev => {
            const existing = prev.find(item => item.cartItemId === cartItemId)

            if (existing) {
                return prev.map(item =>
                    item.cartItemId === cartItemId
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                )
            }

            return [...prev, {
                cartItemId,
                product: product._id,
                name: product.name,
                image: product.image,
                price: product.price,
                color: color,
                size: size,
                quantity: quantity
            }]
        })
    }

    const removeFromCart = (cartItemId) => {
        setCartItems(prev => prev.filter(item => item.cartItemId !== cartItemId))
    }

    const updateQuantity = (cartItemId, quantity) => {
        if (quantity <= 0) {
            removeFromCart(cartItemId)
            return
        }

        setCartItems(prev =>
            prev.map(item =>
                item.cartItemId === cartItemId
                    ? { ...item, quantity: quantity }
                    : item
            )
        )
    }

    const clearCart = () => {
        setCartItems([])
    }

    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0)

    return (
        <CartContext.Provider value={{ 
            cartItems, 
            addToCart, 
            removeFromCart, 
            updateQuantity, 
            cartCount,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    return useContext(CartContext)
}