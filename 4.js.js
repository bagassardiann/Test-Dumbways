var kualitas;
var kuantitas;
function hitungBarang(kualitas, kuantitas){
	if (kualitas == "A") {
		if (kuantitas > 10){
			console.log("Total Harga Barang : "+ (kuantitas*3000));
			console.log("Potongan Harga : "+ (kuantitas*500));
			console.log("Total yang Harus Dibayar : "+ ((kuantitas*3000)-(kuantitas*500)));
		}else{
			console.log("Total Harga Barang : "+ (kuantitas*3000));
			console.log("Potongan Harga : 0");
			console.log("Total yang Harus Dibayar "+ (kuantitas*3000));
		}
	}else if(kualitas == "B"){
		if (kuantitas > 5){
			console.log("Total Harga Barang : "+ (kuantitas*3500));
			console.log("Potongan Harga : "+ (0.5*kuantitas*3500));
			console.log("Total yang Harus Dibayar : "+ (0.5*kuantitas*3500));
		}else{
			console.log("Total Harga Barang : "+ (kuantitas*3500));
			console.log("Potongan Harga : 0");
			console.log("Total yang Harus Dibayar "+ (kuantitas*3500));

		}

	}else if(kualitas == "C"){
		console.log("Total Harga Barang : "+ (kuantitas*5000));
		console.log("Potongan Harga : 0");
		console.log("Total yang Harus Dibayar "+ (kuantitas*5000));

	}
}

hitungBarang("A", 20);