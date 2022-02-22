Esses conceitos vão usar o SELECT para gerar valores e usar o AS para dar nomes às suas colunas, como nos exemplos a seguir.
```
SELECT 'Olá, bem-vindo ao SQL!';
SELECT 10;
SELECT now();
SELECT 20 * 2;
SELECT 50 / 2;
SELECT 18 AS idade;
SELECT 2019 AS ano;
SELECT 'Rafael', 'Martins', 25, 'Desenvolvedor Web';
SELECT 'Rafael' AS nome, 'Martins' AS sobrenome, 25 AS idade, 'Desenvolvedor Web' AS 'Área de atuação';
```
### Exercicios:

1. Monte uma query que exiba seu nome na tela;

> SELECT 'Algum_Nome';

2. Monte uma query que exiba seu nome, sobrenome, cidade natal e idade na tela;

> SELECT 'Algum_Nome', 'Sobrenome', 'Cidade_Natal';

3. Monte uma query que, além de exibir todas as informações já mencionadas, identifique cada coluna usando o AS , que é chamado de alias na linguagem SQL;

4. Qual é o resultado de 13 * 8 ? Descubra usando apenas o SELECT;

5. Monte uma query que exiba a data e hora atuais. Dê a essa coluna o nome "Data Atual". 
