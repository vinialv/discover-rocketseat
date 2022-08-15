# Functions

* As functions tem como objetivo criar um bloco de código a fim de partir o código em partes e ir organizando o código e poder utiliza-lo sempre que necessário sem ter que criar tudo novamente.

# Arrow function
* Sintaxe: const sayMyName = () => {console.log("teste")}

# Callback function
*  Callback function nada mais é do que uma função que está passando como parametro para outra função.

# Function constructor
* Está função criado um objeto ao realizar uma instanciação.
* Ao criar a função, será necessário colocar a primeira letra maiúscula, porém não é obrigatório, mas sim uma boa prática.
* E depois criar uma variável e instanciar a função.

* Exemplo:
* function Person(name){
*   this.name = name
* }

* const mayk = new Person("Mayk")
* const vinicius = new Person("Vinicius")

* Dessa forma iremos criar uma estrutura, onde podemos ir criando vários objetos e utilizar em apenas uma função.