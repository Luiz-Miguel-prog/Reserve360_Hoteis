import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jalapao',
  templateUrl: './jalapao.page.html',
  styleUrls: ['./jalapao.page.scss'],
})
export class JalapaoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  slideOpts = {
    initialSlide: 0, // Slide inicial
    speed: 400, // Velocidade da transição (em milissegundos)
    autoplay: {
      delay: 2000, // Tempo entre as transições automáticas (em milissegundos)
    },
  };

}
