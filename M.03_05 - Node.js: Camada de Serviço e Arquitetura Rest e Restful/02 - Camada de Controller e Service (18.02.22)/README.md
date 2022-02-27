As camadas **Controller** e **Service** são responsáveis por:

 - Receber e tratas os dados da requisição;
 - Aplicar as regras de negócio da aplicação antes que qualquer comunicação com o banco seja realizada.

![esquema](./Esquema.png)

## A Camada dos Controllers:

É a primeira camada numa API. É nela onde os dados da requisição serão recebidos e tratados, para depois serem passados para as próximas camadas. O controller recebe as requisições e então consulta o service, enviando na resposta aquilo que o service retornar, que pode ser uma mensagem de erro, em caso de falha, ou as informações pedidas, em caso de sucesso.

Uma ótima analogia para o controller é que ele seria como um garçom em um restaurante. O garçom não sabe como preparar os pratos e nem como recepcionar as pessoas na porta. Ele apenas anota o pedido, sabe para que parte do restaurante levar o pedido e para qual mesa entregá-lo depois de pronto. Quando você monta seu software em uma camada só, é como se o garçom fizesse todas as funções dentro do seu restaurante (recepcionar, anotar os pedidos, preparar os pratos etc).

## A Camada dos Services:

Á medida que projetos vão crescendo, os modelos vão ficando cada vez maiores e mais complexos, pois vão acumulando cada vez mais regras de negócio. Por isso, é comum vermos uma nova camada sendo adicionada em projetos que exigem uma lógica de negócio um pouco mais complexa. Essa camada é a Camada dos Services. Ela fica situada entre as camadas de controller e model e é responsável pela nossa lógica de negócio. O modelo, então, passa a ser responsável somente pelo acesso a dados.

**Uma boa camada de serviço deve:**

 - Centralizar acesso a dados e funções externas;
 - Abstrair lógica de negócio complexa do seu modelo.

**Uma boa camada de serviço NÃO deve:**

 - Ter nenhum tipo de informação sobre o acesso a camada de dados. (não ter nenhuma query SQL);
 - Receber nada relacionado ao HTTP, seja o request ou o response. O controller deve mandar apenas o necessário para o service.