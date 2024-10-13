import React from "react";
import Recipe from "./Recipe";

interface IRecipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
}

interface IRecipeListProps {
  recipes: IRecipe[];
}

const RecipeList: React.FC<IRecipeListProps> = ({ recipes }) => {
  return (
    <div>
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} recipeData={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;


//Hamim Hasan IFTY