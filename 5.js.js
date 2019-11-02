function generate(jumlah){
	for (var i = 0; i < jumlah; i++){
	 	var alfabet = "0123456789abcdefghijklmnopqrstuvwxyz";
		var random;
	 	var kata = "";
	 	for (var j = 0; j < 4; j++){
	 		for (var k = 0; k < 4; k++){
	 			var hasil = Math.floor(Math.random() * alfabet.length);
	 			random = alfabet.substring(hasil, hasil+1);
	 			kata = kata.concat(random);
	 		}
	 		kata = kata.concat("-");
	 	}
	 	kata = kata.substring(0, kata.length-1);
	 	console.log(kata);
	 }
}


generate(3);