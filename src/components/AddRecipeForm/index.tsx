import { useState } from "react";
import { IRecipe } from "../Recipe";
import s from "./styles.module.css";
type Props = {
  addRecipe: (recipe: IRecipe) => void;
};

const AddRecipeForm = (props: Props) => {
  const { addRecipe } = props;
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");

  const clearForm = () => {
    setTitle("");
    setIngredients("");
    setTime("");
    setDescription("");
  };

  const createRecipe = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const recipe = {
      id: Date.now(),
      title,
      ingredients: ingredients.split(","),
      cookingTime: time + "минут",
      cookingDescription: description,
    };
    addRecipe(recipe);
    clearForm();
  };

  return (
    <form className={s}>
      <div>
        <p>Название блюда</p>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <p>Какие ингредиенты потребуются</p>
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
      </div>
      <div>
        <p>Время приготовления</p>
        <input
          type="text"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div>
        <p>Опиши процесс приготовления</p>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button onClick={(e) => createRecipe(e)}>Добавить рецепт</button>
    </form>
  );
};

export default AddRecipeForm;
