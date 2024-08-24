const elementoParaInserirLivros = document.getElementById("livros");
let elementoValorTotalDisponivel = document.getElementById('valor_total_livros_disponiveis');


function exibirLivrosNaTela(listaDeLivros) {
  elementoValorTotalDisponivel. innerHTML = '';
  limparTela();
  listaDeLivros.forEach(livro => {
    let disponivel = verificaLivroDisponivel(livro);
    // let disponivel = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'

    elementoParaInserirLivros.innerHTML += `
        <div class="livro">
      <img class= "${disponivel}" src="${livro.imagem}" alt="${livro.alt}" />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>`
  });
}


function limparTela() {
  elementoParaInserirLivros.innerHTML = '';
}

function verificaLivroDisponivel(livro) {
  if (livro.quantidade > 0) {
    return "livro__imagens";
  } else {
    return "livro__imagens indisponivel";
  }
}