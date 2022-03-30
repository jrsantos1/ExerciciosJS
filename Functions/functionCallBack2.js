const notas = [1,3,4,5,7,875,67,7,5,6,45,56,6,];

notasReprovativas = notas.filter( nota => nota < 5);

console.log(notasReprovativas);