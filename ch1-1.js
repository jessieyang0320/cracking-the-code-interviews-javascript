// Is Unique 
//  determine if a string has all unique characters
//  O(n^2) approach, no additional data structures used

var IsUnique = function(str){
	for(var i=0; i< str.length; i++){
		for(var j = i+1; j< str.length; j++){
			if(str[i] === str[j]){
				return false; 
			}
		}
	}
	return true; 
}

// TEST
