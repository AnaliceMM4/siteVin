const btEnviar = document.querySelector('#informacoes');

btEnviar.addEventListener('click', function (e) {
    e.preventDefault();
    adicionarInformacoes();
    dadosModal();
})

function novoProduto(codigo, nome, preco, imagem){
    this.codigo = codigo;
    this.nome = nome;
    this.preco = preco;
    this.imagem = imagem;
}

let informacoesCadastro = []
function adicionarInformacoes(){
    document.querySelectorAll("#informacoes")
    const produto = {
        codigo: document.querySelector('.codigo').textContent,
        nome: document.querySelector('.nome').textContent,
        preco: document.querySelector('.preco').textContent,
        imagem: document.querySelector('.imagem').textContent,
    // }
    }
    informacoesCadastro.push(produto);
    // fazer o push do storage
    adicionarStorage(informacoesCadastro);
}

function adicionarStorage(produto) {
    localStorage.setItem('informacoesCadastro', JSON.stringify(produto));
}

function utilizarStorage(){
    return JSON.parse(localStorage.getItem('informacoesCadastro'));
}

function dadosModal(){
    let informacoesCadastroStorage = utilizarStorage();
    informacoesCadastroStorage.forEach(info => {
        const produto = new novoProduto(
            info.codigo, info.nome, info.preco, info.imagem);
            document.querySelector('.informacoesProduto').innerHTML += mostrarInfo(produto);
    })
    informacoesCadastroStorage.push(produto);

}

function mostrarInfo(produto) {
    const mostrar = `
    <div>
    <img class="imagem col-lg-3 col-4 me-1" src="images/vinho-moschen.jpg" style="width:1rem; height:2rem;">${produto.imagem}</img>
    <span class="codigo col-lg-3 col-4 me-2">${produto.codigo}</span>
    <span class="nome col-lg-3 col-4 me-2">${produto.nome}</span>
    <span class="preco col-lg-3 col-4 me-2">${produto.preco}</span>
    </div>
    `
    return mostrar;
}

function novoBotao(classe, content) {
    return `<a href="#" class="${classe} padding-left">${content}</a>`
}

function botoes() {
    const btSomar = newButton('sum', '<i class="fa fa-plus"></i>');
    const btExcluir = newButton('delete', '<i class="fa fa-trash"></i>');
    const grupo = `<div>${btSomar}${btExcluir}</div>`;

    return grupo;
}


