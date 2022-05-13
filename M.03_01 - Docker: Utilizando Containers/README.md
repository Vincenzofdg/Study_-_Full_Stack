## Usando MySQL Pelo Docker

Baixe a imagem em sua versão desejada: `> docker pull mysql` ou `docker pull mysql:8.0`

### Acessando Pelo Endereço IP

1. Criando o Container em segundo plano: `> docker run -e MYSQL_ROOT_PASSWORD=password --name nomde_do_container -d mysql:8.0` 
2. Ver o IP do servidor: `> docker inspect myDB | grep IPAddress` (172.17.0.2)
3. Configurar o MySQL Workbench.

### Acessando Pelo LocalHost (3310)

1. Criando o Container em segundo plano: `> docker run -e MYSQL_ROOT_PASSWORD=password --name nomde_do_container -d -p 3306:3310 mysql:8.0`
2. Configurar o MySQL Workbench.