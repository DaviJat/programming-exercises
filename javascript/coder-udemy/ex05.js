// Crie uma função que receba dois números e retorna se o primeiro é maior ou igual ao segundo

function biggerOrEqual(number1, number2) {
    if (number1 >= number2) {
        return true;
    }

    return false;
}

// Resolução

function maiorOuIgual(primeiro, segundo) {
    if (typeof primeiro != typeof segundo) return false
    
    return primeiro >= segundo
}
    