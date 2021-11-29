**Docker Network:** é uma espécie de rede virtualizada que permite que você conecte containers a uma determinada rede ou quantas redes Docker desejar, de forma que esses containers possam compartilhar informações através dessa rede.

Por padrão, o Docker possui 3 redes que são criadas junto com ele: `bridge`, `none` e `host`. Cada uma delas tem características específicas quanto a conectividade para seus containers. Podemos consultá-las executando:
```
docker network ls
```

**Bridge:** Todo container é associado a uma rede e, caso uma rede não seja especificada explicitamente por nós, ele será associado a rede Bridge.
