import React, { useEffect, useState } from "react";
import Meal from "../Meal/Meal";
import ProductName from "../ProductName/ProductName";

import "./Meals.css";
const Meals = () => {
  const [totalMeals, setMeals] = useState([]);

  const [reciepeName, setProducName] = useState([]);

  const [showall, setShowall] = useState(true);

  useEffect(() => {
    fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s=a&fbclid=IwAR2B9YQF2RI8ED7dfMBS-5yOMEkxNrRM2siqnoIk-TFSYsefT-sj_S20LXI"
    )
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);

  const addToCard = (products) => {
    const productNames = [...reciepeName, products];

    setProducName(productNames);
  };
const showAllproduct = ()=>{
  setShowall(false);
}
  return (
    <>
      <div className="flex justify-between gap-5 mt-8 mx-8 lg:flex-row  flex-col ">
        <div className="lg:w-[75%]">
          <div className="grid lg:grid-cols-3 gap-5">
            {totalMeals.slice(0, showall ? 6 :totalMeals.length  ).map((meal) => (
              <Meal meal={meal} key={meal.idMeal} addToCard={addToCard}></Meal>
            ))}
          </div>
        </div>
        <div className="lg:w-[25%] bg-red-300 rounded-md	 h-40 sticky top-0 p-5 ">
          <h1 className="text-center text-xl font-bold">Meals Details</h1>
          <ProductName name={reciepeName}></ProductName>
        </div>
      </div>
      {
        showall &&
        <div className="text-center">
        <button onClick={()=>showAllproduct()} className="py-2 px-4 rounded-md bg-neutral text-white  ">
          See more
        </button>
        </div>
      }
    </>
  );
};

export default Meals;
