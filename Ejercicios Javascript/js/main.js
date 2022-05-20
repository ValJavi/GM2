import {sumarAlArray, restarAlArray, hayParOPareja, esPalindromo, convertirARomano} from "./exercises.js";


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
let array = [];


form.addEventListener("submit", (event)=> {
    event.preventDefault();

    if (listaEjercicios.value === "suma-resta"){
        array = filtrarArray(input.value);
        resultado.textContent = `
        Resultado de la suma:
        ${sumarAlArray(array, Number(input2.value))}
            
        Resultado de la resta: 
        ${restarAlArray(array, Number(input2.value))}
        `;

    }else if (listaEjercicios.value === "par-pareja"){
        array = filtrarArray(input.value);
        hayParOPareja(array) === true ? resultado.textContent = "En el array hay par y pareja" : 
        resultado.textContent ="En el array no hay par y pareja";
    
    }else if (listaEjercicios.value === "palindromo"){
        esPalindromo(input.value) === true ? resultado.textContent = "El texto ingresado es o podria ser un Palindromo" :
        resultado.textContent = "El texto ingresado no es ni puede ser un Palindromo";

    }else if (listaEjercicios.value === "romanos"){
        resultado.textContent = convertirARomano(Number(input.value));
    }
})



listaEjercicios.addEventListener("change", function() {
    let sel = listaEjercicios.value;
    form.reset();
    listaEjercicios.value = sel;
    if (listaEjercicios.value !== "suma-resta"){
        while(input2Container.firstChild){
            input2Container.removeChild(input2Container.firstChild);
        }
    }

    if (listaEjercicios.value === "suma-resta") {
        resultado.textContent = "";
        array = [];
        instrucciones.innerHTML = "Ingresa un array";
        agregarInput2();       
       
    }else if (listaEjercicios.value === "par-pareja") {
        resultado.textContent = "";
        array = [];
        instrucciones.innerHTML = "Ingresa un array";

    }else if (listaEjercicios.value === "palindromo") {
        resultado.textContent = "";
        instrucciones.innerHTML = "Ingresa un texto para verificar si es o si puede ser un palindromo";     

    }else if (listaEjercicios.value === "romanos") {
        resultado.textContent = "";
        instrucciones.innerHTML = "Ingresa un numero para obtener el mismo en Numeros Romanos. El numero no podra ser mayor a 3999.";

    }
})


function filtrarArray(string){
    let array = string.split(",");
    let newArray = [];
    for (let elem of array) {
        elem = parseInt(elem);

        if (!isNaN(elem)) {
            newArray.push(elem)
        }
    }
    return newArray;
}

function agregarInput2(){
    input2Container.style = "margin: 20px 0"
    input2.className = "input2";
    input2Instrucciones.textContent = "Ingresa el numero sobre el que deseas hacer el calculo";
    input2Container.appendChild(input2Instrucciones);
    input2Container.appendChild(input2);
}
