# Manipulação de strings e números

* A função .toFixed() tem como objetivo limitar as casas decimais e o retorno dessa função será uma string
* Para deixar tudo em letra maiúscula ou tudo minúscula é as seguintes funções: .toUpperCase() e .toLowerCase()
* Para saber se existe algum conteúdo no texto é a propriedade .includes() retornando booleano
* Para separar os textos a função é: .split(), onde devemos salvar dentro de um array, e acessar os recortes por posição no array.
* O metodo join() serve para unir um array
* O metodo Array.from(variavel) serve para transformar uma cadeia de caracteres em elementos de um array

# Manipulando array

* let techs = ["html", "css", "js"]

* Para adicionar um item no fim
* techs.push("node.js")

* Para adicionar no começo
* techs.unshift("sql")

* Para remover do fim
* techs.pop()

* Para remover do começo
* techs.shift()

* Para pegar somento alguns elementos do array
* techs.slice(1,3) // Aqui no primeiro parâmetro é necessário informar a primeira posição que irá iniciar o retorno e a posição do último retorno.

* Para remover um ou mais itens em qualquer posição do array
* techs.splice(1,1) // No primeiro parâmtro é informado a posição do primeiro valor que será retirado e no segundo a quantidade de valores que serão removidos.

* Para encontrar a posição de um elemento no array
* let index = techs.indexOf("css")