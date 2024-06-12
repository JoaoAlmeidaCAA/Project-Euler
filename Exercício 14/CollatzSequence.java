//Criação de classe chamada "Euler14", que contem a lógica
public class CollatzSequence {

    //Função para calcular o comprimento da sequência de Collatz
    public static long collatzSequenceLength(long n) {
        long length = 1;
        while (n != 1) {
            if (n % 2 == 0) {
                n = n / 2;
            }
            else {
                n = 3 * n + 1;
            }
            length++;
        }
        return length;
    }
    public static void main (String[] args) {
        long maxLength = 0;
        long number = 0;

        //Loop principal de 1 a 999999
        for (long x = 1; x < 1000000; x++) {
            long length = collatzSequenceLength(x);
            if (length > maxLength) {
                maxLength = length;
                number = x;
            }
        }
        //Imprimindo resultado
        System.out.println("O número inicial abaixo de um milhão que produz a sequência mais longa:" + number);
        System.out.println("O comprimento da sequência é:" + maxLength);
    }

}
