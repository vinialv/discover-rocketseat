# Estruturas de repetição

break = Interrompe a execução da estrutura de repetição
continue = Pula a execução que está sendo realizada

# FOR
for(let i = 0; i < 10; i++){
    //código
}

# WHILE
i = 0
while(i < 10){
    i++
}

# FOR OF
let name = 'Vinicius'
let names = ['Joao', 'Paulo', 'Pedro']

for(let char of name){
    console.log(char)
}

for(let name of names){
    console.log(name)
}

# FOR IN
let person = {
    name: 'John',
    age: 20,
    weight: 88.6
}

for(let property in person){
    console.log(property)
    console.log(person[property])
}