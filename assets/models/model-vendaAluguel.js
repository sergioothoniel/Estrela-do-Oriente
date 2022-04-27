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
    window.open(`../paginas/imovel.html?id=${this.id}`);
  }

  static filtrarImoveisPorTexto(listaImoveis, texto){

    const textoNormalizado = texto.toLowerCase()

    const listaFiltrada = listaImoveis.filter((imovel)=>{
      const nomeNormalizado = imovel.titulo.toLowerCase()
      const endereçoNormalizado = imovel.endereço.toLowerCase()
      const descriçaoNormalizada = imovel.descriçao.toLowerCase()

      return (nomeNormalizado.includes(textoNormalizado) 
      || endereçoNormalizado.includes(textoNormalizado) || descriçaoNormalizada.includes(textoNormalizado)
      )
    })

    return listaFiltrada
  }
}


