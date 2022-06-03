package br.com.dio.desafio.dominio;

import java.time.LocalDate;

public class Certificado {
    public String imprimirCertificado(String nomeDev, String nomeCurso, int cargaHoraria, LocalDate dataFinal){

        String textoCertificado = "Certificamos que "+nomeDev+" concluiu o curso "+nomeCurso+", com carga horária de "+cargaHoraria+"h em "+dataFinal+", com o aproveitamento necessário.";

        return textoCertificado;
    }
}
