import { useState } from "react";
import s from "./styles.module.css";

type Props = {
  ingredients: string[];
};

const IngredientList = (props: Props) => {
  const [isShown, setShown] = useState(false);

  const openIngredients = () => {
    setShown(!isShown);
  };

  const { ingredients } = props;
  return (
    <div>
      <p className={s["ingredients"]} onClick={openIngredients}>
        Ингридиенты
        {!isShown ? (
          <span className={s["arrow"]}>▼</span>
        ) : (
          <span className={s["arrow"]}>▲</span>
        )}
      </p>
      <ul className={s["ingredients-list"]}>
        {isShown && ingredients.map((ingredient) => <li>{ingredient}</li>)}
      </ul>
    </div>
  );
};

export default IngredientList;
