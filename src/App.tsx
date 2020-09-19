import React, { useState, useEffect } from "react";
import RecipeCard from "./components/RecipeCard";
import { Recipe } from "./Interface";
import "./App.css";

function App() {
  const APP_ID: string = "4619a04a";
  const APP_KEY: string = "172015fa32072d0e6f5340ba2300dca7";
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [search, setSearch] = useState<string>("");
  const [query, setQuery] = useState<string>("chicken");

  useEffect(() => {
    getAndSetRecipes();
  }, [query]);

  const updateSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const getSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery(search);
  };

  const getAndSetRecipes = async (): Promise<void> => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data);
    setRecipes(data.hits);
  };

  return (
    <div className='App'>
      <form onSubmit={getSearch} className='search-form'>
        <input
          className='search-bar'
          type='text'
          value={search}
          onChange={updateSearch}
        />
        <button className='search-button' type='submit'>
          Submit
        </button>
      </form>
      <div className='recipes'>
        {recipes.map((recipe: Recipe) => (
          <RecipeCard
            key={recipe.recipe.label}
            header={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
