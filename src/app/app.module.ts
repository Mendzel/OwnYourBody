import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing.module';

import { recipeModule } from './recipe-list/recipeModule';
import { appComponentModule } from './appComponentModule';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    recipeModule,
    appComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
