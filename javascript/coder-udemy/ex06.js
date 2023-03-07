// Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido
// for booleano, o retorna da função deverá ser o inverso. Por exemplo, se a entrada for false,
// retornará true. Se o parâmetro for numérico, o retorno será o número inverso. Por exemplo,
// se for fornecido 1, o retorno será -1. Se o parâmetro de entrada não for nenhum dos tipos
// acima, retorne "booleano ou número esperados, mas o prâmetro é do tipo ...". 

function semNome(value) {

    let type = typeof(value);

    if (type == 'boolean') {
        value == true ? value = false : value = true
    } else if (type == 'number') {
        value = (-(value))
    } else {
        // return 'Booleano ou número esperados, mas o prâmetro é do tipo ' + type;
        return `Booleano ou número esperados, mas o prâmetro é do tipo ${type}`;
    }

    return value;
}
