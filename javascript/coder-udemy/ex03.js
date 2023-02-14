// Develop a function that  receives two parameters,  one is the number of hours worked
// by a employee in a  month, and the other is how much he earns per hour. The function
// return  should be the string "Salary equal to $X", where X is how much the  employee
// earned in the month subtracted 30% for taxes (netSalary).

function calculateSalary(hoursWorked, valuePerHour) {
	const grossSalary = hoursWorked * valuePerHour;
	const netSalary = grossSalary - (grossSalary * 30) / 100;

	return `Salary equal to ${netSalary}`;
}

// Resolution

function calcularSalarioLiquido(horasTrabalhadas, ganhoPorHora) {
	const salarioBruto = horasTrabalhadas * ganhoPorHora;
	const salarioLiquido = salarioBruto - (salarioBruto * 30) / 100;
	return `Salário igual a R$ ${salarioLiquido}`;
}
