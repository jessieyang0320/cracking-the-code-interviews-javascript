// ch1-5 One Away
// 3 edits: insert a char, delete a char, replace a char
// given 2 strings, write a function to see if they are one edit away

// step 1: without space, compare length: if >1 then false
// length1 = length2+1 || length1 == length 2 
//  
// step 2: 
// 




var isOneAway = function(str1, str2){
	let length1 = str1.length, length2 = str2.length;

	if(Math.abs(length1 - length2)>1){
		return false 
	}

	let isEdited = false;
	for(let i=0, j=0; i< length1 && j < length2; i++,j++){
		if(str1[i]!=str2[j]){
			if(isEdited){
				return false; 
			}
			
			if (length1>length2){
			  j--;
			} 
			else if (length1< length2){
			  i--;
			  
			}
			
			isEdited = true

		}
	}
	
	return true;
}

isOneAway("pale","ale")