**Docker Network:** é uma espécie de rede virtualizada que permite que você conecte containers a uma determinada rede ou quantas redes Docker desejar, de forma que esses containers possam compartilhar informações através dessa rede.

Por padrão, o Docker possui 3 redes que são criadas junto com ele: `bridge`, `none` e `host`. Cada uma delas tem características específicas quanto a conectividade para seus containers. Podemos consultá-las executando:
```
docker network ls
```

**Bridge:** Todo container é associado a uma rede e, caso uma rede não seja especificada explicitamente por nós, ele será associado a rede Bridge.

**Host:** Ao associarmos um container a essa rede, ela passa a compartilhar toda stack de rede do host, ou seja, da máquina que roda o ambiente Docker. O uso desta rede é recomendada apenas para alguns serviços específicos, normalmente de infra, em que o container precisa desse compartilhamento. Caso contrário, a recomendação é evitá-la.

**None:** Essa é uma rede que não possui nenhum driver associado. Dessa maneira, ao atribuir um container a ela, o mesmo ficará isolado. Ela é útil quando temos containers que utilizam arquivos para a execução de comandos ou para se comunicar, por exemplo, um container de backup ou que rode apenas um script localmente.

Usando o Comando --link => A documentação desencoraja o seu uso, pois será removida posteriormente:

**1. Criando o Container 01**

> docker container run -dit --name container1 busybox

**2. Criando o Container 02 e o Conectando ao Container 01**

> docker container run -ti --name container1 busybox

**3. Testando se os Containers estão Conectados**

> ping container1

**Criando Nossa Rede**

**1. Criando uma Rede no Driver Bridge com o Nome `rede-teste`**

> docker network create --driver bridge rede-teste

**2. Criando um Container e Adicionando a Nossa Rede**

> docker container run -dit --name novo_container mjgargani/ubuntu-ping

> docker network connect rede-teste novo_container

**Na Criação do Container Já Conectar a uma Rede**

> docker container run -it --name outro_container --network rede-teste mjgargani/ubuntu-ping

**Testando**

> (dentro do outro_container) ping novo_container

**Desconectando um Container:** `docker network connect minha-rede meu-container`

**Conectar um Container já Criado:** `docker network connect minha-rede meu-container`

**Removendo um Network:** `docker network rm <ID_do_Network>`
`

