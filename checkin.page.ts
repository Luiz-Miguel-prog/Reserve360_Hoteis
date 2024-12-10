import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,  ReactiveFormsModule } from '@angular/forms';
import { Autenticacao } from '../../autenticacao.service';
import { Router } from '@angular/router';
import { Entrada } from '../../usuario.module';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.page.html',
  styleUrls: ['./checkin.page.scss'],
})
export class CheckinPage implements OnInit {
  entradaListRef: AngularFireList<Entrada>;

  constructor(private autenticacao: Autenticacao, private db: AngularFireDatabase) {
    this.entradaListRef = this.db.list('usuarios');
  }

  ngOnInit() {}

  entrada: FormGroup = new FormGroup({
    entrada: new FormControl(null),
    saida: new FormControl(null),
    pessoas: new FormControl(null),
    quartos: new FormControl(null),
  });

  public usuarioEntrada(): void {
    let checkin: Entrada = new Entrada(
      this.entrada.value.entrada,
      this.entrada.value.saida,
      this.entrada.value.pessoas,
      this.entrada.value.quartos,
    );

    this.autenticacao.entradaUsuario(checkin);

    // Salvar o usuário no Firebase Realtime Database
    this.entradaListRef.push(checkin).then(() => {
      alert('Usuário cadastrado com sucesso');
    }).catch((error) => {
      console.error('Falha no cadastro: ', error);
    });
  }
}
