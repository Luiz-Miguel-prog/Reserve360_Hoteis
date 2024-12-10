import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,  ReactiveFormsModule } from '@angular/forms';
import { Autenticacao } from '../autenticacao.service';
import { Usuario } from '../usuario.module';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  usuariosListRef: AngularFireList<Usuario>;

  constructor(private autenticacao: Autenticacao, private db: AngularFireDatabase) {
    this.usuariosListRef = this.db.list('usuarios');
  }

  ngOnInit() {}

  formulario: FormGroup = new FormGroup({
    nome: new FormControl(null),
    sobrenome: new FormControl(null),
    email: new FormControl(null),
    senha1: new FormControl(null),
    senha2: new FormControl(null),
    nascimento: new FormControl(null),
    genêro: new FormControl(null),
    celular: new FormControl(null),
  });

  public cadastrarUsuario(): void {
    let usuario: Usuario = new Usuario(
      this.formulario.value.nome,
      this.formulario.value.sobrenome,
      this.formulario.value.email,
      this.formulario.value.senha1,
      this.formulario.value.senha2,
      this.formulario.value.nascimento,
      this.formulario.value.genêro,
      this.formulario.value.celular
    );

    this.autenticacao.cadastroUsuario(usuario);

    // Salvar o usuário no Firebase Realtime Database
    this.usuariosListRef.push(usuario).then(() => {
      alert('Usuário cadastrado com sucesso');
    }).catch((error) => {
      console.error('Falha no cadastro: ', error);
    });
  }
}