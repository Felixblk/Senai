let filmes = [];
let editando = -1;

function adicionarFilme() {
    const nome = document.getElementById("nome").value.trim();
    const classificacao = parseFloat(document.getElementById("classificacao").value);
    const genero = document.getElementById("Genero").value.trim();
    const ano = parseInt(document.getElementById("ano").value);
    const comentario = document.getElementById("comentario").value.trim();

    if (!nome || isNaN(classificacao) || isNaN(ano) || !genero || !comentario) {
        alert("Preencha todos os campos corretamente.");
        return;
    }

    const filme = { nome, classificacao, genero, ano, comentario };

    if (editando === -1) {
        filmes.push(filme);
    } else {
        filmes[editando] = filme;
        editando = -1;
    }

    limparFormulario();
    atualizarTabela();
}

function limparFormulario() {
    document.getElementById("nome").value = "";
    document.getElementById("classificacao").value = "";
    document.getElementById("Genero").value = "";
    document.getElementById("ano").value = "";
    document.getElementById("comentario").value = "";
}

function atualizarTabela() {
    const tbody = document.querySelector("#tabela-filmes tbody");
    tbody.innerHTML = "";

    filmes.forEach((filme, index) => {
        const linha = `
            <tr>
                <td>${filme.tipo}</td>
                <td>${filme.nome}</td>
                <td>${filme.genero}</td>
                <td>${filme.ano}</td>
                <td>${filme.classificacao.toFixed(1)}</td>
                <td>${filme.comentario}</td>
                <td>
                    <button class="edit" onclick="editarFilme(${index})">Editar</button>
                    <button class="delete" onclick="excluirFilme(${index})">Excluir</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += linha;
    });
}

function editarFilme(index) {
    const filme = filmes[index];
    document.getElementById("nome").value = filme.nome;
    document.getElementById("classificacao").value = filme.classificacao;
    document.getElementById("Genero").value = filme.genero;
    document.getElementById("ano").value = filme.ano;
    document.getElementById("comentario").value = filme.comentario;
    editando = index;
}

function excluirFilme(index) {
    if (confirm("Tem certeza que deseja excluir este item?")) {
        filmes.splice(index, 1);
        atualizarTabela();
    }
}
