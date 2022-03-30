const retornaSeMaior = (num1, num2) => {
    if(typeof(num1) == "number"  || typeof(num2) == "number"){
    if(num1 >= num2){
        return true;
    }else{
        return false;
    }
    }
    else{return false}
}
const verificaSeEMaior = retornaSeMaior(4, "4");
console.log(verificaSeEMaior);

