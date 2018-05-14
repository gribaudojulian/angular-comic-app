import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from "./components/main/main.component";
import { AboutComponent } from "./components/about/about.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { HeroeComponent } from "./components/heroe/heroe.component";

const APP_ROUTES: Routes = [
  {path: 'home', component: MainComponent },
  {path: 'about', component: AboutComponent },
  {path: 'heroes', component: HeroesComponent },
  {path: 'heroes/:criterio', component: HeroesComponent },
  {path: 'heroe/:id', component: HeroeComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'home' }
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);