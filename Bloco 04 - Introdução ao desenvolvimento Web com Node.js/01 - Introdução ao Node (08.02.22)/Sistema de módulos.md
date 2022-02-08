Um módulo é uma funcionalidade ou um conjunto delas que se encontram isoladas do restante do código.

O Node.js possui três tipos de módulos: internos, locais e de terceiros.

## Módulos Internos (Core Modules)

São inclusos no Node.js e instalados junto com ele quando baixamos o runtime. Alguns exemplos de core modules são:

- **fs:** Fornece uma API para interagir com o sistema de arquivos de forma geral;
- **url:** Provê utilitários para ler e manipular URLs;
- **querystring:** Disponibiliza ferramentas para leitura e manipulação de parâmetros de URLs;
- **util:** Oferece ferramentas e funcionalidades comumente úteis a pessoas programadoras.

## Módulos Locais

São aqueles definidos juntamente à nossa aplicação.
Podendo ser publicados no NPM para que outras pessoas possam baixá-los e utilizá-los, o que nos leva ao nosso próximo e último tipo de módulo.

## Módulos de Terceiros

São aqueles criados por outras pessoas e disponibilizados para uso através do npm.