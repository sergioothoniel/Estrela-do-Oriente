import { dbImoveis } from "./database.js";
import { Imovel } from "../models/model-vendaAluguel.js";

const listaImoveisVenda = dbImoveis.forEach(({id, nome, endereço, tipo, valor, descriçao, bairro, tags, area, quartos, vagas, imagens}) => {
      let venda = false;
      let aluguel = false;
  
      let valorAluguel = "";
      let valorVenda = "";
      if (tipo === "aluguel") {
        aluguel = true;
        valorAluguel = valor;
      } else {
        venda = true;
        valorVenda = valor;
      }
      const imovel = new Imovel(id, nome, endereço, 0, aluguel, valorVenda, venda, descriçao, [...imagens], bairro, [...tags], area, quartos, vagas);
    }
  );

  console.log(Imovel.listaImoveisVenda)

  const containerLista = document.querySelector('.lista-imoveisVenda')

  const imoveisExibidos = Imovel.listaImoveisVenda.length > 10 ? 10 : Imovel.listaImoveisVenda.length

  for(let i = Imovel.listaImoveisVenda.length; i>Imovel.listaImoveisVenda.length-10 ; i--){
      Imovel.listaImoveisVenda[i-1].criarCardsImoveis(containerLista)
  }

  