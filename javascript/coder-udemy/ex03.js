// Desenvolva uma função que receba dois parâmetros, um é a quantidade de horas trabalhadas
// por um funcionário em um mês, e o outro é quanto ele ganha por hora. A função deve 
// retornar a string "Salário igual a $X", onde X é quanto o funcionário
// ganhou no mês subtraído 30% de impostos (netSalary)

function calculateSalary(hoursWorked, valuePerHour) {
	const grossSalary = hoursWorked * valuePerHour;
	const netSalary = grossSalary - (grossSalary * 30) / 100;

	return `Salary equal to ${netSalary}`;
}

// Resolução

function calcularSalarioLiquido(horasTrabalhadas, ganhoPorHora) {
	const salarioBruto = horasTrabalhadas * ganhoPorHora;
	const salarioLiquido = salarioBruto - (salarioBruto * 30) / 100;
	return `Salário igual a R$ ${salarioLiquido}`;
}
