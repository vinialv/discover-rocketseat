//Exercicio 01

function transformaNotas(nota) {
    if (nota >= 90 && nota <= 100) {
        notaCaracter = 'A'
    }
    else if (nota >= 80 && nota <= 100) {
        notaCaracter = 'B'
    }
    else if (nota >= 70 && nota <= 79) {
        notaCaracter = 'C'
    }
    else if (nota >= 60 && nota <= 69) {
        notaCaracter = 'D'
    }
    else if (nota >= 0 && nota <= 59) {
        notaCaracter = 'F'
    }
    else {
        notaCaracter = 'Nota inválida'
    }

    return console.log(`Exercicio 01: A nota: ${nota} convertida para nota em caracter é a: ${notaCaracter}`)
}

transformaNotas(48)

//Exercicio 02

let family = {
    receitas: [200, 1485.60, 411, 638.90],
    despesas: [48.55, 1632.00, 23.90]
}

function soma(array) {
    let total = 0

    for (let value of array) {
        total += value
    }
    return total
}

function calculaSaldo() {
    const calculaReceitas = soma(family.receitas)
    const calculaDespesas = soma(family.despesas)

    const saldo = calculaReceitas - calculaDespesas

    return console.log(`Exercicio 02: O saldo em dinheiro é: R$${saldo.toFixed(2)}`)

}

calculaSaldo()

//Exercicio 03

let temperatura = '50'
let tipoTemperatura = 'fahrenheit'

function calculaTemperatura(temperatura, tipoTemperatura) {

    let celsius = 0
    let fahrenheit = 0

    if (tipoTemperatura == 'celsius'){
        fahrenheit = Number(temperatura) * 9 / 5 + 32
        console.log(`Exercicio 03: A temperatura de ${temperatura}°C convertida para fahrenheit é ${fahrenheit}°F`)
    } else {
        celsius = (Number(temperatura) - 32) * 5 / 9
        console.log(`Exercicio 03: A temperatura de ${temperatura}°F convertida para fahrenheit é ${celsius}°C`)
    }
}

calculaTemperatura(temperatura, tipoTemperatura)