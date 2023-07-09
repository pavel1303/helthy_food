import IngredientList from "../IngredientList";
import s from "./styles.module.css";

export type IRecipe = {
  id: number;
  title: string;
  ingredients: string[];
  cookingTime: string;
  cookingDescription: string;
};

type Props = {
  recipe: IRecipe;
  removeRecipe: (id: number) => void;
};

const Recipe = (props: Props) => {
  const { recipe, removeRecipe } = props;
  const { id, title, ingredients, cookingTime, cookingDescription } = recipe;
  return (
    <div className={s.recipe}>
      <h3>{title}</h3>
      <IngredientList ingredients={ingredients} />
      <p>Время приготовления: {cookingTime}</p>
      <div>
        <h4>Процесс приготовления</h4>
        <p>{cookingDescription}</p>
      </div>
      <button onClick={() => removeRecipe(id)}>Удалить</button>
    </div>
  );
};

export default Recipe;
