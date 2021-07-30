import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DayCardComponent } from './calendar/day-card/day-card.component';
import { SelectRecipeComponent } from './calendar/select-recipe/select-recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NewProductComponent } from './shopping-list/new-product/new-product.component';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  exports: [AppComponent],
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CalendarComponent,
    DayCardComponent,
    SelectRecipeComponent,
    ShoppingListComponent,
    NewProductComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class appComponentModule {}
