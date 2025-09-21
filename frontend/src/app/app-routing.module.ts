import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { QuizComponent } from './quiz/quiz.component';
import { FilmeserieComponent } from './filmeserie/filmeserie.component';
import { LegislacaoComponent } from './juridico/legislacao/legislacao.component';
import { PoliticaprivacidadeComponent } from './juridico/politicaprivacidade/politicaprivacidade.component';
import { TermoservicoComponent } from './juridico/termoservico/termoservico.component';
import { TelefonesComponent } from './telefones/telefones.component' ;
import { NivelfacilComponent } from './nivelfacil/nivelfacil.component' ;
import { NivelmedioComponent } from './nivelmedio/nivelmedio.component';


const routes: Routes = [
  {path: '',     component: HomeComponent},
  {path:'informacoes', component: InfoComponent},
  {path:'quiz', component: QuizComponent},
  {path:'legislacao', component: LegislacaoComponent},
  {path:'politicadeprivacidade', component: PoliticaprivacidadeComponent},
  {path:'termodeservico', component: TermoservicoComponent},
  {path:'filmeseries', component: FilmeserieComponent},
  {path:'telefones', component: TelefonesComponent},
  {path:'nivelfacil', component: NivelfacilComponent},
  {path:'nivelmedio',component: NivelmedioComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
