const h1 = document.querySelector("h1");
const input1 = document.querySelector ("#calculo1");
const input2 = document.querySelector ("#calculo2");
const btn = document.querySelector ("#btnCalcular");
const Result = document.querySelector('#result');
const form = document.querySelector('#form');

form.addEventListener('submit', sumarInputvalues);

function sumarInputvalues(event){
    event.preventDefault();
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    Result.innerText=("Resultado : " + sumaInputs);
}

