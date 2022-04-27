import { Imovel } from "../models/model-imovel.js";

//----------------------Get params pela URL------------------------
const currentURL = window.location.search
const url = new URLSearchParams(currentURL)

const idImovel = Number(url.get('id'))

console.log(idImovel)