function addUp(num) {
	if(num > 0) {
	return num + addUp(num-1)}
	
}

console.log(addUp(4))