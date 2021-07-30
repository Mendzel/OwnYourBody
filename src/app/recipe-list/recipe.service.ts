import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RecipeModel } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipesChanged = new Subject<RecipeModel[]>();
  displayRecipe: Boolean = false;
  allRecipes: RecipeModel[] = [
    new RecipeModel(
      'Sałatka z rzodkiewki',
      'https://cdn.aniagotuje.com/pictures/articles/2021/06/16336343-v-1080x1080.jpg',
      884,
      'Sałatka z rzodkiewką to pyszna i bardzo uniwersalna sałatka, którą można podać na wiele okazji. Latem sprawdzi się do dań z grilla, a na Wielkanoc jako sałatka na świątecznym stole. ',
      'Sałatka',
      [
        'rodzkiewka 200g',
        'ogórek gruntowy 80 g',
        '3 duże jajka',
        '100 g sera feta',
        '80 g mieszanki sałat',
        'garść koperku',
        'po szczypcie soli i pieprzu',
      ],
      [
        'Pęczek rzodkiewek umyj. Odetnij natkę oraz ogonki, zaś rzodkiewki pokrój w plasterki. Użyłam do tego nożna z ozdobnym ostrzem. ',
        'Przygotuj też sos z musztardą. W małej miseczce wymieszaj ze sobą wszystkie składniki sosu: po jednej, nie czubatej łyżce musztardy miodowej, majonezu oraz kremowego jogurtu naturalnego; trzy łyżki świeżo wyciśniętego soku z cytryny; dwie łyżki ulubionej oliwy; płaska łyżeczka dobrej jakości miodu jasnego. ',
        'Każde ugotowane na twardo i obrane jajko pokrój na sześć kawałków i umieść w dużej misce w resztą składników. Całość polej kremowym sosem i posyp siekanym koperkiem. Delikatnie wymieszaj sałatkę z rzodkiewkami i sprawdź jej smak. Dopraw ją szczyptą soli i pieprzu. Podawaj od razu lub po lekkim schłodzeniu. ',
      ]
    ),
    new RecipeModel(
      'Stripsy z kurczaka',
      'https://cdn.aniagotuje.com/pictures/articles/2021/03/13144893-v-1080x1080.jpg',
      1950,
      'Stripsy z kurczaka to pyszne i soczyste kawałki kurczaka w aromatycznej panierce. Można je szykować i podawać na wiele sposobów. Zapraszam po mój ulubiony przepis i całą garść porad i inspiracji..',
      'Obiad',
      [
        '1 nieduża pierś z kurczaka - około 500 g',
        '4 łyżki mąki pszennej lub kukurydzianej - około 60 g',
        '2 duże jajka - do 120 g po rozbiciu',
        '6 łyżek mleka lub napoju roślinnego',
        '2 łyżki oliwy lub oleju rzepakowego',
        'do 200 g płatków typu corn flakes lub bułki tartej',
        'przyprawy: 1 płaska łyżeczka soli, po pół płaskiej łyżeczki słodkiej papryki, majeranku i pieprzu; po 1/3 płaskiej łyżeczki ostrej papryki, czosnku, kminku, imbiru i kolendry',
      ],
      [
        'Dwa małe filety z kurczaka (cała pierś) pokrój na nieduże, lekko podłużne kawałki. U mnie wyszło ich łącznie 30, ale możesz też szykować większe stripsy. Podczas krojenia mięsa usuń ewentualne żyłki, czy chrząstki.',
        'Bardzo dokładnie wymieszaj kawałki mięsa z przyprawami i olejem. Naczynie odstaw na 30 minut na bok.',
        ' Do głębszej i szerokiej miski wbij dwa duże jajka. Wsyp cztery łyżki mąki pszennej lub też mąki kukurydzianej, czyli łącznie około 60 gramów mąki. Dosyp przyprawy, czyli pół łyżeczki papryki słodkiej i około 1/3 łyżeczki papryki ostrej. Na koniec wlej jeszcze sześć łyżek mleka lub ulubionego napoju roślinnego np. ryżowego lub migdałowego. Całość bardzo dokładnie wymieszaj, by powstało Ci jednolite, gęste ciasto naleśnikowe bez grudek.',
        'Kawałki mięsa obtaczasz w cieście i smażysz lub pieczesz. Polecam jednak przygotować sobie jeszcze jeden element panierki. U mnie będą to rozgniecione drobno płatki kukurydziane typu corn flakes',
      ]
    ),
    new RecipeModel(
      'Gulasz wołowy',
      'https://cdn.aniagotuje.com/pictures/articles/2021/03/12897135-v-1080x1080.jpg',
      1250,
      'Stripsy z kurczaka to pyszne i soczyste kawałki kurczaka w aromatycznej panierce. Można je szykować i podawać na wiele sposobów. Zapraszam po mój ulubiony przepis i całą garść porad i inspiracji..',
      'Obiad',
      [
        '1 nieduża pierś z kurczaka - około 500 g',
        '4 łyżki mąki pszennej lub kukurydzianej - około 60 g',
        '2 duże jajka - do 120 g po rozbiciu',
        '6 łyżek mleka lub napoju roślinnego',
        '2 łyżki oliwy lub oleju rzepakowego',
        'do 200 g płatków typu corn flakes lub bułki tartej',
        'przyprawy: 1 płaska łyżeczka soli, po pół płaskiej łyżeczki słodkiej papryki, majeranku i pieprzu; po 1/3 płaskiej łyżeczki ostrej papryki, czosnku, kminku, imbiru i kolendry',
      ],
      [
        'Dwa małe filety z kurczaka (cała pierś) pokrój na nieduże, lekko podłużne kawałki. U mnie wyszło ich łącznie 30, ale możesz też szykować większe stripsy. Podczas krojenia mięsa usuń ewentualne żyłki, czy chrząstki.',
        'Bardzo dokładnie wymieszaj kawałki mięsa z przyprawami i olejem. Naczynie odstaw na 30 minut na bok.',
        ' Do głębszej i szerokiej miski wbij dwa duże jajka. Wsyp cztery łyżki mąki pszennej lub też mąki kukurydzianej, czyli łącznie około 60 gramów mąki. Dosyp przyprawy, czyli pół łyżeczki papryki słodkiej i około 1/3 łyżeczki papryki ostrej. Na koniec wlej jeszcze sześć łyżek mleka lub ulubionego napoju roślinnego np. ryżowego lub migdałowego. Całość bardzo dokładnie wymieszaj, by powstało Ci jednolite, gęste ciasto naleśnikowe bez grudek.',
        'Kawałki mięsa obtaczasz w cieście i smażysz lub pieczesz. Polecam jednak przygotować sobie jeszcze jeden element panierki. U mnie będą to rozgniecione drobno płatki kukurydziane typu corn flakes',
      ]
    ),
    new RecipeModel(
      'Roladki z indyka',
      'https://cdn.aniagotuje.com/pictures/articles/2021/03/12914056-v-1080x1080.jpg',
      1500,
      'Stripsy z kurczaka to pyszne i soczyste kawałki kurczaka w aromatycznej panierce. Można je szykować i podawać na wiele sposobów. Zapraszam po mój ulubiony przepis i całą garść porad i inspiracji..',
      'Obiad',
      [
        '1 nieduża pierś z kurczaka - około 500 g',
        '4 łyżki mąki pszennej lub kukurydzianej - około 60 g',
        '2 duże jajka - do 120 g po rozbiciu',
        '6 łyżek mleka lub napoju roślinnego',
        '2 łyżki oliwy lub oleju rzepakowego',
        'do 200 g płatków typu corn flakes lub bułki tartej',
        'przyprawy: 1 płaska łyżeczka soli, po pół płaskiej łyżeczki słodkiej papryki, majeranku i pieprzu; po 1/3 płaskiej łyżeczki ostrej papryki, czosnku, kminku, imbiru i kolendry',
      ],
      [
        'Dwa małe filety z kurczaka (cała pierś) pokrój na nieduże, lekko podłużne kawałki. U mnie wyszło ich łącznie 30, ale możesz też szykować większe stripsy. Podczas krojenia mięsa usuń ewentualne żyłki, czy chrząstki.',
        'Bardzo dokładnie wymieszaj kawałki mięsa z przyprawami i olejem. Naczynie odstaw na 30 minut na bok.',
        ' Do głębszej i szerokiej miski wbij dwa duże jajka. Wsyp cztery łyżki mąki pszennej lub też mąki kukurydzianej, czyli łącznie około 60 gramów mąki. Dosyp przyprawy, czyli pół łyżeczki papryki słodkiej i około 1/3 łyżeczki papryki ostrej. Na koniec wlej jeszcze sześć łyżek mleka lub ulubionego napoju roślinnego np. ryżowego lub migdałowego. Całość bardzo dokładnie wymieszaj, by powstało Ci jednolite, gęste ciasto naleśnikowe bez grudek.',
        'Kawałki mięsa obtaczasz w cieście i smażysz lub pieczesz. Polecam jednak przygotować sobie jeszcze jeden element panierki. U mnie będą to rozgniecione drobno płatki kukurydziane typu corn flakes',
      ]
    ),
    new RecipeModel(
      'Chleb z oliwkami',
      'https://cdn.aniagotuje.com/pictures/articles/2021/05/15858024-v-1080x1080.jpg',
      2900,
      'Stripsy z kurczaka to pyszne i soczyste kawałki kurczaka w aromatycznej panierce. Można je szykować i podawać na wiele sposobów. Zapraszam po mój ulubiony przepis i całą garść porad i inspiracji..',
      'Śniadanie',
      [
        '1 nieduża pierś z kurczaka - około 500 g',
        '4 łyżki mąki pszennej lub kukurydzianej - około 60 g',
        '2 duże jajka - do 120 g po rozbiciu',
        '6 łyżek mleka lub napoju roślinnego',
        '2 łyżki oliwy lub oleju rzepakowego',
        'do 200 g płatków typu corn flakes lub bułki tartej',
        'przyprawy: 1 płaska łyżeczka soli, po pół płaskiej łyżeczki słodkiej papryki, majeranku i pieprzu; po 1/3 płaskiej łyżeczki ostrej papryki, czosnku, kminku, imbiru i kolendry',
      ],
      [
        'Dwa małe filety z kurczaka (cała pierś) pokrój na nieduże, lekko podłużne kawałki. U mnie wyszło ich łącznie 30, ale możesz też szykować większe stripsy. Podczas krojenia mięsa usuń ewentualne żyłki, czy chrząstki.',
        'Bardzo dokładnie wymieszaj kawałki mięsa z przyprawami i olejem. Naczynie odstaw na 30 minut na bok.',
        ' Do głębszej i szerokiej miski wbij dwa duże jajka. Wsyp cztery łyżki mąki pszennej lub też mąki kukurydzianej, czyli łącznie około 60 gramów mąki. Dosyp przyprawy, czyli pół łyżeczki papryki słodkiej i około 1/3 łyżeczki papryki ostrej. Na koniec wlej jeszcze sześć łyżek mleka lub ulubionego napoju roślinnego np. ryżowego lub migdałowego. Całość bardzo dokładnie wymieszaj, by powstało Ci jednolite, gęste ciasto naleśnikowe bez grudek.',
        'Kawałki mięsa obtaczasz w cieście i smażysz lub pieczesz. Polecam jednak przygotować sobie jeszcze jeden element panierki. U mnie będą to rozgniecione drobno płatki kukurydziane typu corn flakes',
      ]
    ),
    new RecipeModel(
      'Chaczapuri',
      'https://cdn.aniagotuje.com/pictures/articles/2021/05/15404658-v-1080x1080.jpg',
      930,
      'Stripsy z kurczaka to pyszne i soczyste kawałki kurczaka w aromatycznej panierce. Można je szykować i podawać na wiele sposobów. Zapraszam po mój ulubiony przepis i całą garść porad i inspiracji..',
      'Kolacja',
      [
        '1 nieduża pierś z kurczaka - około 500 g',
        '4 łyżki mąki pszennej lub kukurydzianej - około 60 g',
        '2 duże jajka - do 120 g po rozbiciu',
        '6 łyżek mleka lub napoju roślinnego',
        '2 łyżki oliwy lub oleju rzepakowego',
        'do 200 g płatków typu corn flakes lub bułki tartej',
        'przyprawy: 1 płaska łyżeczka soli, po pół płaskiej łyżeczki słodkiej papryki, majeranku i pieprzu; po 1/3 płaskiej łyżeczki ostrej papryki, czosnku, kminku, imbiru i kolendry',
      ],
      [
        'Dwa małe filety z kurczaka (cała pierś) pokrój na nieduże, lekko podłużne kawałki. U mnie wyszło ich łącznie 30, ale możesz też szykować większe stripsy. Podczas krojenia mięsa usuń ewentualne żyłki, czy chrząstki.',
        'Bardzo dokładnie wymieszaj kawałki mięsa z przyprawami i olejem. Naczynie odstaw na 30 minut na bok.',
        ' Do głębszej i szerokiej miski wbij dwa duże jajka. Wsyp cztery łyżki mąki pszennej lub też mąki kukurydzianej, czyli łącznie około 60 gramów mąki. Dosyp przyprawy, czyli pół łyżeczki papryki słodkiej i około 1/3 łyżeczki papryki ostrej. Na koniec wlej jeszcze sześć łyżek mleka lub ulubionego napoju roślinnego np. ryżowego lub migdałowego. Całość bardzo dokładnie wymieszaj, by powstało Ci jednolite, gęste ciasto naleśnikowe bez grudek.',
        'Kawałki mięsa obtaczasz w cieście i smażysz lub pieczesz. Polecam jednak przygotować sobie jeszcze jeden element panierki. U mnie będą to rozgniecione drobno płatki kukurydziane typu corn flakes',
      ]
    ),
    new RecipeModel(
      'Deser z truskawkami',
      'https://cdn.aniagotuje.com/pictures/articles/2021/06/16091533-v-1080x1080.jpg',
      510,
      'Stripsy z kurczaka to pyszne i soczyste kawałki kurczaka w aromatycznej panierce. Można je szykować i podawać na wiele sposobów. Zapraszam po mój ulubiony przepis i całą garść porad i inspiracji..',
      'Dodatek',
      [
        '1 nieduża pierś z kurczaka - około 500 g',
        '4 łyżki mąki pszennej lub kukurydzianej - około 60 g',
        '2 duże jajka - do 120 g po rozbiciu',
        '6 łyżek mleka lub napoju roślinnego',
        '2 łyżki oliwy lub oleju rzepakowego',
        'do 200 g płatków typu corn flakes lub bułki tartej',
        'przyprawy: 1 płaska łyżeczka soli, po pół płaskiej łyżeczki słodkiej papryki, majeranku i pieprzu; po 1/3 płaskiej łyżeczki ostrej papryki, czosnku, kminku, imbiru i kolendry',
      ],
      [
        'Dwa małe filety z kurczaka (cała pierś) pokrój na nieduże, lekko podłużne kawałki. U mnie wyszło ich łącznie 30, ale możesz też szykować większe stripsy. Podczas krojenia mięsa usuń ewentualne żyłki, czy chrząstki.',
        'Bardzo dokładnie wymieszaj kawałki mięsa z przyprawami i olejem. Naczynie odstaw na 30 minut na bok.',
        ' Do głębszej i szerokiej miski wbij dwa duże jajka. Wsyp cztery łyżki mąki pszennej lub też mąki kukurydzianej, czyli łącznie około 60 gramów mąki. Dosyp przyprawy, czyli pół łyżeczki papryki słodkiej i około 1/3 łyżeczki papryki ostrej. Na koniec wlej jeszcze sześć łyżek mleka lub ulubionego napoju roślinnego np. ryżowego lub migdałowego. Całość bardzo dokładnie wymieszaj, by powstało Ci jednolite, gęste ciasto naleśnikowe bez grudek.',
        'Kawałki mięsa obtaczasz w cieście i smażysz lub pieczesz. Polecam jednak przygotować sobie jeszcze jeden element panierki. U mnie będą to rozgniecione drobno płatki kukurydziane typu corn flakes',
      ]
    ),
  ];
  constructor() {}

  addNewRecipe(recipe: RecipeModel) {
    this.allRecipes.push(recipe);
    this.recipesChanged.next(this.allRecipes.slice());
  }
}
