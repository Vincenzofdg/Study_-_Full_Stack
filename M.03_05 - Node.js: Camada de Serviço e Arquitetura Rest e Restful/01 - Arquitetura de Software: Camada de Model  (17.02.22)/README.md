## Model

O model é onde nós manipulamos e definimos a estrutura dos nossos dados. Todo acesso aos dados deve passar por essa camada.

O model é responsável por abstrair completamente os detalhes de acesso e armazenamento, fornecendo somente uma API que permita requisitar e manipular esses dados. Por exemplo, é responsabilidade da camada de models estabelecer uma conexão com o banco de dados.

Outro benefício é uma maior reusabilidade de código. Por exemplo, com uma camada de modelo bem definida, nós poderíamos criar uma versão CLI da nossa aplicação somente utilizando a API que ela define, sem nenhuma duplicação de código.