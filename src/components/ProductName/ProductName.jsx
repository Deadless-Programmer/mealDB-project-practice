import React from "react";

const ProductName = (props) => {
 const recipes = props.name;
 

  return <div>
      {
        recipes.map(recipe=><p> {recipe} </p>)
      }
   
    </div>;
};

export default ProductName;
