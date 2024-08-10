import java.util.Scanner;

public class Contador {
    public static void main(String[] args) {
        boolean repetir;
        Scanner scanner = new Scanner(System.in);
        do {
            repetir = false;
            try {
                System.out.println("\nInforme o primeiro número:");
                int primeiroNumero = scanner.nextInt();
                System.out.println("\nInforme o segundo número:");
                int segundoNumero = scanner.nextInt();
                int contagem = verificarNumeros(primeiroNumero, segundoNumero);
                contar(contagem);
            } catch (ParametrosInvalidosException e) {
                repetir = true;
                System.out.println("\nO segundo parâmetro deve ser maior que o primeiro.");
            }
        } while (repetir);
        scanner.close();
    }

    static int verificarNumeros (int primeiroNumero, int segundoNumero) throws ParametrosInvalidosException{
        if (primeiroNumero >= segundoNumero) {
            throw new ParametrosInvalidosException();
        }
        return segundoNumero - primeiroNumero;
    }
    
    static void contar(int contagem){
        System.out.println("\n");
        for(int i = 1; i <= contagem; i++){
            System.out.println(i);
        }
    }
}
