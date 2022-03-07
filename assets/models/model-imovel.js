export class Imovel{

    constructor(id, titulo, endereço, preçoAluguel, aluguel = false, preçoVenda, venda = true, descriçao, imagens = []){
        this.id           = id
        this.titulo       = titulo
        this.endereço     = endereço
        this.preçoAluguel = preçoAluguel
        this.aluguel      = aluguel
        this.preçoVenda   = preçoVenda
        this.venda        = venda
        this.descriçao    = descriçao
        this.imagens      = imagens

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
        const div = document.createElement('div')
        div.classList.add("destaques-cardsImoveis")
        const img = document.createElement('img')
        const h3  = document.createElement('h3')
        const h2  = document.createElement('h2')

        img.src = this.imagens[0]
        img.alt = this.titulo
        h3.innerText = this.titulo
        h2.innerText = this.preçoVenda

        div.appendChild(img)
        div.appendChild(h3)
        div.appendChild(h2)

        elementoPai.appendChild(div)

        
    }
}

/*<div class="destaques-cardsImoveis">
                    <img src="./assets/imagens/imoveis/1.jpeg" alt="">
                    <h3>Casa na estrada do campinho</h3>
                    <h2>R$300.000,00</h2>
                </div>*/