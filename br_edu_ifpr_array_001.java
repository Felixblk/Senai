/*
  Escreva um programa em java que:
  
  (a) solicite ao usuário um número inteiro e positivo, não menor que 5
    e use esse valor para criar um array de inteiros;
  (b) leia números inteiros e positivos para o array de (a);
  (c) verifique a quantidade de pares e crie um novo array;
  (d) verifique a quantidade de impares e crie um novo array;
  (e) copie os valores pares de (a) para (c);
  (f) copie os valores impares de (a) para (d)
  (g) mostre (a), (c) e (d)
  
  Criar tantos pacotes, classes
  
 */




package array001;

import java.util.Scanner;

public class br_edu_ifpr_array_001 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in); // Cria o Scanner

        int numero;

        do {
            System.out.println("Insira um número:");
            numero = scanner.nextInt();

            if (numero <= 0) {
                System.out.println("Número inválido. Tente novamente.");
            }

        } while (numero <= 5); 

        System.out.println("Número inserido: " + numero);

        scanner.close(); // Fecha o Scanner no final
    }
}
