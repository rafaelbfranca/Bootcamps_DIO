import java.util.List;

public class Main {

	public static void main(String[] args) {
		Cliente cliente = new Cliente();
		cliente.setName("Rafael Franca");
		
		Conta corrente = new ContaCorrente(cliente);
		Conta poupanca = new ContaPoupanca(cliente);
		
		corrente.depositar(100);
		corrente.transferir(80, poupanca);
		
		Banco banco = new Banco();
		banco.setName("NewBank");
		banco.setContas(corrente);
		banco.setContas(poupanca);
		
		System.out.println(banco.getName());
		List<Conta> contas = banco.getContas();
		for(Conta conta : contas){
			System.out.println(
					"-----------------------------------" + "\n" +
					"Titular: " + conta.cliente.getName() + "\n" +
					"Conta: " + conta.getTipo() + "\n" +
					"Agencia: " + conta.getAgencia() + "\n" +
					"Numero: " + conta.getNumero() + "\n" +
					"Saldo: " + conta.getSaldo()
					);
		};
		
		System.out.println("-----------------------------------");
				
		corrente.imprimirExtrato("### Extrato Conta Corrente ###");
		poupanca.imprimirExtrato("### Extrato Conta Poupanca ###");
	}

}
