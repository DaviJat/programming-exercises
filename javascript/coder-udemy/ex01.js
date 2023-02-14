// Create a function that returns a string 'Hello,' concateneted with a
// text argument (to be passed to the function) and with an exclamation
// point '!' at the end.

function concatenate(name) {
	return 'Hello, ' + name + '!';
}

function concatenate(name) {
	return `Hello, ${name}`;
}

// Resolutions

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
