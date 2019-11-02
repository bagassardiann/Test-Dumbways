var input =  [1,2,3,4,5];
var maxmin = [];

for(var i = 1; i <= input.length; i++){
	var nilai = 0;
	var temp = [];
	for(var j = 1; j <= input.length; j++){
		if(j !== i){
			nilai = nilai + j;
			temp.push(j);
		}
	}
	maxmin.push(nilai);
	console.log("angka "+i+" : "+temp[0]+"+"+temp[1]+"+"+temp[2]+"+"+temp[3]+" = "+nilai);
}
console.log("Maka angka terbesar dan terkecilnya adalah "+ Math.max(...maxmin)+" & "+ Math.min(...maxmin));