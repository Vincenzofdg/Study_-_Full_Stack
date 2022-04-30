Quando fazemos o download de uma imagem (por exemplo, com o comando docker pull <imagem>, que baixa a imagem, mas não cria nenhum container), podemos perceber nesse processo, a existência de vários downloads e extrações acontecendo. Cada um desses downloads representa uma camada.

**Linux Alphine**

Muito utilizada em imagens do Docker por ser uma distribuição que possui somente o essencial para seu funcionamento, o que torna ela uma opção leve, rápida, simples e segura.
Por isso, vários softwares a usam por padrão, ou pelo menos mantêm uma versão / tag utilizando essa distribuição como base, como é o caso do `node:alpine`. 

Portanto, se dermos o comando `docker pull alpine:3.13` baixando a versão 3.13 dessa distribuição e, logo após, dermos o comando `docker pull node:alpine3.13`, veremos que a imagem do node, deve reaproveitar uma camada que já foi baixada em outro momento: 

Lembrando ==> `docker pull <imagem>:<tag>`, no qual a <tag> é opcional. 

## Exercicio

1. Rode o comando: `docker run --name meu_container -it ubuntu`

2. Crie o texto: `echo "Teste container" > ola_mundo.txt`

3. Verifique se o arquivo foi realmente criado: `cat ola_mundo.txt`

4. Assim que o terminal imprimir 'Teste container' ==> `exit`

5. Entre novamente no container: `docker start -ai meu_container`

6. Verifique se o arquivo criado se encontra: `cat ola_mundo.txt`
