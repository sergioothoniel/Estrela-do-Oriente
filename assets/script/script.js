import { Imovel } from "../models/model-imovel.js";
import { dbImoveis } from "./database.js";

const sectionDestaque = document.querySelector('.destaques-section')

const estradaDoCampinho = new Imovel(dbImoveis[0].id,"Casa na Estrada do Campinho", "Estrada do Campinho, 112, Campo Grande, Rio de Janeiro-RJ", 1000, false, 'R$300.000,00', true, "Casa grande dividida em 3 partes, 2 lojas e uma kitnet nos fundos", dbImoveis[0].imagens)

const estradaDoCampinho2 = new Imovel(dbImoveis[0].id,"Casa na Estrada do Campinho", "Estrada do Campinho, 112, Campo Grande, Rio de Janeiro-RJ", 1000, false, 'R$300.000,00', true, "Casa grande dividida em 3 partes, 2 lojas e uma kitnet nos fundos", dbImoveis[0].imagens)

const estradaDoCampinho3 = new Imovel(dbImoveis[0].id,"Casa na Estrada do Campinho", "Estrada do Campinho, 112, Campo Grande, Rio de Janeiro-RJ", 1000, false, 'R$300.000,00', true, "Casa grande dividida em 3 partes, 2 lojas e uma kitnet nos fundos", dbImoveis[0].imagens)

const estradaDoCampinho4 = new Imovel(dbImoveis[0].id,"Casa na Estrada do Campinho", "Estrada do Campinho, 112, Campo Grande, Rio de Janeiro-RJ", 1000, false, 'R$300.000,00', true, "Casa grande dividida em 3 partes, 2 lojas e uma kitnet nos fundos", dbImoveis[0].imagens)



for(let i = 0; i < 4; i++){
    Imovel.listaImoveis[Imovel.listaImoveis.length-1-i].criarCardsImoveis(sectionDestaque)
}

console.log(Imovel.listaImoveisVenda)