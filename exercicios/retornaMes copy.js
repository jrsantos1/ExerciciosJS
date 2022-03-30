"strict"

const data = new Date();
data.setMonth(5);
console.log(data)
const novaData = data.toLocaleDateString("pt-BR", {month: "long"}); 
console.log(data);
console.log(novaData);