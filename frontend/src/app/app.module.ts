import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import $ from 'jquery';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { InfoComponent } from './info/info.component';
import { QuizComponent } from './quiz/quiz.component';
import { HttpClientModule } from '@angular/common/http';
import { LegislacaoComponent } from './juridico/legislacao/legislacao.component';
import { TermoservicoComponent } from './juridico/termoservico/termoservico.component';
import { PoliticaprivacidadeComponent } from './juridico/politicaprivacidade/politicaprivacidade.component';
import { FilmeserieComponent } from './filmeserie/filmeserie.component';
import { TelefonesComponent } from './telefones/telefones.component';
import { NivelfacilComponent } from './nivelfacil/nivelfacil.component';
import { NivelmedioComponent } from './nivelmedio/nivelmedio.component';
import { NiveldificilComponent } from './niveldificil/niveldificil.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    InfoComponent,
    QuizComponent,
    LegislacaoComponent,
    TermoservicoComponent,
    PoliticaprivacidadeComponent,
    FilmeserieComponent,
    TelefonesComponent,
    NivelfacilComponent,
    NivelmedioComponent,
    NiveldificilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
