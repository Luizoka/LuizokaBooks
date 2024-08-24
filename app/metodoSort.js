let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');
let ordenadoPorPreco = false; // Variável booleana para controlar o estado

btnOrdenarPorPreco.addEventListener('click', ordenarPorPreco);

function ordenarPorPreco() {
    if (!ordenadoPorPreco) {
        let livrosOrdenados = livros.slice().sort((a, b) => a.preco - b.preco);
        exibirLivrosNaTela(livrosOrdenados);
        btnOrdenarPorPreco.style.backgroundColor = 'green'; 
    } else {
        livrosOrdenados = livros;
        exibirLivrosNaTela(livrosOrdenados);
        btnOrdenarPorPreco.style.backgroundColor = '';
    }

    ordenadoPorPreco = !ordenadoPorPreco;
}


// depois consertar o ordenar por preco 