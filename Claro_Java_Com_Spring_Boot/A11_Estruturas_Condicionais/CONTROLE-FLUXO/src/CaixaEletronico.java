public class CaixaEletronico {
    public static void main(String[] args) throws Exception {

        //condicionalSimples();
        //condicionalComposta();
        //condicionalEncadeada();
        //condicionalTernaria();
        condicionalSwitchCase();
    }

    public static void condicionalSimples() {
        double saldo = 25.0;
        double valorSolicitado = 17.0;

        if (valorSolicitado < saldo) {
            saldo = saldo - valorSolicitado;
        }

        System.out.print(saldo);
    }

    public static void condicionalComposta() {
        double saldo = 25.0;
        double valorSolicitado = 17.0;

        if (valorSolicitado < saldo) {
            saldo = saldo - valorSolicitado;
            System.out.print("Novo saldo: "+saldo);
        }else{
            System.out.println("Saldo insuficiente.");
        }
    }

    public static String condicionalEncadeada(double nota) {
        String resultado = "";

        if (nota >= 7) {
            resultado = "Aprovado";
        }else if (nota >= 5 && nota < 7) {
            resultado = "Recuperação";
        }else{
            resultado = "Reprovado";
        }

        return resultado;
    }

    public static void condicionalTernaria() {
        double nota = 7.5;

        System.out.println(nota >= 0 ? condicionalEncadeada(nota) : "Informar nota >= 0.");
    }

    public static void condicionalSwitchCase() {
        char nota = 'A';

        switch (nota) {
            case 'A':
            case 'B':
                System.out.println("Aprovado");
                break;
            case 'C':
            case 'D':
                System.out.println("Recuperação");
                break;
            case 'E':
                System.out.println("Reprovado");
                break;
        
            default:
                System.out.println("Conceito inválido");
        }
    }
}
