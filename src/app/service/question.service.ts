import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  getQuestionJson(){
    return this.http.get<any>("assets/perguntas.json");
  }
  getQuestionMedium(): Observable<any> {
  return this.http.get<any>('assets/perguntasmedio.json');
}
 getQuestionHard(): Observable<any> {
    return this.http.get<any>("assets/perguntasdificil.json");
  }


 

}
