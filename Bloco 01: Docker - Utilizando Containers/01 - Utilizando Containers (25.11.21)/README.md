Extenção para o VSCode => **[Link](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)**

Documentação => **[Link](https://docs.docker.com/)**

Caso não esteja num distro baseada no Ubuntu => **[Link](https://docs.docker.com/engine/install/)**

## Para Remover o Docker.
```
sudo apt-get purge docker-ce docker-ce-cli containerd.io
```
**Para remover containers , volumes e configurações personalizadas que não são removidas automaticamente pelo apt-get:**
```
sudo rm -rf /var/lib/docker
```
```
sudo rm -rf /var/lib/containerd
```
