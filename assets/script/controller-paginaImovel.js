import { dbImoveis } from "./database.js";
import { ImovelDetalhado } from "../models/model-PaginaImovel.js";

//----------------------Get params pela URL------------------------
const currentURL = window.location.search
const url = new URLSearchParams(currentURL)

const idImovel = Number(url.get('id'))
console.log(idImovel)

const imovelSelecionado = dbImoveis.filter(imovel=>imovel.id==idImovel)[0]

const {id, nome, endereço, tipo, valor, descriçao, bairro, tags, area, quartos, vagas, imagens} = imovelSelecionado

const novoImovel = new ImovelDetalhado(id, nome, endereço, tipo === "aluguel" ? valor : 0, tipo === "aluguel", tipo === "aluguel"? 0 : valor, tipo !== "aluguel", descriçao, imagens, bairro, tipo, area, quartos, vagas)

console.log(novoImovel)

const mainContainer = document.querySelector('main')

novoImovel.criarCardsImoveis(mainContainer)

const listaImagens = document.querySelector('ul')
const imgPrincipal = document.querySelector('.main-photos-containerMainImg>img')

novoImovel.criarImagensPequenas(listaImagens)

listaImagens.addEventListener('click', function(event){
   
    if(event.target.tagName === 'IMG'){
        imgPrincipal.src = event.target.src
        listaImagens.innerHTML=""
        novoImovel.criarImagensPequenas(listaImagens)        
    }
    
})


