import java.text.DateFormat;
import java.util.Calendar;

import br.com.dio.desafio.dominio.Curso;
import br.com.dio.desafio.dominio.Mentoria;

public class Main {
    public static void main(String[] args) throws Exception {
        Curso curso1 = new Curso();
        curso1.setTitulo("Java");
        curso1.setDescricao("Curso de Programacao em Java");
        curso1.setCargaHoraria(8);

        Curso curso2 = new Curso();
        curso2.setTitulo("HTML5");
        curso2.setDescricao("Curso de Criacao de Sites com HTML5");
        curso2.setCargaHoraria(8);


        Mentoria mentoria1 = new Mentoria();
        mentoria1.setTitulo("Java");
        mentoria1.setDescricao("Mentoria de Programacao Java");
        DateFormat f = DateFormat.getDateInstance(DateFormat.FULL);
        mentoria1.setData(f.format(Calendar.getInstance().getTime()));

        System.out.println(curso1);
        System.out.println(mentoria1);
    }
}
