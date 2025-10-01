import { Component, OnInit } from '@angular/core';

interface Slide {
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
      imagem: 'assets/img/Untitled.jpg'
    },
    {
      imagem: 'assets/img/alunas.jpg'
    },
    {
      imagem: 'assets/img/.jpg'
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
