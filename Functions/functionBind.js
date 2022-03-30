const pessoa = {
    saudacao: "Bom dia!", 
    falar(){
        return console.log(this.saudacao);
    }
}

// Primeiro teste utilizando chamada direta
pessoa.falar();
// Segundo teste utlizando chamada a patir da varivael, seja gerado um valor indefinido. 
const falar = pessoa.falar;
falar()
// terceiro teste utilizando a funcao bind para apontar o dono do objeto. 

const pessoaFalar = pessoa.falar.bind(pessoa);
pessoaFalar();