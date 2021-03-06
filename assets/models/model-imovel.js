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
    this.divImovel.classList.add("destaques-cardsImoveis");
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
    this.divImovel.innerHTML = `<img src=${this.imagens[0]} alt="${
      this.titulo
    }">
        <div class="destaques-cardsImoveis-informaçoes">
        <h3>${this.titulo}</h3>
        <p>${this.bairro}</p>
        <h2>${this.preçoVenda}</h2>
        </div>
        <div class="destaques-cardsImoveis-caracteristicas">

        <div class="destaques-cardsImoveis-icones">
        <img src="./assets/imagens/icones/m2.png" alt="Área(m²)">
        <h4>${this.area.toLocaleString("pt-BR")} m²</h4>
        </div>

        <div class="destaques-cardsImoveis-icones">
        <img src="./assets/imagens/icones/quartos.png" alt="Quartos">
        <h4>${this.quartos} quarto(s)</h4>
        </div>

        <div class="destaques-cardsImoveis-icones">
        <img src="./assets/imagens/icones/vagas.png" alt="Vagas">
        <h4>${this.vagas} vaga(s)</h4>
        </div>

        </div>`;

    elementoPai.appendChild(this.divImovel);
  }

  handleEvent() {
    Imovel.indiceImovelSelecionado = `${this.id}`;
    window.open(`./assets/paginas/imovel.html?id=${this.id}`);
  }
}

