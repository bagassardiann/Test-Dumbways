public class Nomor3{
	static void cetak_gambar(int akhir){
		for (int i = 1; i <= akhir ; i++) {
			for (int j = 1; j <= akhir; j++) {
				if ((i%2==1) && (j == 3)) {
					System.out.print("#");
				}else if ((i%2==0) && (j%2==0)){
					System.out.print("#");
				}else{
					System.out.print("*");
				}
			}
			System.out.println();		
		}
	}

	public static void main(String [] args){
		cetak_gambar(5);
	}
}

