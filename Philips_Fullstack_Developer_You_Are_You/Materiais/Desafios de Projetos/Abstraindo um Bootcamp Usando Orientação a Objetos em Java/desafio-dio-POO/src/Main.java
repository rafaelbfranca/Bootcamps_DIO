import java.time.LocalDate;

import br.com.dio.desafio.dominio.Bootcamp;
import br.com.dio.desafio.dominio.Curso;
import br.com.dio.desafio.dominio.Dev;
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
        mentoria1.setData(LocalDate.now());
        mentoria1.setCargaHoraria(2);

        Bootcamp bootcamp = new Bootcamp();
        bootcamp.setNome("Bootcamp Java Developer");
        bootcamp.setDescricao("Cursos e Mentorias de Programação Web.");
        bootcamp.getConteudo().add(curso1);
        bootcamp.getConteudo().add(curso2);
        bootcamp.getConteudo().add(mentoria1);

        Dev dev1 = new Dev();
        dev1.setNome("Pedro");
        dev1.inscreverBootcamp(bootcamp);
        dev1.progredir();
                
        Dev dev2 = new Dev();
        dev2.setNome("Paula");
        dev2.inscreverBootcamp(bootcamp);
        dev2.progredir();


        // System.out.println("Conteudos Inscritos de "+dev1.getNome()+": "+dev1.getConteudosInscritos());
        // System.out.println();
        // System.out.println("Conteudos Concluídos de "+dev1.getNome()+": "+dev1.getConteudosConcluidos());
        // System.out.println();
        // System.out.println("XP: "+dev1.calcularTotalXp());
        // System.out.println();
        // System.out.println("Conteudos Inscritos de "+dev2.getNome()+": "+dev2.getConteudosInscritos());
        // System.out.println();
        // System.out.println("Conteudos Concluídos de "+dev2.getNome()+": "+dev2.getConteudosConcluidos());
        // System.out.println("XP: "+dev2.calcularTotalXp());
        // System.out.println();
    }
}
