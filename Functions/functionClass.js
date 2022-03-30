class Pessoa{
    constructor(nome){
        this.nome = nome;
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }

}

const pessoa1 = new Pessoa('Jhonatan');

pessoa1.falar();

const criaPessoa = (nome) => {
    return {
        falar: () => console.log(`meu nome é ${nome}`)
    }
}

const p2 = criaPessoa('Pedro')
p2.falar();