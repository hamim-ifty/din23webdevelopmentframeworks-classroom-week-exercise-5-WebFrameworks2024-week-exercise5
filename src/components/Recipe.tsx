import React from "react";

interface IRecipeProps {
  recipeData: {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
  };
}

const Recipe: React.FC<IRecipeProps> = ({ recipeData }) => {
  return (
    <div>
      <h2>{recipeData.name}</h2>
      <h3>Ingredients:</h3>
      <ul>
        {recipeData.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <ol>
        {recipeData.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;

//done
