import { Imovel } from "../models/model-imovel.js";
import { dbImoveis } from "./database.js";

const sectionDestaque = document.querySelector(".destaques-section");

const newDbImoveis = dbImoveis.map((imovel) =>{
  const newImgs = imovel.imagens.map(imagemURL => imagemURL.slice(4))
  return {...imovel, imagens: newImgs}
})

console.log(newDbImoveis)

const listaDeImoveis = newDbImoveis.forEach(
  ({
    id,
    nome,
    endereço,
    tipo,
    valor,
    descriçao,
    bairro,
    tags,
    area,
    quartos,
    vagas,
    imagens,
  }) => {
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
    const imovel = new Imovel(
      id,
      nome,
      endereço,
      0,
      aluguel,
      valorVenda,
      venda,
      descriçao,
      [...imagens],
      bairro,
      [...tags],
      area,
      quartos,
      vagas
    );
  }
);

for (let i = 0; i < 4; i++) {
  Imovel.listaImoveis[Imovel.listaImoveis.length - 1 - i].criarCardsImoveis(
    sectionDestaque
  );
}
