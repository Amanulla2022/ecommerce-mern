import React, { useEffect, useState } from "react";
import Cards from "./Cards";

//slick for carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SpecialDishes = () => {
  const [recipes, setRecipes] = useState([]);
  const slider = React.useRef(null);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        // if (data && data.pizza && Array.isArray(data.pizza)) {
        //   const spicyPizzaItems = data.pizza.filter(
        //     (item) => item.spicy === true
        //   );
        //   // console.log(spicyPizzaItems);
        //   setRecipes(spicyPizzaItems);
        // } else {
        //   console.error("Data is not as expected.");
        // }

        if (
          data &&
          data.pasta &&
          Array.isArray(data.pasta) &&
          data.pizza &&
          Array.isArray(data.pizza)
        ) {
          const spicyPizzaItems = data.pizza.filter(
            (item) => item.spicy === true
          );
          const spicyPastaItems = data.pasta.filter(
            (item) => item.spicy === false
          );

          const allSpicyItems = [...spicyPizzaItems, ...spicyPastaItems];

          console.log(allSpicyItems);
          setRecipes(allSpicyItems);
        } else {
          console.error("Data is not as expected.");
        }
      });
  }, []);

  // for  carousel (setting)
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="section-container my-20">
      <div className="text-left">
        <p className="common-subtitle">Special Dishes</p>
        <h2 className="common-title md:w-[520px]">
          Standout Dishes From Our Menu
        </h2>
      </div>
      <Slider {...settings} className="my1">
        {recipes.map((item, i) => (
          <Cards key={i} item={item} />
        ))}
      </Slider>
    </div>
  );
};

export default SpecialDishes;
