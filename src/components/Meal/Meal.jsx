import React from "react";
import "./Meal.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Meal = (props) => {
  const { strArea, strCategory, strMeal, strMealThumb } = props.meal;
  const clickHere = props.addToCard;
  return (
    <>
      <div className="card w-full  bg-base-100 shadow-xl">
        <figure>
          <img src={strMealThumb} />
        </figure>
        <div className="card-body">
          <h2 className="text-1xl font-bold">Meal :{strMeal} </h2>
          <h2 className="">Origin :{strArea} </h2>
          <p> Ceregory :{strCategory} </p>
          <button onClick={()=>clickHere(strMeal)} className="py-2 px-4 rounded-md bg-neutral text-white">
            Buy Now <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
      </div>
      
    </>
  );
};

export default Meal;
