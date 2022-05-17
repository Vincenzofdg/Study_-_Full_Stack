## Exercicio
1. Crie um Dockerfile utilizando a imagem `chuanwen/cowsay`;
2. Agora defina um _ENTRYPOINT_ para a execução do comando;
3. Utilize o _CMD_ para definir uma mensagem padrão;
4. Gere uma build e execute um container baseado em sua imagem sem passar nenhum comando;
5. Teste a imagem criando containers: 
```
> docker container run cow-image
> docker container run cow-image dizendo outra coisa
> docker container run cow-image -f moofasa "um leao falando algo"
> docker container run cow-image -l
```

## Gerando Imagem e Criando o Container
1. `docker image build --tag cow-image .`
2. `docker run --name cow-container cow-image`