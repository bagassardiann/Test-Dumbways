function hitungKembalian(jumlahBelanja, uangBelanja){
	var kembalian = uangBelanja - jumlahBelanja;
	var point;
	while(kembalian > 0){
		if(kembalian >= 50000){
			point = Math.floor(kembalian/50000);
			console.log(point + "x 50000");
			kembalian = kembalian - (point*50000);
		}else if(kembalian >= 20000){
			point = Math.floor(kembalian/20000);
			console.log(point + "x 20000");
			kembalian = kembalian - (point*20000);
		}else if(kembalian >= 10000){
			point = Math.floor(kembalian/10000);
			console.log(point + "x 10000");
			kembalian = kembalian - (point*10000);
		}else if(kembalian >= 5000){
			point = Math.floor(kembalian/5000);
			console.log(point + "x 5000");
			kembalian = kembalian - (point*5000);
		}else{
			console.log(kembalian + " disumbangkan");
			kembalian = 0;
		}
	}
}