export type Recipe = {
  bookmarked: boolean;
  bought: boolean;
  recipe: RecipeDetails;
};

export type RecipeDetails = {
  calories: number;
  cautions: string[];
  dietLabels: string[];
  digest: any;
  healthLabels: string[];
  image: string;
  ingredientLines: string[];
  ingredients: any;
  label: string;
  shareAs: string;
  source: string;
  totalDaily: any;
  totalNutrients: any;
  totalTime: number;
  totalWeight: number;
  uri: string;
  url: string;
  yield: number;
};
