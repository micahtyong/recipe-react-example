import React from "react";
import style from "./recipecard.module.css";

interface RecipeCardProps {
  header: string;
  calories: number;
  image: string;
  ingredients: any;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  header,
  calories,
  image,
  ingredients,
}) => {
  return (
    <div className={style.recipe}>
      <h1>{header}</h1>
      <ol>
        {ingredients.map((ingredient: any) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>{calories}</p>
      <img src={image} alt='' />
    </div>
  );
};

export default RecipeCard;
