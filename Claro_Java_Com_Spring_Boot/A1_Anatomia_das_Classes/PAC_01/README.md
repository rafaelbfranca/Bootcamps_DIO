##
## Anotações Sobre Classes

A classe deve ser escrita em um arquivo cujo nome é exatamente igual e terminado em ".java".

Exemplo: o arquivo MinhaClasse.java contém a classe MinhaClasse().

O nome da classe e do aruivo devem ser, por convensão, escritos em camelCase a partir da primeira palavra que componha o nome.

Exemplo: MinhaClasseTemCincoPalavras.

Uma classe é geralmente declarada como "public class", mas há outros casos.

A classe deve conter um método principal "main", que será executado sempre que a classe for chamada.

O método "main" é declarado como "public static void" e exige um argumento (String [ ] args).

##
## Anotações Sobre Variáveis

O nome da variável, por convensão, deve ser escrito em letras minúsculas (utilizando-se camelCase a partir da segunda palavra se o nome for composto), sem caracteres especiais (podendo conter espaços sublinhados "_" ("underline") ou cifrão "$" e algarismos de 0 a 9) e não pode iniciar por um algarismo.

Se for uma variável que deva ter um valor fixo, o nome deve ser todo em maiúsculas e o tipo da variável deve receber o prefixo "final".

Exemplo: final int altura = 30;

##
## Anotações Sobre Pacotes

Utilizados para organizar os arquivos do projeto.
É uma estrutura de sub-pastas onde o arquivo será armazenado.

Exemplo: Criar a pasta1, dentro da 1 criar a pasta2, dentro da 2 criar a pasta3 e dentro da 3 salvar o arquivo desejado. Dessa forma será identificado que o arquivo em questão pertence ao pacote "pasta1.pasta2.pasta3".
