public class AboutMe {
    public static void main(String[] args) {
        //Os argumentos começam com o índice 0.
        //Os argumentos devem ser entrados na chamada do programa, sendo informados logo após o nome do programa e na ordem exata declarada abaixo.
        //Neste caso a chamada do programa deve ser digitada na linha de comando do terminal da seguinte forma: java AboutMe Rafael Franca 49 1.70 
        String nome = args[0];
        String sobrenome = args[1];
        int idade = Integer.valueOf(args[2]);
        double altura = Double.valueOf(args[3]);

        System.out.println("Olá, me chamo "+nome+" "+sobrenome+"."+"\n"+"Tenho "+idade+" anos e minha altura é "+altura+".");
    }
}
