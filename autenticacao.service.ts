import { Usuario } from './usuario.module';
import { Reservar } from 'src/app/usuario.module';
import { Entrada } from './usuario.module';
import { Pagar } from './usuario.module';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { ReactiveFormsModule } from '@angular/forms';


export class Autenticacao {
  public cadastroUsuario(usuario: Usuario): void {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, usuario.email, usuario.senha1)
      .then((res) => {
        let user: Object = {
          nome: usuario.email,
          sobrenome: usuario.sobrenome,
          email: usuario.email,
          senha1: usuario.senha1,
          senha2: usuario.senha2,
          nascimento: usuario.nascimento,
          genêro: usuario.genêro,
          celular: usuario.celular,
        };

        const db = getDatabase();
        set(ref(db, `users/${btoa(usuario.email)}`), user);

        alert('Usuário cadastrado com sucesso');
      })
      .catch((error) => {
        console.error('Falha no cadastro: ', error);
      });
  };


  public reservaUsuario(reservar: Reservar): void {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, reservar.email, reservar.senha1)
      .then((res) => {
        let user: Object = {
          nome: reservar.nome,
          sobrenome: reservar.sobrenome,
          email: reservar.email,
          celular: reservar.celular,
          senha1: reservar.senha1,
          senha2: reservar.senha2
        };

        const db = getDatabase();
        set(ref(db, `users/${btoa(reservar.email)}`), user);

        alert('Usuário cadastrado com sucesso');
      })
      .catch((error) => {
        console.error('Falha no cadastro: ', error);
      });
  };


  public entradaUsuario(checkin: Entrada): void {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, checkin.entrada, checkin.pessoas)
      .then((res) => {
        let user: Object = {
          entrada: checkin.entrada,
          saida: checkin.saida,
          pessoas: checkin.pessoas,
          quartos: checkin.quartos,
        };

        const db = getDatabase();
        set(ref(db, `users/${btoa(checkin.pessoas)}`), user);

        alert('Usuário cadastrado com sucesso');
      })
      .catch((error) => {
        console.error('Falha no cadastro: ', error);
      });
  };


  public pagarUsuario(pagar: Pagar): void {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, pagar.cvv, pagar.validade)
      .then((res) => {
        let user: Object = {
          numero: pagar.numero,
          validade: pagar.validade,
          nome: pagar.nome,
          cvv: pagar.cvv
        };

        const db = getDatabase();
        set(ref(db, `users/${btoa(pagar.nome)}`), user);

        alert('Usuário cadastrado com sucesso');
      })
      .catch((error) => {
        console.error('Falha no cadastro: ', error);
      });
  }
}