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
    input2.className = "input2";
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



