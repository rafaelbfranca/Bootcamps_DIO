public class SmartTv {
    boolean ligada = false;
    int canal = 1;
    int volume = 25;

    public void mudarEstadoTv (){
        ligada = !ligada;
    }
    public void aumentarCanal (){
        canal++;
    }
    public void diminuirCanal (){
        canal--;
    }
    public void mudarCanal (int novoCanal){
        canal = novoCanal;
    }
    public void aumentarVolume (){
        volume++;
    }
    public void diminuirVolume (){
        volume--;
    }
}
