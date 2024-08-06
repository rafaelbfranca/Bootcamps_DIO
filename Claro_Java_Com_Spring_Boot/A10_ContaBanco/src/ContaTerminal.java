import java.util.Locale;
import java.util.Scanner;

public class ContaTerminal {
    public static void main(String[] args) throws Exception {
        Scanner scanner = new Scanner(System.in).useLocale(Locale.US);
        
        System.out.println("Digite o número da conta:");
        int numeroConta = scanner.nextInt();

        System.out.println("Digite o número da agência:");
        int numeroAgencia = scanner.nextInt();

        System.out.println("Digite o nome do cliente:");
        scanner.nextLine();//Comando para consumir o "\n" digitado ao final da entrada anterior. Não seria necessário se a entrada com nextLine fosse a primeira de todas. REF: https://stackoverflow.com/questions/23450524/java-scanner-doesnt-wait-for-user-input
        String nomeCliente = scanner.nextLine();

        System.out.println("Digite o saldo da conta:");
        double saldoConta = scanner.nextDouble();

        System.out.println("Olá "+nomeCliente+", obrigado por criar uma conta em nosso banco, sua agência é "+numeroAgencia+", conta "+numeroConta+" e seu saldo "+saldoConta+" já está disponível para saque.");
        
        scanner.close();
    }
}
