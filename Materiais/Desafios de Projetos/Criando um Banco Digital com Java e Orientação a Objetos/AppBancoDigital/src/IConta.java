//Interfaces são defindas como abstratas e por isso não podem ser instanciadas.
public abstract interface IConta {
	
	abstract void sacar(double valor);
	
	abstract void depositar(double valor);
	
	abstract void transferir(double valor, Conta contaDestino);
	
	abstract void imprimirExtrato(String texto);
}
