import java.util.ArrayList;
import java.util.List;

public class Banco {
	
	private String name;
	private List<Conta> contas = new ArrayList<>();

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Conta> getContas() {
		return contas;
	}

	public void setContas(Conta conta) {
		this.contas.add(conta);
	}
}
