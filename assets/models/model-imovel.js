export class Imovel{

    constructor(id, titulo, endereço, preçoAluguel, aluguel = false, preçoVenda, venda = true, descriçao, imagens = [], bairro, tipo, area, quartos, vagas){
        this.id           = id
        this.titulo       = titulo
        this.endereço     = endereço
        this.preçoAluguel = preçoAluguel
        this.aluguel      = aluguel
        this.preçoVenda   = preçoVenda
        this.venda        = venda
        this.descriçao    = descriçao
        this.imagens      = imagens
        this.bairro       = bairro
        this.tipo         = tipo
        this.area         = area
        this.quartos      = quartos
        this.vagas        = vagas

        this.adicionarNasListas()
        Imovel.listaImoveis.push(this)
    }

    static listaImoveisAluguel = []
    static listaImoveisVenda   = []
    static listaImoveis        = []

    adicionarNasListas(){
        if(this.aluguel){
            Imovel.listaImoveisAluguel.push(this)
            
        }
        if(this.venda){
            Imovel.listaImoveisVenda.push(this)
            
        }
    }

    criarCardsImoveis(elementoPai){
        const linkImovel = document.createElement('a')
        linkImovel.classList.add("destaques-link")

        const div = document.createElement('div')
        div.classList.add("destaques-cardsImoveis")

        linkImovel.appendChild(div)
        /*const img = document.createElement('img')
        const h3  = document.createElement('h3')
        const h2  = document.createElement('h2')

        img.src = this.imagens[0]
        img.alt = this.titulo
        h3.innerText = this.titulo
        h2.innerText = this.preçoVenda

        div.appendChild(img)
        div.appendChild(h3)
        div.appendChild(h2)*/

        div.innerHTML = `<img src=${this.imagens[0]} alt="${this.titulo}">
        <div class="destaques-cardsImoveis-informaçoes">
        <h3>${this.titulo}</h3>
        <p>${this.bairro}</p>
        <h2>${this.preçoVenda}</h2>
        </div>
        <div class="destaques-cardsImoveis-caracteristicas">

        <div class="destaques-cardsImoveis-icones">
        <img src="./assets/imagens/icones/m2.png" alt="Área(m²)">
        <h4>${this.area} m²</h4>
        </div>

        <div class="destaques-cardsImoveis-icones">
        <img src="./assets/imagens/icones/quartos.png" alt="Quartos">
        <h4>${this.quartos} quarto(s)</h4>
        </div>

        <div class="destaques-cardsImoveis-icones">
        <img src="./assets/imagens/icones/vagas.png" alt="Vagas">
        <h4>${this.vagas} vaga(s)</h4>
        </div>

        </div>`

        elementoPai.appendChild(linkImovel)

        
    }
}

/*<div class="destaques-cardsImoveis">
                    <img src="./assets/imagens/imoveis/1.jpeg" alt="">
                    <h3>Casa na estrada do campinho</h3>
                    <h2>R$300.000,00</h2>
                </div>*/