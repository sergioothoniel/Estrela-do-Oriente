import { Imovel } from "../models/model-imovel.js";

const IdImovel = localStorage.getItem("IdImovel-EstrelaDoOriente");
const imovelSelecionado = Imovel.listaImoveis.filter(
  (value) => value.id == IdImovel
);

console.log(IdImovel);
console.log(Imovel.listaImoveis);
