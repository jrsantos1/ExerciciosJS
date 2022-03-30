
function exercicio1 (){
    const nomes = ["jhonatan", "pedro", "carlos", "fernado"]
    nomes.sort()
    return console.log(nomes)
}

function exercicio2 (){
    const nomes = ["jhonatan", "pedro", "carlos", "fernado"]
    nomes.sort()
    nomes.reverse()
    return console.log(nomes)
}

function exercicio3 (){
    const numeros = [1,3,55,6,7,8,98,65]
    numeros.sort(function (a, b) {
        return (a - b)
    } )
    return console.log(numeros)
}

exercicio1()
exercicio2()

const nome = () => console.log("oi");