const submitBtn = document.querySelector('#submit-btn');
const form = document.querySelector('#form')
const listaEjercicios = document.querySelector('#ejercicio');
const input = document.querySelector('#input');
const inputContainer = document.querySelector('#form__input-container');
const instrucciones = document.querySelector('#instrucciones');
const resultado = document.querySelector('#resultado');
const input2Container = document.querySelector('#input-2');
const input2 = document.createElement('input');
const input2Instrucciones = document.createElement('p');


function filtrarArray(string){
    let array = string.split("");
    let newArray = [];
    for (elem of array) {
        elem = parseInt(elem);

        if (!isNaN(elem)) {
            newArray.push(elem)
        }
    }
    return newArray;
}

function agregarInput2(){
    input2Container.style = "margin: 20px 0"
    input2.id = "input2";
    input2.style = "width: 100%";
    input2Instrucciones.textContent = "Ingresa el numero sobre el que deseas hacer el calculo";
    input2Container.appendChild(input2Instrucciones);
    input2Container.appendChild(input2);
}

listaEjercicios.addEventListener("change", function() {
    if (listaEjercicios.value === "suma-resta") {
        
        let array = [];
        instrucciones.innerHTML = "Ingresa un array";
        
        agregarInput2();
        
        
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            array = filtrarArray(input.value);
            resultado.textContent = `
            Resultado de la suma:
            ${sumarAlArray(array, Number(input2.value))}
            
            Resultado de la resta: 
            ${restarAlArray(array, Number(input2.value))}
            `
        })    

        listaEjercicios.addEventListener("change", function(){
            while(input2Container.firstChild){
                input2Container.removeChild(input2Container.firstChild);
            }
            resultado.textContent = "";
            let val = listaEjercicios.value;
            form.reset();
            listaEjercicios.value = val;
        })
    }

    else if (listaEjercicios.value === "par-pareja") {
        let array = [];
        instrucciones.innerHTML = "Ingresa un array";

        form.addEventListener("submit", function(event) {
            event.preventDefault();
            array = filtrarArray(input.value);
            hayParOPareja(array) === true ? resultado.textContent = "En el array hay par y pareja" : 
            resultado.textContent ="En el array no hay par y pareja";
        })   
        
        listaEjercicios.addEventListener("change", function(){
            resultado.textContent = "";
            let val = listaEjercicios.value;
            form.reset();
            listaEjercicios.value = val;
            if (val === "suma-resta"){
                agregarInput2();
            }
        })
    }

    else if (listaEjercicios.value === "palindromo") {
        instrucciones.innerHTML = "Ingresa un texto para verificar si es o si puede ser un palindromo";     

        form.addEventListener("submit", function(event){
            event.preventDefault();
            esPalindromo(input.value) === true ? resultado.textContent = "El texto ingresado es o podria ser un Palindromo" :
            resultado.textContent = "El texto ingresado no es ni puede ser un Palindromo";
        })

        listaEjercicios.addEventListener("change", function(){
            resultado.textContent = "";
            let val = listaEjercicios.value;
            form.reset();
            listaEjercicios.value = val;
            if (val === "suma-resta"){
                agregarInput2();
            }
        })
    }

    else if (listaEjercicios.value === "romanos") {
        instrucciones.innerHTML = "Ingresa un numero para obtener el mismo en Numeros Romanos. El numero no podra ser mayor a 3999.";

        form.addEventListener("submit", function(event){
            event.preventDefault();
            resultado.textContent = convertirARomano(Number(input.value))
        })

        listaEjercicios.addEventListener("change", function(){
            resultado.textContent = "";
            let val = listaEjercicios.value;
            form.reset();
            listaEjercicios.value = val;
            if (val === "suma-resta"){
                agregarInput2();
            }
        })
    }
})




/* Ejercicio 1 */

function sumarAlArray(array, numero){
    let arrayToNumber = "";
    for (num of array) {
        arrayToNumber += num.toString();
    }

    arrayToNumber = (Number(arrayToNumber) + numero).toString().split("").map(elem => Number(elem) );
    
    return arrayToNumber;    
}


function restarAlArray(array, numero){
    let arrayToNumber = "";
    for (num of array) {
        arrayToNumber += num.toString();
    }
    
    (Number(arrayToNumber) - numero) < 0 ? arrayToNumber = [0] : 
    arrayToNumber = (Number(arrayToNumber) - numero).toString().split("").map(elem => Number(elem));

    return arrayToNumber;    
}




/* Ejercicio 2 */


function hayParOPareja(array) { 
    let pares = [];
    let pareja = false;
    for (num of array) {
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


function esPalindromo(string){
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

function convertirARomano(numero){

    let num = numero.toString().split("").map(num => Number(num))
    let resultado = "";

    if (num.length > 4 || (num.length === 4 && num[0] > 3)) {
        return resultado = "El numero no puede ser mayor a 3999"
    }

    else if  (num.length === 4) {
        resultado += "M".repeat(num[0]);
        resultado += organizarNumerosRomanos(num[1], "C", "D", "M");
        resultado += organizarNumerosRomanos(num[2], "X", "L", "C");
        resultado += organizarNumerosRomanos(num[3], "I", "V", "X");
    } 

    else if (num.length === 3) {
        resultado += organizarNumerosRomanos(num[0], "C", "D", "M");
        resultado += organizarNumerosRomanos(num[1], "X", "L", "C");
        resultado += organizarNumerosRomanos(num[2], "I", "V", "X");
    }

    else if (num.length === 2) {
        resultado += organizarNumerosRomanos(num[0], "X", "L", "C");
        resultado += organizarNumerosRomanos(num[1], "I", "V", "X");
    }

    else if (num.length === 1) {
        resultado += organizarNumerosRomanos(num[0], "I", "V", "X");
    }


    
    function organizarNumerosRomanos(numero, unidad, mitad, decena){
        
        let resultado = "";
    
        if (numero > 0 && numero <= 3){
            resultado = unidad.repeat(numero);
        } 
        else if (numero === 4) {
            resultado = unidad + mitad;
        }
        else if (numero === 5) {
            resultado = mitad;
        }
        else if (numero > 5 && numero < 9) {
            resultado = mitad + unidad.repeat(numero - 5);
        }
        else if (numero === 9) {
            resultado = unidad + decena;
        }
        return resultado;
    }

    return resultado;

}
