import { Negociacao } from "./models/negociacao.js";

const negociacao = new Negociacao (new Date(), 1000, 100);
console.log(negociacao.valor);