const nome = "José"
// nome = "ana"
// const n
const endereco = 'Rua k,10'
// ou
const sobre

//DIFERENÇA VAR E LET
{
nome = `Silva`

let a = 2
let b = "abc"
a = true
a = "abc"
var c = 2 + 3
var d = "abcd"


// ruim
var linguagem = "Java"
console.log (`Aprendendo `+ linguaguem)
var linguagem = "Javascript"
console.log (`Apendrendo ${linguagem}`)
// ruim 

//Nessa parte do codigo é analisada duas vezes
var idade = 18
console.log ("Oi, " + nome)
if (idade >= 18) {
    var nome = "José"
    console.log ("Parabéns, "+ nome + "vc tem mais que 18")
}

console .loog ("Até, " + nome)
//NA PRIEMIRA:
//linha 2 a variavel nome nn foi declarada, na linha 1 tem duas ações (declaração: var idade E instrução/ordem a ser dada: = 18)
//a linha 3 temos uma ordem (compare)
//linha 4 temos um IÇAMENTO pelo fato de vc ja ter declarado ela anteriormente e por ela ser um VAR

//NA SEGUNDA:
//linha 2 o a variavel nome foi IÇADA, nn foi declarada, ent seria como se tivesse como VAR, e teria a atribuição (=) como "lixo de memoria" que nesse caso seria "undefined"
//linha 4 nome recebe "José"

//sendo assim o VAR é contra-intuitivo, ela funciona com içamento mas não é intuitiva/entendivel. 
//OBS: o var pode ser usado em qualquer lugar, não é afetada por ESCOPO
}

//USO == E CONVERSÕES
//NN DEVEMOS USAR "=="
{
const n1 = 2
const n2 = '3'
const n3 = n1 + n2
//aqui ocorre uma coersão, conversão, nesse caso n3 = 23, pois foi uma coersão IMPLICITA

const n4 = n1 + Ñumber(n2)
//aqui temos coersão EXPLICITA, n4 = 5


console.log (1 == 1)
//true (coersão implicita)

console.log (1 == "1")
//true (coersão implicita)

console.log (1 === 1)
//true 

console.log (1 === "1")
//true (coersão implicita)

console.log = (1 == [1])
//true

//nn tem uma explicação certa no comop essas coersões acontece

//== coersão mais "faz sentido"
//=== 2 perguntas... 1.o tipo dos dois numeros são iguais? 2.o valor deles são iguais? 

//OU SEJA, o == é muito ambiguo, só é usado ainda por conta de RETROCOMPATIBILIDADE, não é pratico, nem bom.
}