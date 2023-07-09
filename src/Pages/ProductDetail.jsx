import { useParams, useNavigate, Link } from "react-router-dom";
import menuData from "../menuData";
export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const food = menuData.find((item) => item.id === Number(id));
  return (
    <>
    <div  className="flex flex-col items-center justify-center mb-12 ">
    <button className="mt-4" onClick={() => navigate("/menu")}>
          ❌
        </button>
      <div className="flex flex-col items-center w-[40%] bg-white ">
        
        <div className="border rounded-lg shadow-md flex flex-col items-center ">
          <img
            className="rounded-md rounded-b-none shadow-slate-300"
            src={food.photo}
            alt={food.name}
          />
          <div className="p-8">
            <h1 className="font-bold text-center mb-2">{food.name}</h1>
            <p>Price: <span className="text-orange-500">{food.price} </span></p>
            <p>{food.description}</p>
            <Link to="/menu" className="text-blue-400 font-bold">back to menu</Link>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
