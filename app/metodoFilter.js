const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros(event) {
    const elementoBtn = document.getElementById(this.id);
    let categoria = elementoBtn.value;

    let livrosFiltrados;

    if (categoria == "disponivel") {
        livrosFiltrados = filtrarDisponivel();
    } else if (categoria == '') {
        livrosFiltrados = livros;
    } else {
        livrosFiltrados = filtrarCategoria(categoria);
    }

    exibirLivrosNaTela(livrosFiltrados);

    if (categoria === 'disponivel') {
        const valorTotal = somaLivrosDisponivel(livrosFiltrados);
        exibirTotalDisponivel(valorTotal);
    }
}

function filtrarCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarDisponivel() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirTotalDisponivel(valorTotal) {
    elementoValorTotalDisponivel.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal.toFixed(2)}</span></p>
        </div>
    `;
}
