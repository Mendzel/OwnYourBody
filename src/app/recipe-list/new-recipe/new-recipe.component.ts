import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css'],
})
export class NewRecipeComponent implements OnInit {
  newRecipe = new FormGroup({
    mealName: new FormControl(null),
    imageURL: new FormControl(null),
    kcalValue: new FormControl(null),
    description: new FormControl(null),
    mealType: new FormControl(null),
    products: new FormArray([]),
    stepByStep: new FormArray([]),
  });

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.recipeService.addNewRecipe(this.newRecipe.value);
    this.newRecipe.patchValue({
      mealName: '',
      imageURL: '',
      kcalValue: null,
      description: '',
      mealType: null,
      products: [],
      stepByStep: [],
    });
    this.recipeService.displayRecipe = !this.recipeService.displayRecipe;
  }
}
