import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hoteljalapao',
  templateUrl: './hoteljalapao.page.html',
  styleUrls: ['./hoteljalapao.page.scss'],
})
export class HoteljalapaoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  termoDePesquisa: string = ''; // Variável para armazenar o termo de pesquisa
  resultados: any[] = []; // Array para armazenar os resultados da pesquisa

  pesquisarItens(event: any) {
    // Limpa a lista de resultados
    this.resultados = [];

    const termo = event.target.value; // Obtém o termo de pesquisa do evento

    if (termo && termo.trim() !== '') {
      // Implemente sua lógica de pesquisa aqui
      // Pode buscar dados em uma API ou localmente

      // Exemplo de pesquisa local (substitua pela sua lógica real)
      this.resultados = ['Resultado 1', 'Resultado 2', 'Resultado 3'];
    }
  }

}
