import java.io.IOException;
import java.util.Scanner;

public class Desafio {	
    private static final int QUADRADO = 2;
    private static final int CUBO = 3;

    public static void main(String[] args) throws IOException {
		Scanner leitor = new Scanner(System.in);
		int N = leitor.nextInt();
        
		for (int i = 1; i <= N; i++) {
            int quadrado = (int) Math.pow(i,QUADRADO);
            int cubo = (int) Math.pow(i,CUBO);
			System.out.println(i + " " + quadrado + " " + cubo);
			System.out.println(i + " " + (quadrado + 1) + " " + (cubo + 1));
		}
        leitor.close();
    }
}
