import { useState } from "react";
import { Link } from "react-router-dom";

export const Card = ({ menuData }) => {
  const { id, name, price, photo } = menuData;
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };
  const handleMinuse = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <>
      <div className="border rounded-lg shadow-md bg-white">
        <div className="w-64">
          <Link to={`/menu/${id}`}>
            <img
              className="rounded-md rounded-b-none shadow-slate-300 h-52"
              src={photo}
              alt={name}
            />
          </Link>
        </div>
        <div className="p-4">
          <h2>{name}</h2>
          <p>price: {price}</p>
          <div className="flex gap-3">
          <p>Order</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 cursor-pointer" onClick={handleMinuse}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>

            <span className="text-orange-400">{quantity}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 cursor-pointer"
              onClick={handleAdd}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <span className="text-blue-600">
            <Link to={`/menu/${id}`}>More...</Link>
          </span>
        </div>
      </div>
    </>
  );
};
