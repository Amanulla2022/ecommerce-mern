import React from "react";
import meal from "../Images/burger.jpg";
import breakfast from "../Images/break-fast.jpg";
import dessert from "../Images/dessert.jpg";
import all from "../Images/all.jpg";

const categoryItems = [
  {
    id: 1,
    title: "Main Dish",
    desc: "(86 dishes)",
    image: meal,
  },
  {
    id: 2,
    title: "Break Fast",
    desc: "(12 break fast)",
    image: breakfast,
  },
  {
    id: 3,
    title: "Dessert",
    desc: "(48 desserts)",
    image: dessert,
  },
  {
    id: 4,
    title: "Browse-All",
    desc: "(255 items)",
    image: all,
  },
];

const Categories = () => {
  return (
    <div className="section-container py-16">
      <div className="text-center">
        <p className="common-subtitle">Customer Favorites</p>
        <h2 className="common-title">Popular Categories</h2>
      </div>

      {/* category cards */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12">
        {categoryItems.map((item, i) => (
          <div
            key={i}
            className="shadow-lg rounded-md bg-white py-6 px-1 w-72 mx-auto text-center cursor-pointer hover:-translate-y-4  duration-300 transition-all"
          >
            <div className="flex w-full mx-auto items-center justify-center">
              <img
                src={item.image}
                alt={`Image ${i}`}
                className="bg-[#C1F1C6] p-1 rounded-full w-28 h-28 object-cover"
              />
            </div>
            <div className="mt-5 space-y-1">
              <h5>{item.title}</h5>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
