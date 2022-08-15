/*Exercicios*/

// 1. Declare uma variável de nome weight
let weight
/*---------------------------------------------------------------------------*/

// 2. Que tipo de dado é a variável acima?
console.log(typeof weight)
/*---------------------------------------------------------------------------*/

/* 3. Declare uma variável e atribua valores para cada um dos dados 
* name: String
* age: number (integer)
* stars: Number (float)
* isSubscribed: Boolean
*/
let name = "Vinicius"
let age = 24
let stars = 5.3
let isSubscribed = true
/*---------------------------------------------------------------------------*/

/*  4.0 A variável student abaixo é de que tipo de dados?    
    4.1 Atribua a ela as propriedades abaixo.
    4.2 Mostre no console a seguinte mensagem:

    <name> de idade <age> pesa <weight> kg.
*/

let student = {};

/*4.0*/ console.log(typeof student)
/*4.1*/ 
student = {
    name: "Vinicius",
    age: 24,
    weight: 78.3
}

/*4.2*/ console.log(`${student.name} tem ${student.age} anos de idade e pesa ${student.weight} kg.`)

/* 5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja array vazio*/
let students = []

/* 6. Retribua valor para a variável acima, colocando dentro dela o objeto student da questão 4.*/
students = [
    student
]

/* 7. Coloque no console o valor da posição zero do array acima*/
console.log(students[0])

/* 8. Crie um novo student e coloque na posição 1 do Array students*/
const studentJohn = {
    name: "John",
    age: 28,
    weight: 63.3
}

students[1] = studentJohn
console.log(students[1])