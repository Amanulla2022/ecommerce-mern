import React from "react";

const Cards = ({ item }) => {
  return (
    <div className="">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={item.image} alt={`Image ${item._id}`} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.name}</h2>
          <p>Description of the Item</p>
          <div className="card-actions justify-end">
            <h5>
              <span>$</span>
              {item.price}
            </h5>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
