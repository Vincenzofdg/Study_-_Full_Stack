#!/usr/bin/env bash

# Packages
apt=(apt-transport-https ca-certificates curl gnupg lsb-release)
remove=(docker docker-engine docker.io containerd runc)
aptInstall=(docker-ce docker-ce-cli containerd.io)

# Caso haja alguma versão do docker será desinstalado
for program in ${remove[@]}; do
        if dpkg -l | grep -q $program; then
                sudo apt remove "$program" -y
		echo "[REMOVED] ==> $program"
        else
                echo "[NOTHING TO REMOVE] ==> $program"
        fi
done

# Instalando Pacotes necessarios:
for program in ${apt[@]}; do
	if ! dpkg -l | grep -q $program; then
		sudo apt install "$program" -y
		echo "[INSTALLED] ==> $program"
	else
		echo "[ALREADY INSTALLED] ==> $program"
	fi
done

# Adicionando a chave do Repositório:
#curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Adicionando o repositório:
#echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Instalando Docker Engine:
sudo apt update

for program in ${aptInstall[@]}; do
        if ! dpkg -l | grep -q $program; then
                sudo apt install "$program" -y
                echo "[INSTALLED] ==> $program"
        else
                echo "[ALREADY INSTALLED] ==> $program"
        fi
done

# Adicionando um usuário ao grupo de usuários docker:
	# Para evitar o uso de sudo em todos os comandos Docker que formos executar, vamos dar as devidas permissões ao usuário.
sudo groupadd docker # retorno da mensagem => groupadd: grupo 'docker' já existe (Só prosseguir)
sudo usermod -aG docker $USER

# Para ativar as alterações realizadas aos grupos, você pode realizar logout e login de sua sessão, ou executar:
newgrp docker

# Iniciando o Daemon do Docker:
#sudo systemctl status docker
#Retorno esperado:
# ● docker.service - Docker Application Container Engine
#     Loaded: loaded (/lib/systemd/system/docker.service; enabled; vendor preset: enabled)
#     Active: inactive (dead) since Thu 2021-09-23 11:55:11 -03; 2s ago
#TriggeredBy: ● docker.socket
#       Docs: https://docs.docker.com
#    Process: 2034 ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock (code=exited, status=0>
#   Main PID: 2034 (code=exited, status=0/SUCCESS

sudo systemctl start docker
sudo systemctl enable docker

# Testando se o docker esta funcionando (Após instalação é recomendado a reinicialização do Copmputador)
docker run hello-world

