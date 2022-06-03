package br.com.dio.desafio.dominio;

public class Curso extends Conteudo{
    
    @Override
    public String toString() {
        return "Curso [cargaHoraria=" + getCargaHoraria() + ", descricao=" + getDescricao() + ", titulo=" + getTitulo() + "]";
    }
    @Override
    protected double calcularXp() {
        return XP_PADRAO * getCargaHoraria();
    }
}
