# Switch

Sintaxe
switch (expression){
    case 'a':
        // código
        break
    case 'b':
        // código
        break
    case 'c':
        // código
        break
    default:
        break:
}

Caso não entrar em nenhum case o switch irá cair no default

# Throw e Try/Catch

Exemplo de Throw:

function sayMyName(name = ''){
    if(name ===''){
        throw 'Nome é obrigatório
    }

    console.log('Continuação do código')
}

Exemplo Try catch

try{
    sayMyName()
} catch(e){
    console.log(e)
}