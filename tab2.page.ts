import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Autenticacao } from '../autenticacao.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(private router: Router) { }

  ngOnInit() {
  }

  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'senha': new FormControl(null)
  })

  public usuarioLogin(): void{
    
    this.router.navigate(['/', 'tabs', 'tab1']);
  } 
  /*Login   
  nome: string = '';
  email: string = '';
  telefone: string = '';
  senha1: string = '';
  senha2: string = '';

  constructor() {}

  loginForm() {
    const funcionario = {
      nome: this.nome,
      email: this.email,
      telefone: this.telefone,
      senha1: this.senha1,
      senha2: this.senha2,
    };

    const form = JSON.parse(localStorage.getItem('form') as string) || [];
    form.push(funcionario);

    localStorage.setItem('form', JSON.stringify(form));

    alert('Funcionário cadastrado com sucesso!');

    // Limpar os campos do formulário
    this.nome = '';
    this.email = '';
    this.telefone = '';
    this.senha1 = '';
    this.senha2 = '';
} */
  

  /*Cadastro
  nome: string = '';
  email: string = '';
  telefone: string = '';
  senha1: string = '';
  senha2: string = '';

  constructor() {}

  cadastrarForm() {
    const funcionario = {
      nome: this.nome,
      email: this.email,
      telefone: this.telefone,
      senha1: this.senha1,
      senha2: this.senha2,
    };

    const form = JSON.parse(localStorage.getItem('form') as string) || [];
    form.push(funcionario);

    localStorage.setItem('form', JSON.stringify(form));

    alert('Funcionário cadastrado com sucesso!');

    // Limpar os campos do formulário
    this.nome = '';
    this.email = '';
    this.telefone = '';
    this.senha1 = '';
    this.senha2 = '';
} */
}
