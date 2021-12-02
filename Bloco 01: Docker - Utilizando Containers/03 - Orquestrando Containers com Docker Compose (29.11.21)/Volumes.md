Utilizar um volume significa mapear uma pasta do nosso Sistema Hospedeiro (Docker Host), para o Sistema Convidado (o container).
Assim, ela é vinculada ao container e mesmo que esse container seja removido, essa pasta permanecerá. Isso faz com que os dados não sejam perdidos.

### Exemplo:

**Situação:** Queremos desenvolver nossa página HTML de forma que ela rode dentro do servidor http Apache, que não está instalado em nossa máquina.
