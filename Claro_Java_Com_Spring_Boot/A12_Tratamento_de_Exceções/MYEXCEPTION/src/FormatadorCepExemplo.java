import java.util.Scanner;

public class FormatadorCepExemplo {
    public static void main(String[] args) {
        boolean runCode;
        Scanner scanner = new Scanner(System.in);
        do {//Bloco do while usado para reiniciar a função main enquanto o dado informado não estiver correto.
            try {
                runCode = false;
                System.out.println("\nInforme o CEP:");//Dados para teste:  errado "2376506"  /  correto "23765064".
                String cep = scanner.next();
                String cepFormatado = formatarCep(cep);//Se ocorrer exceção, o fluxo é interrompido e o bloco catch é chamado imediatamente.
                System.out.println(cepFormatado);//Essa linha será executada apenas se não ocorrer exceção.
            } catch (CepInvalidoException e) {
                runCode = true;
                System.out.println("\nO CEP não corresponde às regras de negócio.");
            }
        } while (runCode);
        scanner.close();
        System.out.println("\nCEP formatado com sucesso.\n");
    }

    public static String formatarCep(String cep) throws CepInvalidoException{
        if (cep.length() != 8) {
            throw new CepInvalidoException();
        }
        
        //Simulando um CEP formatado.
        return "23.765-064";
    }
}
