import java.util.Locale;
import java.util.Scanner;

public class TryCatch {
    public static void main(String[] args) throws Exception {
        boolean backToMain;
        Scanner scanner = new Scanner(System.in).useLocale(Locale.US);
        do {//Bloco do while usado para reiniciar a função main enquanto o dado informado não estiver correto.
            try {
                backToMain = false;
                
                System.out.println("\nDigite seu primeiro nome:");
                String firstNome = scanner.next();

                System.out.println("\nDigite seu último nome:");
                String lastNome = scanner.next();

                System.out.println("\nDigite sua idade:");
                int age = scanner.nextInt();

                System.out.println("\nDigite sua altura:");
                double hight = scanner.nextDouble();

                System.out.println("\nOlá, meu nome é "+firstNome+" "+lastNome+".");
                System.out.println("Tenho "+age+" anos.");
                System.out.println("Minha altura é: "+hight+"m.");
            } catch (Exception e) {
                //System.out.println(e);
                backToMain = true;
                switch (e.toString()) {
                    case "java.util.InputMismatchException":
                        System.out.println("\nIdade e altura devem ser valores numéricos. Utilizar ponto em vez de vírgula.");
                        break;
                }
            }
        } while (backToMain);
        scanner.close();
    }
}
