// JavaScript source code

/*addVat(a), that returns amount including vat given an amount as input.
subVat(a), that returns amount excluding vat given an amount as input.
calcVat(a), that returns the vat from the given amount.*/

/*Har benyttet disse regneregler: https://dinero.dk/support/hvordan-beregner-jeg-moms-beloeb/ */ 

function addVat(a){
	return a*1,25; 
}

function subVat(a) {
	return a*0.8; 
}

function calcVat(a){
	return a-(a*0.8); 
}

console.log(addVat(100));
console.log(subVat(100));
console.log(calcVat(100));