import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import { Autenticacao } from '../../autenticacao.service';
import { Router } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Reservar } from 'src/app/usuario.module';



@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.page.html',
  styleUrls: ['./reserva.page.scss'],
})
export class ReservaPage implements OnInit {
  reservaListRef: AngularFireList<Reservar>;

  constructor(private autenticacao: Autenticacao, private db: AngularFireDatabase) {
    this.reservaListRef = this.db.list('usuarios');
  }

  ngOnInit() {}

  reserva: FormGroup = new FormGroup({
    nome: new FormControl(null),
    sobrenome: new FormControl(null),
    email: new FormControl(null),
    celular: new FormControl(null),
    senha1: new FormControl(null),
    senha2: new FormControl(null),
  });

  public usuarioReserva(): void {
    let reservar: Reservar = new Reservar(
      this.reserva.value.nome,
      this.reserva.value.sobrenome,
      this.reserva.value.email,
      this.reserva.value.celular,
      this.reserva.value.senha1,
      this.reserva.value.senha2
    );

    this.autenticacao.reservaUsuario(reservar);

    // Salvar o usuário no Firebase Realtime Database
    this.reservaListRef.push(reservar).then(() => {
      alert('Usuário cadastrado com sucesso');
    }).catch((error) => {
      console.error('Falha no cadastro: ', error);
    });
  }
}
