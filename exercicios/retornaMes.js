"strict"

function retornaMesApartirDeUmNumero(numero){
    if (Number.isInteger(numero)){
        //console.log("numero = " + numero);
        convertNumero = Math.round(numero);
        //console.log("convert numero = " + convertNumero);
        const data = new Date();
        data.setMonth(convertNumero-1);
        const novaData = data.toLocaleString("pt-BR", {month: "long"});
        console.log("nova data = " + novaData);
    }else{
        console.log("erro 404");
    }
}

retornaMesApartirDeUmNumero(2);


