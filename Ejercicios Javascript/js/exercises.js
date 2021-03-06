
/* Ejercicio 1 */

export function sumarAlArray(array, numero){
    let arrayToNumber = "";
    for (let num of array) {
        arrayToNumber += num.toString();
    }

    arrayToNumber = (Number(arrayToNumber) + numero).toString().split("").map(elem => Number(elem) );
    
    return arrayToNumber;    
}


export function restarAlArray(array, numero){
    let arrayToNumber = "";
    for (let num of array) {
        arrayToNumber += num.toString();
    }
    
    (Number(arrayToNumber) - numero) < 0 ? arrayToNumber = [0] : 
    arrayToNumber = (Number(arrayToNumber) - numero).toString().split("").map(elem => Number(elem));

    return arrayToNumber;    
}




/* Ejercicio 2 */


export function hayParOPareja(array) { 
    let pares = [];
    let pareja = false;
    for (let num of array) {
        if (num % 2 === 0 && num !== 0) {
            pares.push(num);
        }
    }

    if (pares.length === 0) return false;

    for (let i = 0; i < array.length; i++){
        for (let j = i+1; j < array.length; j++) {
            for (let k = 0; k < pares.length; k++) {

                if (array[i] + array[j] === pares[k]) {
                    pareja = true; 
                }
            }
        }
    }

    if (pareja === true) {
        return true;
    } else {
        return false;
    }
}



/* Ejercicio 3 */


export function esPalindromo(string){
    let resultado;

    for (let i = 0, j = string.length - 1; i <= string.length / 2; i++, j--){
        if (string[i] !== string[j]){
            resultado = false; 
        }
    }

    if (resultado !== false){
        return true;
    }

    else {
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
}



/* Ejercicio 4 */

export function convertirARomano(numero){

    let num = numero.toString().split("").map(num => Number(num));
    let resultado = "";

    if (num.length > 4 || (num.length === 4 && num[0] > 3)) {
        return resultado = "El numero no puede ser mayor a 3999"
    }else if  (num.length === 4) {
        resultado += "M".repeat(num[0]);
        resultado += organizarNumerosRomanos(num[1], "C", "D", "M");
        resultado += organizarNumerosRomanos(num[2], "X", "L", "C");
        resultado += organizarNumerosRomanos(num[3], "I", "V", "X");
    }else if (num.length === 3) {
        resultado += organizarNumerosRomanos(num[0], "C", "D", "M");
        resultado += organizarNumerosRomanos(num[1], "X", "L", "C");
        resultado += organizarNumerosRomanos(num[2], "I", "V", "X");
    }else if (num.length === 2) {
        resultado += organizarNumerosRomanos(num[0], "X", "L", "C");
        resultado += organizarNumerosRomanos(num[1], "I", "V", "X");
    }else if (num.length === 1) {
        resultado += organizarNumerosRomanos(num[0], "I", "V", "X");
    }
    
    function organizarNumerosRomanos(numero, unidad, mitad, decena){
        let resultado = "";
    
        if (numero > 0 && numero <= 3){
            resultado = unidad.repeat(numero);
        }else if (numero === 4) {
            resultado = unidad + mitad;
        }else if (numero === 5) {
            resultado = mitad;
        }else if (numero > 5 && numero < 9) {
            resultado = mitad + unidad.repeat(numero - 5);
        }else if (numero === 9) {
            resultado = unidad + decena;
        }
        return resultado;
    }

    return resultado;

}
