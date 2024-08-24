
let livros = [];

const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI); //espere uma requisição, um "promeça"
    livros = await res.json();

    //let livrosComDesconto = aplicarDesconto(livros);
    
    exibirLivrosNaTela(livros); // Note que passei livrosComDesconto aqui.
    //exibirLivrosNaTela(livrosComDesconto)
}