export class Imovel {
  constructor(
    id,
    titulo,
    endereço,
    preçoAluguel,
    aluguel = false,
    preçoVenda,
    venda = true,
    descriçao,
    imagens = [],
    bairro,
    tipo,
    area,
    quartos,
    vagas
  ) {
    this.id = id;
    this.titulo = titulo;
    this.endereço = endereço;
    this.preçoAluguel = preçoAluguel;
    this.aluguel = aluguel;
    this.preçoVenda = preçoVenda;
    this.venda = venda;
    this.descriçao = descriçao;
    this.imagens = imagens;
    this.bairro = bairro;
    this.tipo = tipo;
    this.area = area;
    this.quartos = quartos;
    this.vagas = vagas;

    this.divImovel = document.createElement("div");
    this.divImovel.classList.add("card-vendaAluguel");
    this.divImovel.addEventListener("click", this);

    this.adicionarNasListas();
    Imovel.listaImoveis.push(this);
  }

  static listaImoveisAluguel = [];
  static listaImoveisVenda = [];
  static listaImoveis = [];

  static indiceImovelSelecionado;

  adicionarNasListas() {
    if (this.aluguel) {
      Imovel.listaImoveisAluguel.push(this);
    }
    if (this.venda) {
      Imovel.listaImoveisVenda.push(this);
    }
  }

  criarCardsImoveis(elementoPai) {

    this.divImovel.innerHTML = `<div class="card-containerImg"><img src="${this.imagens[0]}" alt="${this.titulo}"></div>
    <div class="card-infoImovel">
        <h3>${this.titulo}</h3>
        <h4>${this.venda ? this.preçoVenda : this.preçoAluguel}</h4>
        <p>${this.area} m²${this.quartos > 0 ? ` | ${this.quartos} quarto(s)` :""}${this.vagas > 0 ? ` | ${this.vagas} vaga(s)` :""}</p>
        <h6>${this.bairro}</h6>
    </div>`

    elementoPai.appendChild(this.divImovel);
  }

  handleEvent() {
    Imovel.indiceImovelSelecionado = `${this.id}`;
    localStorage.setItem("IdImovel-EstrelaDoOriente", this.id);
    console.log(Imovel.indiceImovelSelecionado);
    window.open("./assets/paginas/imovel.html");
  }
}

/*<div class="card-containerImg"><img src="../imagens/imoveis/1.jpeg" alt=""></div>
<div class="card-infoImovel">
    <h3>Vendo casa em Campo grande</h3>
    <h4>R$300.000,00</h4>
    <p>80 m² | 3 quartos | 2 vagas</p>
    <h6>Campo Grande</h6>
</div>*/
