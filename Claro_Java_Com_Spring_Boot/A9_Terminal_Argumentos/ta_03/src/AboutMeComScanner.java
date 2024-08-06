import java.util.Locale;
import java.util.Scanner;

public class AboutMeComScanner {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in).useLocale(Locale.US);

        System.out.println("Digite seu primeiro nome:");
        String firstNome = scanner.next();

        System.out.println("Digite seu último nome:");
        String lastNome = scanner.next();

        System.out.println("Digite sua idade:");
        int age = scanner.nextInt();

        System.out.println("Digite sua altura:");
        double hight = scanner.nextDouble();

        System.out.println("Olá, meu nome é "+firstNome+" "+lastNome+".");
        System.out.println("Tenho "+age+" anos.");
        System.out.println("Minha altura é: "+hight+"m.");

        scanner.close();
    }
}
