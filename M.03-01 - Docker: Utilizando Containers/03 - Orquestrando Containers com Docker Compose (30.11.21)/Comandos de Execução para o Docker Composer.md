
**Executar docker composer com nome padrão:** `docker-compose up`

**Executar docker composer com nome diferente do padrão:** `docker-compose -f arquivo.yaml`

**Executar um service especificado:** `docker-compose up <Nome_do_Service>`

**Para buildar uma nova imagem:** `docker-compose up --build <Nome_do_Service>`

**Parar e remover os container criados delo docker composer:** `docker-compose down`

**Listar container criados pelo docker compose:** `docker-compose ps`

**Para apenas parar e nao remover os containers criados pelo docker composer:** `docker-composer stop`

**Ativar containers pausados:** `docker-compose start`

**Para buildar uma nova imagem:** `docker-compose log -f --tai=100 <Nome_do_Service>`

