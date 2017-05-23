// check permutation
// a function that takes 2 string, check to see if one string is a permutation of the other
// step 1: check length of each string
// step 2: sort two strings and compare
// uppercase/lowercase matters  
// white space matters

var isPermutation = function(str1,str2){
	// taking out white spaces if any, show in lowercase
	var str1 = str1.replace(/\s/g,'').toLowerCase();
    var str2 = str2.replace(/\s/g,'').toLowerCase();

	if(str1.length!== str2.length){
		return false;
	} else {
		var sortedStr1 = str1.split('').sort().join('');
		var sortedStr2 = str2.split('').sort().join('');
		return sortedStr1 === sortedStr2;
	}
}

// TESt

isPermutation('word','drom');
isPermutation('word','Drow');
isPermutation('word','d rom')