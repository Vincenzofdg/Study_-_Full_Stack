### Gerenciando meus Apps
- **Listar os serviços que você tem em execução:** `heroku apps`
- **Ver detalhes de de uma aplicação:** `heroku apps:info nome_do_app`
<hr />
### Variáveis de Ambiente
- **Setando:** `heroku config:set TESTE="Um texto" --app nome-do-app-12345`
- **Listar as variáveis de ambiente:** `heroku config --app nome-do-app-12345`
<hr />
### Logs
- **Monitorar os logs:** `heroku logs --app nome-do-app-12345`
	- Por padrão, o comando retorna as últimas 100 linhas de logs
- **Listar `n` linhas de logs:** `heroku logs -n --app nome-do-app-12345`
	- `-n` ou `--num`
- **Listar ultimos logs:** `heroku logs -t --app nome-do-app-12345`
- `-t` ou `--tail`
<hr />

### Removendo um App
```
heroku destroy --app nome-do-app-29302 --confirm nome-do-app-29302
```