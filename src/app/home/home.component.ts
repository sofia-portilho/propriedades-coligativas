import { Component, OnInit } from '@angular/core';

interface Slide {
  titulo: string;
  descricao: string;
  imagem: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slides: Slide[] = [
    {
      titulo: 'Sobre o Projeto',
      descricao: 'Informações sobre o projeto vão aqui.',
      imagem: 'assets/img/sobre.jpg'
    },
    {
      titulo: 'Participantes',
      descricao: 'Lista de participantes do projeto.',
      imagem: 'assets/img/participantes.jpg'
    },
    {
      titulo: 'Resultados',
      descricao: 'Resultados ou conquistas do projeto.',
      imagem: 'assets/img/resultados.jpg'
    }
  ];

  currentIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.startAutoSlide();
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  startAutoSlide(interval: number = 5000): void {
    setInterval(() => {
      this.nextSlide();
    }, interval);
  }
}
