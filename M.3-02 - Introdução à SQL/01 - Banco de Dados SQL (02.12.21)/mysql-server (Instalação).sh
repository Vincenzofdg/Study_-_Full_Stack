#!/usr/bin/env bash

sudo apt update
sudo apt install mysql-server -y

# Definindo uma senha para o usuario root do nosso banco de dados mysql
echo "Definindo uma senha para o root do banco de dados MYSQL"
sudo mysql_secure_installation

# Após definir senha => ordem do que responder (y => y => y => n => y)
