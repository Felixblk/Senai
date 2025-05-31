//Declarando as variáveis
let produtos = [];
let adicionando = -1;

function adicionarProduto() {
    const nome = document.getElementById("nome").value;
    const preco = parseFloat(document.getElementById("preco").value);
    const quantidade = parseInt(document.getElementById("quantidade").value);

    if(!nome || isNaN(preco) || isNaN(quantidade)){
        alert(Preencha todos os campos vazios)
    }
}


