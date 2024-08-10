document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('recipe-form');
    const recipesContainer = document.getElementById('recipes-container');
  
    loadRecipes();
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = document.getElementById('recipe-name').value;
      const ingredients = document.getElementById('recipe-ingredients').value;
      const image = document.getElementById('recipe-image').value;
      const instructions = document.getElementById('recipe-instructions').value;
  
      if (name && ingredients && image && instructions) {
        const recipe = {
          name,
          ingredients,
          image,
          instructions,
        };
  
        saveRecipe(recipe);
        form.reset();
      }
    });
  
    function saveRecipe(recipe) {
      let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
      recipes.push(recipe);
      localStorage.setItem('recipes', JSON.stringify(recipes));
      loadRecipes();
    }
  
    function loadRecipes() {
      let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
      recipesContainer.innerHTML = '';
  
      recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';
        recipeCard.innerHTML = `
          <h3>${recipe.name}</h3>
          <img src="${recipe.image}" alt="${recipe.name}">
          <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
          <p><strong>Instructions:</strong> ${recipe.instructions}</p>
        `;
        recipesContainer.appendChild(recipeCard);
      });
    }
  });
  