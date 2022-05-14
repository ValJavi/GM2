function esPalindromo(string){
    let resultado;

    for (let i = 0, j = string.length - 1; i <= string.length / 2; i++, j--){
        if (string[i] !== string[j]){
            resultado = false; 
        }
    }
    return resultado === false ? false : true;
}

//console.log(esPalindromo(prompt("Ingresa un texto")));

function esPalindromo2(string) {
    let stringArray = string.split("");
    
    for (let i = 0; i < stringArray.length; i++){
        for (let j = i+1; j < stringArray.length; j++){
            
            if (stringArray[i] === stringArray[j]) {
                stringArray.splice(j, 1);
                stringArray.splice(i, 1);
                i = 0;
                j = 0;
                
            }
        }
    }
    return stringArray.length > 1 ? false : true;    
}

console.log(esPalindromo2(prompt("Ingresa un texto")))