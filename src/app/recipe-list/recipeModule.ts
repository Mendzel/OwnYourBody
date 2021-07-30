import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RecipeListComponent } from './recipe-list.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';

@NgModule({
  exports: [
    RecipeListComponent,
    NewRecipeComponent,
    EditRecipeComponent,
    RecipeItemComponent,
  ],
  declarations: [
    RecipeListComponent,
    NewRecipeComponent,
    EditRecipeComponent,
    RecipeItemComponent,
  ],
  imports: [ReactiveFormsModule, MaterialModule, BrowserModule],
})
export class recipeModule {}
