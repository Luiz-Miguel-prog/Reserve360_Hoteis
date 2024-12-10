import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,  ReactiveFormsModule } from '@angular/forms';
import { Autenticacao } from '../autenticacao.service';
import { Router } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Pagar } from 'src/app/usuario.module';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.page.html',
  styleUrls: ['./pagamento.page.scss'],
})
export class PagamentoPage implements OnInit {
  pagarListRef: AngularFireList<Pagar>;

  constructor(private autenticacao: Autenticacao, private db: AngularFireDatabase) {
    this.pagarListRef = this.db.list('usuarios');
  }

  ngOnInit() {}

  pagar: FormGroup = new FormGroup({
    numero: new FormControl(null),
    validade: new FormControl(null),
    nome: new FormControl(null),
    cvv: new FormControl(null)
  });

  public usuarioPagar(): void {
    let pagar: Pagar = new Pagar(
      this.pagar.value.numero,
      this.pagar.value.validade,
      this.pagar.value.nome,
      this.pagar.value.cvv,
    );

    this.autenticacao.pagarUsuario(pagar);

    // Salvar o usuário no Firebase Realtime Database
    this.pagarListRef.push(pagar).then(() => {
      alert('Usuário cadastrado com sucesso');
    }).catch((error) => {
      console.error('Falha no cadastro: ', error);
    });
  }
}
