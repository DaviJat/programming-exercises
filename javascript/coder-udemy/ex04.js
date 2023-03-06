// Crie uma função que recebe um número (de 1 a 12) e retorne o mês
// correspondente como uma string.

function monthName(monthNumber) {
    let monthString;

    switch (monthNumber) {
        case 1:
            monthString = 'January'
            break;
        case 2:
            monthString = 'February'
            break;
        case 3:
            monthString = 'March'
            break;
        case 4:
            monthString = 'April'
            break;
        case 5:
            monthString = 'May'
            break;
        case 6:
            monthString = 'June'
            break;
        case 7:
            monthString = 'July'
            break;
        case 8:
            monthString = 'August'
            break;
        case 9:
            monthString = 'September'
            break;
        case 10:
            monthString = 'October'
            break;
        case 11:
            monthString = 'November'
            break;
        case 12:
            monthString = 'December'
            break;
        default:
            monthString = 'Invalid month'
    }

    return monthString;
}

for (var i = 1; i <= 16; i++) {
    console.log(monthName(i));
}

// Resolution

function receberNomeDoMes(numero) {

    switch(numero){
        case 1:
            return "janeiro";
        case 2:
            return "fevereiro";
        case 3:
            return "março";
        case 4:
            return "abril";
        case 5:
            return "maio";
        case 6:
            return "junho";
        case 7:
            return "julho";
        case 8:
            return "agosto";
        case 9:
            return "setembro";
        case 10:
            return "outubro";
        case 11:
            return "novembro";
        case 12:
            return "dezembro";
    }
}

function receberNomeDoMes2(numero) {
    
    const mapeamento = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
    'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

    return mapeamento[--numero];
}
    