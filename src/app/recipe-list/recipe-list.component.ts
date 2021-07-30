import { Component, OnChanges, OnInit } from '@angular/core';
import { RecipeModel } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: RecipeModel[] = [];
  breakfasts: RecipeModel[] = [];
  dinners: RecipeModel[] = [];
  suppers: RecipeModel[] = [];
  snacks: RecipeModel[] = [];
  salads: RecipeModel[] = [];
  constructor(public recipeService: RecipeService) {}
  ngOnInit(): void {
    this.recipes = this.recipeService.allRecipes;
    this.recipeService.recipesChanged.subscribe((recipe: RecipeModel[]) => {
      this.recipes = recipe;
      this.sortTheRecipes();
    });
    this.sortTheRecipes();
  }

  newRecipeClicked() {
    this.recipeService.displayRecipe = !this.recipeService.displayRecipe;
  }

  sortTheRecipes() {
    this.breakfasts = [];
    this.dinners = [];
    this.suppers = [];
    this.snacks = [];
    this.salads = [];
    for (let recipe of this.recipes) {
      switch (recipe.mealType) {
        case 'Śniadanie':
          this.breakfasts.push(recipe);
          break;
        case 'Obiad':
          this.dinners.push(recipe);
          break;
        case 'Kolacja':
          this.suppers.push(recipe);
          break;
        case 'Sałatka':
          this.salads.push(recipe);
          break;
        case 'Dodatek':
          this.snacks.push(recipe);
          break;
      }
    }
  }
}
