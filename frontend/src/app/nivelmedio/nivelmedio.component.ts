import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-nivelmedio',
  templateUrl: './nivelmedio.component.html',
  styleUrls: ['./nivelmedio.component.css']
})
export class NivelmedioComponent implements OnInit{

  public listaquestoes: any = [];
  public questaocorrente: number = 0;
  public pontuacao: number = 0;
  public progress: string = "0";
  public vetorPontuacao: any = [];
  public resultado: boolean = false;
  public resultadoTextContainer: boolean = false;
  public listarespostas: any = [];
  public texto: string = "";
  public titulo: string = "";

  constructor(private questionsService: QuestionService) { }

  ngOnInit(): void {
    this.getAllQuestions();

  }

  getAllQuestions() {
    this.questionsService.getQuestionMedium().subscribe(res => {
      this.listaquestoes = res.questions;
      this.listarespostas = res.respostas;
    })

  }
  calcProgressBar() {
    this.progress = ((((this.questaocorrente) + 1) / this.listaquestoes.length) * 100).toString();
    if (this.questaocorrente === 0) {
      this.progress = "0";
    }
  }
  nextQuestion() {
    this.questaocorrente++;
    this.calcProgressBar();
    // this.progress = ((((this.questaocorrente) + 1) / this.listaquestoes.length) * 100).toString();
  }
  previousQuestion() {
    this.questaocorrente--;
    this.calcProgressBar();
  }
  addvetorPontuacao(pontos: any) {
    this.vetorPontuacao[this.questaocorrente] = pontos;
    this.pontuacao = this.vetorPontuacao.reduce((accumulator: any, value: any) => accumulator + value, 0);
    if (!(this.listaquestoes.length === this.questaocorrente + 1)) {
      this.nextQuestion();
    } else {
      this.resultado = true;
    }
    console.log(this.pontuacao);
    console.log(this.vetorPontuacao);

  }
  resetQuiz() {
    this.pontuacao = 0;
    this.questaocorrente = 0;
    this.progress = "0";
    this.vetorPontuacao = [];
    this.resultado = false;
    this.resultadoTextContainer = false;
    $('div.quiz').removeClass("disabled");
  }
  resultadoTexto() {
    $('div.quiz').addClass("disabled");
    this.resultadoTextContainer = true;
    if (this.pontuacao < 41) {
      this.texto = this.listarespostas[0].texto;
      this.titulo = this.listarespostas[0].titulo;
    } else if (this.pontuacao > 40 && this.pontuacao < 91) {
      this.texto = this.listarespostas[1].texto;
      this.titulo = this.listarespostas[1].titulo;
    } else {
      this.texto = this.listarespostas[2].texto;
      this.titulo = this.listarespostas[2].titulo;
    }
  }
}