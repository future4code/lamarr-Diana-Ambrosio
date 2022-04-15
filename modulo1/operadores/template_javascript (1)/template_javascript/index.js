EXERCÍCIO INTERPRETAÇÃO DE CÓDIGO

EXERCÍCIO 1:
 const bool1 = true // é true
 const bool2 = false // é false
 const bool3 = !bool2 // é diferente de false, então é true
 
 let resultado = bool1 && bool2 // true && false
 console.log("a. ", resultado) // resultado false
 
 resultado = bool1 && bool2 && bool3 //true && false && true
 console.log("b. ", resultado) // resultado false
 
 resultado = !resultado && (bool1 || bool2) /* entre ( bool1 || bool2 )
 dá true, mas o !resultado n seria se deu true no parentese, entao seria
 false. porque diferente de resultado que é true, é false, e false && true,
  é false.
  */
 console.log("c. ", resultado)
 
 // console.log("d. ", typeof resultado) // retorna o tipo, e aqui é boolean.


EXERCÍCIO 2: 
// Acredito que o comando prompt é o erro para a soma dos numeros.
 let primeiroNumero = 10; // eu tirei o prompt 
 let segundoNumero = 10; // tirei o comando prompt também
 let soma = primeiroNumero + segundoNumero; // deu o resultado 20
 console.log ("A soma é", soma); // resultado 20

EXERCÍCIO 3: /*sugiro que tire o comando prompt, foi a maneira que achei
 para a soma realmente acontecer*/

 EXERCÍCIO DE ESCRITA DE CÓDIGO

EXERCÍCIO 1:

let suaIdade = prompt("Qual sua idade?") 
let idadeMelhorAmigo = prompt("Quantos anos tem seu melhor amigo(a)?") 
let suaIdadeMaiorQueDoSeuMelhorAmigo = suaIdade > idadeMelhorAmigo; 
let diferencaDeIdade = suaIdade - idadeMelhorAmigo
console.log ("sua idade é > que do seu melhor amigo", suaIdadeMaiorQueDoSeuMelhorAmigo); 
console.log ("diferenca de idade", diferencaDeIdade) 

EXERCÍCIO 2:

let escrevaUmNumeroPar = prompt("Escreva um número par")
let restoDaDivisao = escrevaUmNumeroPar % 2;
console.log ("O resto da divisao é", restoDaDivisao) /* Testei com alguns números pares e 
o resultado é sempre 0. 
E quando colocado número ímpar, o resto que me dá é sempre 1. */

EXERCÍCIO 3:

let suaIdadeEmAnos = prompt ("Quantos anos voce tem?")
let idadeEmMeses = suaIdadeEmAnos * 12;
let idadeEmDias = suaIdadeEmAnos * 365;
let idadeEmHoras = suaIdadeEmAnos * 8760;
console.log("Sua idade em meses", idadeEmMeses);
console.log("Sua idade em dias", idadeEmDias);
console.log("Sua idade em horas", idadeEmHoras);

EXERCÍCIO 4:

let primeiroNumero = prompt ("Digite um numero")
let segundoNumero = prompt ("Digite outro número")
let resultado = primeiroNumero % segundoNumero;
let resultado2 = segundoNumero % primeiroNumero;
console.log("O primeiro número é maior que o segundo?", primeiroNumero > segundoNumero)
console.log("O primeiro número é igual ao segundo?", primeiroNumero === segundoNumero)
console.log("O primeiro número é dividível pelo segundo?", resultado === 0)
console.log("O segundo número é divisível pelo primeiro?", resultado === 0) 
