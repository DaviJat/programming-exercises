// Cria uma função que retorna uma string 'Hello,' concatenada com um
// argumento de texto (a ser passado para a função) e com uma exclamação
// '!' no final.

function concatenate(name) {
	return 'Hello, ' + name + '!';
}

function concatenate(name) {
	return `Hello, ${name}`;
}

// Resoluções

function cumprimentar(nome) {
	const saudacao = 'Olá';
	// return ['1', '2', '3'].join(' / ') = '1 / 2 / 3'
	return [saudacao, nome].join(', ').concat('!');
}

function cumprimentar(nome) {
	return 'Olá, ' + nome + '!';
}

function cumprimentar(nome) {
	return `Olá, ${nome}!`;
}
