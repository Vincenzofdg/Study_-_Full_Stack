### Store

A store é onde o estado da sua aplicação fica registrado e protegido. As mudanças ou consultas feitas na store precisam estar definidas anteriormente numa action. Isso garante a integridade dos dados, como explicado anteriormente.


### Actions

As actions, como o nome indica, são as possíveis ações que seu sistema pode executar na store. Elas atuam como uma regra de negócio para manter os dados dos estados da aplicação e as suas mudanças previsíveis e consistentes. É bem comum ouvirmos que as actions são intenções (grave esse termo) de mudança de estado (para usar um termo mais técnico).


### Reducers

Os reducers são responsáveis por manipular a store seguindo as regras definidas pelas actions. Os reducers são importantes para evitar a manipulação direta da store e facilitam a manutenção do código.


### .dispatch:

É uma função que envia uma ação(Action) para processamento.


### .getState:

É uma função que recupera o estado armazenado no store.
