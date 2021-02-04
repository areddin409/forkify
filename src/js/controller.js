import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log('🚀 ~ file: controller.js ~ line 37 ~ showRecipe ~ id', id);

    if (!id) return;
    recipeView.renderSpinner();

    // 1) Loading Recipe
    await model.loadRecipe(id);

    // 2) Rendering Recipe
    recipeView.render(model.state.recipe);
  } catch (error) {
    console.log(
      '🚀 ~ file: controller.js ~ line 27 ~ controlRecipes ~ error',
      error
    );
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};
init();
