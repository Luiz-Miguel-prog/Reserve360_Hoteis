export class Usuario {
    constructor(
        public nome: string,
        public sobrenome: string,
        public email: string,
        public senha1: string,
        public senha2: string,
        public nascimento: number,
        public genêro: string,
        public celular: number
    ) {}
}

export class Entrada {
    constructor(
        public entrada: string,
        public saida: string,
        public pessoas: string,
        public quartos: string
    ) {}
}

export class Pagar {
    constructor(
        public numero: string,
        public validade: string,
        public nome: string,
        public cvv: string
    ) {}
}

export class Reservar {
    constructor(
        public nome: string,
        public sobrenome: string,
        public email: string,
        public celular: string,
        public senha1: string,
        public senha2: string
    ) {}
}