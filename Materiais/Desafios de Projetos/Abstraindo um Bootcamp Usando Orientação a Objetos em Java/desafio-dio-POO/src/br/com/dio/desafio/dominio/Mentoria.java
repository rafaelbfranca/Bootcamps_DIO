package br.com.dio.desafio.dominio;

public class Mentoria {
    private String titulo;
    private String descricao;
    private String data;
    
    public String getTitulo() {
        return titulo;
    }
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }
    public String getDescricao() {
        return descricao;
    }
    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
    public String getData() {
        return data;
    }
    public void setData(String string) {
        this.data = string;
    }
    @Override
    public String toString() {
        return "Mentoria [data=" + data + ", descricao=" + descricao + ", titulo=" + titulo + "]";
    }
}
