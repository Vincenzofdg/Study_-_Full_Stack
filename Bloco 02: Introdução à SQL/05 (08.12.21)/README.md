##### Problema Resolvido

> ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client

Execute os comandos abaixo, dentro do MYSQL:

```sh
// 'root' se o seu usuário chamar root
// se não funcionar remova o @'localhost'

mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Seunome123456*';

mysql> flush privileges;

```
