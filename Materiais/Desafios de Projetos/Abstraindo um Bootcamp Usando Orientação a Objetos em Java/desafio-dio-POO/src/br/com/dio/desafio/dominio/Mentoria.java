package br.com.dio.desafio.dominio;

import java.time.LocalDate;

public class Mentoria extends Conteudo{
    private LocalDate data;
        
    public LocalDate getData() {
        return data;
    }
    public void setData(LocalDate data) {
        this.data = data;
    }
    @Override
    public String toString() {
        return "Mentoria [cargaHoraria=" + getCargaHoraria() + ", data=" + data + ", descricao=" + getDescricao() + ", titulo=" + getTitulo() + "]";
    }
    @Override
    protected double calcularXp() {
        return XP_PADRAO + 20;
    }
}
