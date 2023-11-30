import React from "react";

const Cards = ({ item }) => {
  return (
    <div className="card w-7/10 bg-base-100 shadow-xl">
      <figure>
        <img
          className="card-image  hover:scale-110 cursor-pointer transition-all duration-200 md:h-48 md:w-48"
          src={item.image}
          alt={`Image ${item._id}`}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <p>{` ${item.ingredients[0]}, ${item.ingredients[1]}`}</p>
        <div className="card-actions  items-center mt-2 w-2/3">
          <h5 className="font-semibold cursor-pointer hover:text-green ">
            <span className="text-sm text-red">$</span>
            {item.price}
          </h5>
          <button className="pr-10 btn bg-green text-white">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
