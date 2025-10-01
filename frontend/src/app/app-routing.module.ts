import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NivelfacilComponent } from './nivelfacil/nivelfacil.component' ;
import { NivelmedioComponent } from './nivelmedio/nivelmedio.component';
import { NiveldificilComponent } from './niveldificil/niveldificil.component';


const routes: Routes = [
  {path: 'home',     component: HomeComponent},
  {path:'nivelfacil', component: NivelfacilComponent},
  {path:'nivelmedio',component: NivelmedioComponent},
  {path:'niveldificil',component: NiveldificilComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
