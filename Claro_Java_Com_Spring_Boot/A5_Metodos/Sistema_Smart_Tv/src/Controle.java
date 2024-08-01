public class Controle {
    public static void main(String[] args) throws Exception {
        
        SmartTv smartTv = new SmartTv();

        System.out.println("\n");

        if(!smartTv.ligada){
            smartTv.mudarEstadoTv();
        }

        System.out.println("A TV está ligada? "+smartTv.ligada);
        
        System.out.println("Volume inicial: "+smartTv.volume);
        smartTv.aumentarVolume();
        System.out.println("Volume atual: "+smartTv.volume);
        smartTv.aumentarVolume();
        System.out.println("Volume atual: "+smartTv.volume);
        smartTv.aumentarVolume();
        System.out.println("Volume atual: "+smartTv.volume);
        smartTv.diminuirVolume();
        System.out.println("Volume atual: "+smartTv.volume);

        System.out.println("Canal inicial: "+smartTv.canal);
        smartTv.aumentarCanal();
        System.out.println("Canal atual: "+smartTv.canal);
        smartTv.aumentarCanal();
        System.out.println("Canal atual: "+smartTv.canal);
        smartTv.diminuirCanal();
        System.out.println("Canal atual: "+smartTv.canal);
        

        System.out.println("\n");
    }
}
