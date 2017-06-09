// ch1-9 string rotation 
// give two string, one time isSubstring function is available
// note: rotation point: cut one word into two and then put them together 
// cut str2 into x & y, check if str1 = xy or yx => always be in xyxy
// so str2 + str2 and see if str1 is included 
var strRotation = function(str1,str2){
	if(!str1 || !str1.length ||!str2 || !str2.length) throw Error('invalide input, must be two strings');
	if(str1.length !== str2.length){
		return false;
	}

	return (str2 + str2).includes(str1);
}