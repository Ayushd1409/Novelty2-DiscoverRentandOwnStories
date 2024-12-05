import React from "react";
import { useNavigate } from "react-router-dom";

function Cards({ item }) {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/BookDescription/${item.id}`); // Navigate to the product description page with item.id
  };

  return (
    <>
      <div className="m-4 p-1">
        <div
          className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white dark:border"
          onClick={handleCardClick}
        >
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge text-white bg-teal-600">
                {item.category}
              </div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline p-3">Rs.{item.price}</div>
              <div className="cursor-pointer p-3 badge badge-outline hover:bg-teal-600 hover:text-white hover:w-18 duration-200">
                Rent
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
