// ch1-6 string compression 
// compress a string as required and see if the length is smaller, if not print the original string
// aaabbczzz => a3b2c1z3
// count each char, if it`s the same with the next one, count +1 
// renturn a concatenated string 
// note: the string is sorted 

var compressStr = function(str){
	if(!str){
		return str;
	}

	let cStr= '';

	for (let i= 0; i<str.length; i++){
		
		let char = str[i], startPoint = i;

		while(i+1 < str.length && char === str[i+1]){
			i++
		}
   cStr += (i-startPoint + 1) + char 

	}
	
	return cStr.length < str.length ? cStr : str;
}

// JS does not have a StringBuilder/StringBuffer style class
// for creating strings, string concatenation has been heavily optimised in JS implementations and 
// is faster than creating a string via an array than using a 
// .join('') at the end

// TESS
// compressStr("aaabbccccddd")
// compressStr("aaabbccccddd")