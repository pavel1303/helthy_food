import Recipe, { IRecipe } from "../Recipe";
import s from "./styles.module.css";

type Props = {
  recipes: IRecipe[];
  removeRecipe: (id: number) => void;
};
const RecipeList = (props: Props) => {
  const { recipes, removeRecipe } = props;
  return (
    <div className={s["recipe-list"]}>
      {recipes.map((recipe) => (
        <Recipe recipe={recipe} removeRecipe={removeRecipe} key={recipe.id} />
      ))}
    </div>
  );
};

export default RecipeList;
