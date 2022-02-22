## Arquitetura MSC
Ao longo desse bloco iremos abordar a arquitetura MSC. Vamos entrar em detalhes ao longo dos conteúdos de cada dia, mas, fazendo um resumo, podemos definir as três camadas das seguinte forma:

 - **Camada de Modelo (M):** Arquivos onde iremos executar as operações do banco de dados, como criar conexões e executar queries.
 - **Camada de Serviço (S):** Arquivos onde iremos estruturar nossas regras de negócio, geralmente é quem chama os métodos definidos na camada de modelo.
 - **Camada de Controladores (C):** Interface mais próxima da pessoa usuária ou de uma requisição, vai processar e chamar as devidas funções da camada de serviço.
 
![msc](./msc.png)
