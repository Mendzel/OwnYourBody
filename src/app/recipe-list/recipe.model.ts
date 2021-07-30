export class RecipeModel {
  mealName: string;
  imageURL: string;
  kcalValue: number;
  description: string;
  mealType: string;
  products: string[];
  stepByStep: string[];

  constructor(
    mealName: string,
    imageURL: string,
    kcalValue: number,
    description: string,
    mealType: string,
    products: string[],
    stepByStep: string[]
  ) {
    this.mealName = mealName;
    this.imageURL = imageURL;
    this.kcalValue = kcalValue;
    this.description = description;
    this.mealType = mealType;
    this.products = products;
    this.stepByStep = stepByStep;
  }
}
