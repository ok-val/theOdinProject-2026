import { recipes } from './data.js';

function List({ id, name, ingredients }) {
  return (
    <ul>
      <h2>{name}</h2>
      {ingredients.map((ingredient) => (
        <li key={ingredient}>{ingredient}</li>
      ))}
    </ul>
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      // Key is passed here rather than on the `ul` returned by List
      {recipes.map((recipe) => (
        // <List key={recipe.id} recipe={recipe} />
        <List key={recipe.id} {...recipe} />
      ))}
    </div>
  );
}

/**
 * NOTE that the key specified on each mapped List in the context of the
 * mapping function itself.
 *
 * This is because `key` is needed directly within the CONTEXT OF THE
 * SURROUNDING ARRAY.
 */
