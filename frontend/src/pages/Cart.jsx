import { Link } from "react-router-dom"

export default function Cart() 
{
  return (
    <>
      <Link to="/" className="flex items-center gap-2 text-gray-500 text-sm m-[20px_20px_10px]">
        <span>←</span> Back to store
      </Link>

      {/* Order */}
      <div className="border-2 border-gray-100 rounded-xl m4" >

      </div>
    </>
  )
}