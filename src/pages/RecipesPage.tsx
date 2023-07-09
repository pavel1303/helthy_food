import { useState } from "react";
import { IRecipe } from "../components/Recipe";
import RecipeList from "../components/RecipeList";
import { recipes as recipeList } from "../dataMock/recipes";
import s from "./styles.module.css";
import AddRecipeForm from "../components/AddRecipeForm";

type Props = {};

const RecipesPage = (props: Props) => {
  const [recipes, setRecipes] = useState(recipeList);
  const removeRecipe = (id: number) => {
    setRecipes([...recipes.filter((recipe) => recipe.id !== id)]);
  };
  const addRecipe = (recipe: IRecipe) => {
    setRecipes([...recipes, recipe]);
  };
  return (
    <div className={s["recipe-list"]}>
      <AddRecipeForm addRecipe={addRecipe} />
      <RecipeList recipes={recipes} removeRecipe={removeRecipe} />
    </div>
  );
};

export default RecipesPage;
