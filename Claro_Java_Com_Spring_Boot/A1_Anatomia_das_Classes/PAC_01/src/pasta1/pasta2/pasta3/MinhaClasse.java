public class MinhaClasse {
    
    public static void main (String [] args){
        pac01();
        pac02();
        pac03();
    }

    public static void pac01(){
        System.out.print("Olá Java!");
    }

    public static void pac02(){
        System.out.print("Nomeando variáveis.");
    }

    public static void pac03(){
        
        String primeiroNome = "Rafael";
        String segundoNome = "França";

        System.err.println(nomeCompleto(primeiroNome, segundoNome));
    }

    public static String nomeCompleto (String primeiroNome, String segundoNome){
        return primeiroNome.concat(" ").concat(segundoNome);
    }

}
