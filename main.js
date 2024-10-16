const form = document.getElementById('form-cadastro');
const nomes = [];
const numeros = [];
let linhas = ''; 

form.addEventListener('submit', function(e) {
    e.preventDefault();
    addLinha();
    atualizaTabela();
});

function addLinha() {
    const inputNome = document.getElementById('nome-cadastro');
    const inputNumero = document.getElementById('numero-cadastro');

    if (nomes.includes(inputNome.value)){
        alert(`O nome: ${inputNome.value} ja foi inserido`);
    } else {
        nomes.push(inputNome.value);
        numeros.push(parseFloat(inputNumero.value)); 
        
        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`; 
        linha += `<td>${inputNumero.value}</td>`; 
        linha += '</tr>';
        
        linhas += linha; 
    }
    
    inputNome.value = ''; 
    inputNumero.value = ''; 
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}