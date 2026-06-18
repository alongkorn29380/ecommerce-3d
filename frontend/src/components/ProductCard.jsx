import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/products/${product._id}`)} style={{ cursor: 'pointer' }}>
      <p>{product.name}</p>
      <p>{product.category}</p>
      <p>฿{product.price}</p>
      
      {product.color.map((color, index) => (
        <div
          key={index}
          style={{ background: color, width: 12, height: 12, borderRadius: '50%', display: 'inline-block', margin: '0 2px' }}
        />
      ))}
    </div>
  )
}