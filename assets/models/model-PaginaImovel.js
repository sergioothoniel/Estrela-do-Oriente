export class ImovelDetalhado {
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
    this.imagemSelecionada = this.imagens[ImovelDetalhado.indexImgSelecionada]
       
  }

  static indexImgSelecionada = 0
  

  criarImagensPequenas(elementoPai){  
    
    let indexSelecionado = ImovelDetalhado.indexImgSelecionada
        
    this.imagens.forEach((img, index) => {
      const liImg = document.createElement('li')
      liImg.innerHTML = `<img src=${img} alt="" id=${index === indexSelecionado ? "imagemSelecionada" : false}>`
      liImg.addEventListener('click', function(e, elementoPai){
        ImovelDetalhado.indexImgSelecionada = index
        
      })
      elementoPai.appendChild(liImg)
    })
  }

    

  criarCardsImoveis(elementoPai) {

    elementoPai.innerHTML = `
    <h1>${this.titulo}</h1>
    <div class="main-photos">
        <div class="main-photos-containerMainImg"><img src=${this.imagemSelecionada} alt=""></div>
        <aside class="main-photos-morePhotos">
            <ul>
                
            </ul>
        </aside>
        <div class="contatos">
          <h2>Fale com um de nossos corretores:</h2>
          <div class="contatos-corretores">
            <p>Joe Alves Vianna:  (21) 97040-5751 <img src="../imagens/icones/whatsapp-icon.png" onclick=window.open("https://wa.me/+5521970405751")></p>
            <p>Cláduia:  (21) 98124-9952 <img src="../imagens/icones/whatsapp-icon.png" onclick=window.open("https://wa.me/+5521981249952")></p>
        </div>
    </div>
    </div>
    <h3 class="main-prince">${this.venda ? this.preçoVenda : this.preçoAluguel}</h3>
    <div class="main-description">
      ${this.descriçao}
    </div>

    <div class="main-divisor"></div>

    <div class="main-details">
      <h5>Características:</h5>

      <div class="main-details-container">

        <div class="main-details-type main-details-itens">
          <h6>Tipo:</h6>
          <p>${this.tipo}</p>
        </div>

        <div class="main-details-rooms main-details-itens">
          <h6>Quartos:</h6>
          <p>${this.quartos}</p>
        </div>
        
        <div class="main-details-area main-details-itens">
          <h6>Área:</h6>
          <p>${this.area} m²</p>
        </div>

        <div class="main-details-more main-details-itens">
          <h6>Vagas:</h6>
          <p>${this.vagas}</p>
        </div>

      </div>
      
    </div>

    <div class="main-divisor"></div>

    <div class="main-location">
      <h5>Endereço:</h5>
      <p>${this.endereço}</p>
    
    </div>`
        
  }

  
}
