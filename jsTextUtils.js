//Sidste tegn: s.length-1
//Midterste tegn: s-lenght/2? 
//
/* Write a function first(s), that returns the first character of the string s.
Write a function last(s), that returns the last character of the string s.
Write a function middle(s), that returns whatever is between the first and the last character of the string s. */ 

function first(s){
	return s.substring(0,1);
}

function middle(s){
	return s.substring(1,(s.length-1));
}

function last(s){
	return s.substring(s.length-1);
}

console.log(first('mozilla'));
console.log(middle('mozilla'));
console.log(last('mozilla'));