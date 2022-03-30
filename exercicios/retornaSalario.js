function retornaSalarioMensal(horasTrabalhadas, salarioPorhora){
    salarioMensal =  horasTrabalhadas * salarioPorhora;
    console.log("O salario mensal deve ser = " + salarioMensal); 
}

console.log(retornaSalarioMensal(45, 5.80));
