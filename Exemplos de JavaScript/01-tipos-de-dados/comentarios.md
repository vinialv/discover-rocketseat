# Tipo UNDEFINED
* É algo que não existe e não foi declarado


# Tipo NULL
* É algo existente e declarado, porém nulo.


# Variaveis em JS
* Nomes simbólicos para receber algum valor
* 3 palavras reservadas para criar uma variável
    * var
    * let
    * const

* Para saber o tipo da variável escrever "typeof"

* Uma variável do tipo VAR é uma variável global, podendo utilizar em qualquer escopo.
* LET e CONST é permitido utilizar apenas dentro do mesmo escopo.

* JS é case-sensitive
* Nas declarações de variáveis não é permitido iniciar com números e colocar espaços nas variáveis
* É recomendado utilizar o camelCase na declaração de variáveis e escrever em inglês.


# Concatenar variáveis e strings
* A concatenação de variáveis é utilizada com + no JS.

* Para concatenar valores com template literals ou template strings é a da seguinte forma:
* console.log(`O ${name} tem ${age} anos.`)
* Dessa forma colocando a o acento invertido e colocando um cifrão e chaves entre as variáveis irá funcionar.


# Objetos
* Para criar um objeto o mesmo deve estar entre chaves {}
* Exemplo: const person = { name: 'John', age: 30}
* Para acessar valores dentro de um objeto é da seguinte forma: " person.age "


# Array
* Para criar um array o mesmo deve estar entre colchetes []
* Exemplo: const animals = ['Lion','Monkey','Cat']
* Para acessar um valor dentro do array é preciso informar a posição do mesmo.
* console.log(animals[1]) //O retorno será: "Monkey"

