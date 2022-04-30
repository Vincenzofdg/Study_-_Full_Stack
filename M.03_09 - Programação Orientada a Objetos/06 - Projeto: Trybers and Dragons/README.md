### 1 - Crie a classe `Race`

No universo de Trybers and Dragons - T&D, quase todos os seres racionais têm uma raça e, embora todas as raças de personagens sejam humanoides, cada uma tem suas particularidades.
A raça influencia desde a aparência geral até fatores como longevidade média, talento em determinadas habilidades ou mesmo a presença de algum sentido mais aguçado nas pessoas que habitam este universo.
Para entender melhor um pouco da incrível diversidade que temos e as características únicas de algumas das raças de T&D, vamos começar nossa jornada com a missão de **criar a classe abstrata `Race`**.

Para que você tenha sucesso nesta *quest*, deve-se certificar que:

- O arquivo deve ser criado no diretório `src/Races/` e chamar `Race.ts`;
- A classe `Race` deve ter os atributos privados: `name` e `dexterity`, ambos inicializados em seu **construtor**;
  - O atributo `name` dever ser do tipo `string`;
  - O atributo `dexterity` dever ser do tipo `number`;
  - `name` e `dexterity` devem ser recebidos como parâmetro e inicializados no construtor;
- Os atributos da classe `Race` podem ser lidos mas não podem ser alterados:
  - `name` deve retornar o tipo `string`;
  - `dexterity` deve retornar o tipo `number`;
- A classe `Race` deve ter um **método estático** chamado `createdRacesInstances` que retorna um `number`;
  - Esse número é correspondente a quantidade de **instâncias criadas a partir das classes estendidas** da classe `Race`;
  - Cada raça vai ter seu número máximo de instâncias **e isto será feito dentro de suas classes especializadas**;
  - Na classe `Race` será lançada apenas a mensagem de erro: `Not implemented`;
- A classe `Race` deve ter um **getter abstrato** chamado `maxLifePoints` que retorna um `number`;
  - Esse número corresponde à quantidade máxima de pontos de vida da raça.
  - Cada raça vai ter seu número máximo de pontos **e isto será feito dentro de suas classes especializadas**;
  - Na classe `Race` **deve estar apenas a assinatura do método**;

<br>

> :warning: **Atenção**:
> - Para que os testes funcionem corretamente, a classe `Race` deve ser exportada de forma padrão (com `export default`).
> - Deve ser criado o arquivo chamado `index.ts` dentro do diretório `src/Races/`.
> - A classe `Race` deve ser importada dentro deste arquivo e exportada também de forma padrão, igual a estrutura contida no diretório `src/Battle/`.

<br>

<details close>
  <summary>O que será verificado:</summary>
  <br>

  > :dragon_face: Para a classe Race:
  - A classe `Race` existe;
  - A classe `Race` é abstrata;
  - O método `maxLifePoints` da classe `Race` é abstrato;
  - O método `maxLifePoints` ao ser implementado retorna um valor numérico;
  - O atributo `name` da classe `Race` pode ser lido;
  - O atributo `name` da classe `Race` *NÃO* pode ser alterado;
  - O atributo `dexterity` da classe `Race` pode ser lido;
  - O atributo `dexterity` da classe Race *NÃO* pode ser setado;
  - O método `createdRacesInstances` deve existir e ser estático;
  - O método `createdRacesInstances` deve levantar um erro "Not implemented";
</details>

---

### 2 - Crie classes que herdam de `Race`

Já foi dito anteriormente que há uma diversidade de raças neste universo e agora chegou a hora de você saber mais a respeito de algumas delas. Nesta segunda *quest*, você irá criar classes para quatro raças que existem no mundo de T&D.

Antes de prosseguir com a missão, é muito importante que você saiba que:

- Os arquivos devem ser criados no diretório `src/Races/`;
- Todas as raças devem estender da `classe abstrata Race`;
- As classes criadas devem ser: `Dwarf`, `Elf`, `Halfling` e `Orc` e devem estar em arquivos com exatamente estes nomes;
- Cada raça deve possuir um número máximo de pontos de vida (`maxLifePoints`) e este deve ser inicializado em seu **construtor**:
  - A raça `Dwarf` deve receber `80` pontos de vida;
  - A raça `Elf` deve receber `99` pontos de vida;
  - A raça `Halfling` deve receber `60` pontos de vida;
  - A raça `Orc` deve receber `74` pontos de vida;
- Não se esqueça de implementar o(s) método(s) necessário(s) após estender a `classe abstrata Race`;
- Não se esqueça de fazer a sobrescrita (`override`) do(s) método(s) necessário(s);

<br>

> :warning: **Atenção**:
> - Assim como no requisito anterior, cada uma das classes criadas (`Dwarf`, `Elf`, `Halfling` e `Orc`) para este requisito deve ser exportada de forma padrão ( com `export default`).
> - Novamente dentro de `src/Races/index.ts` as classes (`Dwarf`, `Elf`, `Halfling` e `Orc`) devem ser importadas, porém estas, agora devem ser exportadas de forma normal (`export { class1, class2, classN }`).

<br>

<details close>
  <summary>O que será verificado:</summary>
  <br>

  > :dragon_face: Para as classe que herdam de Race:
  - A classe `Dwarf` existe;
  - A classe `Dwarf` herda de `Race`;
  - O atributo `name` da classe `Dwarf` pode ser lido;
  - O atributo `dexterity` da classe `Dwarf` pode ser lido;
  - O método `createdRacesInstances` deve retornar o número correto de instâncias criadas da classe `Dwarf`;
  - O atributo `maxLifePoints` da classe `Dwarf` existe e é igual a 80;
  - A classe `Elf` existe;
  - A classe `Elf` herda de `Race`;
  - O atributo `name` da classe `Elf` pode ser lido;
  - O atributo `dexterity` da classe `Elf` pode ser lido;
  - O método `createdRacesInstances` deve retornar o número correto de instâncias criadas da classe `Elf`;
  - O atributo `maxLifePoints` da classe `Elf` existe e é igual a 99;
  - A classe `Halfling` existe;
  - A classe `Halfling` herda de `Race`;
  - O atributo `name` da classe `Halfling` pode ser lido;
  - O atributo `dexterity` da classe `Halfling` pode ser lido;
  - O método `createdRacesInstances` deve retornar o número correto de instâncias criadas da classe `Halfling`;
  - O atributo `maxLifePoints` da classe `Halfling` existe e é igual a 60;
  - A classe `Orc` existe;
  - A classe `Orc` herda de `Race`;
  - O atributo `name` da classe `Orc` pode ser lido;
  - O atributo `dexterity` da classe `Orc` pode ser lido;
  - O método `createdRacesInstances` deve retornar o número correto de instâncias criadas da classe `Orc`;
  - O atributo `maxLifePoints` da classe `Orc` existe e é igual a 74;
</details>

---

### 3 - Crie a interface `Energy`

Energia é um atributo vital para a maioria dos seres. No contexto de `Trybers and Dragons`, a energia gasta ao andar, nadar, escalar ou lutar é chamada de *"stamina"* .
Contudo, este universo também abriga seres capazes de usar magia. Nesses casos, a energia gasta ao utilizar magias é chamada de *"mana"*.

Sua próxima missão é tornar possível o uso dessas energias. Para isso:

- Crie uma `interface` chamada `Energy`;
- O arquivo `Energy.ts` deve ser criado na raiz do diretório `src/`;
- A interface deverá possuir os atributos:
  - `type_` é do tipo `EnergyType`; ✨✨
  - `amount` é do tipo `number`;

✨ Dica de mestre: ✨
- Para implementar a `interface Energy`, é necessário criar um tipo novo, o `type EnergyType`;
  - Esse novo tipo ~~pode~~ deve receber os valores: `'mana'` ou `'stamina'`;
  - O tipo `EnergyType` deve ser exportado também;

<br>

> :warning: **Atenção**:
> - Para que os testes funcionem corretamente, a interface `Energy` deve ser exportada de forma padrão ( com `export default`).
> - `EnergyType` também deve ser exportado, mas este de forma normal (`export`).

<br>

<details close>
  <summary>O que será verificado:</summary>
  <br>

  > :dragon_face: Para a interface Energy:
  - É possível criar uma variável com o tipo `EnergyType` e atribuir a ela o valor `'mana'`;
  - É possível criar uma variável com o tipo `EnergyType` e atribuir a ela o valor `'stamina'`;
  - É possível criar uma variável com o tipo da interface `Energy` e atribuir a ela o valor `{ amount: 10, type_: 'stamina'}`;
  - É possível criar uma variável com o tipo da interface `Energy` e atribuir a ela o valor `{ amount: 45, type_: 'mana'}`;
  - Não possível criar uma variável com o tipo `EnergyType` e atribuir a ela um valor diferente de `'mana'` ou `'stamina'`;
  - Não é possível criar uma variável com o tipo da interface `Energy` sem atribuir a ela um `amount`;
  - Não é possível criar uma variável com o tipo da interface `Energy` sem atribuir a ela um `type_`;
</details>

---

### 4 - Crie a classe `Archetype`

Dentro do nosso universo, os seres têm talentos especiais e cada um desses talentos tem seu nome dentro de T&D.
Aqui vamos ter alguns atributos super legais e necessários, que representarão o nome, a potência de seu ataque especial e o custo energético para utilizá-lo. Por isso, sua próxima *quest* será **criar a classe abstrata `Archetype`**.

Para que você tenha sucesso nesta *quest*, deve se certificar que:

- O arquivo deve ser criado no diretório `src/Archetypes/` e chamar `Archetype.ts`;
- A classe `Archetype` deve ter os atributos privados: `name`, `special`, `cost`, que serão inicializados em seu **construtor**;
  - O atributo `name` dever ser do tipo `string`;
  - O atributo `special` dever ser do tipo `number`;
  - O atributo `cost` dever ser do tipo `number`;
  - `name` deve ser recebido como parâmetro e inicializado no construtor;
  - `special` e `cost` devem ser apenas inicializados no construtor com o valor `0`;
- Os atributos da classe `Archetype` podem ser lidos mas não podem ser alterados:
  - `name` deve retornar o tipo `string`;
  - `special` deve retornar o tipo `number`;
  - `cost` deve retornar o tipo `number`;
- A classe `Archetype` deve ter um **método estático** chamado `createdArchetypeInstances` que retorna um `number`;
  - Esse número corresponde à quantidade de **instâncias criadas a partir das classes estendidas** da `classe abstrata Archetype`;
  - Cada arquétipo vai ter seu número máximo de instâncias **e isto será feito dentro de suas classes especializadas**;
  - Na `classe abstrata Archetype` será lançada apenas a mensagem de erro: `Not implemented`;
- A classe `Archetype` deve ter um **getter abstrato** chamado `energyType` que retorna uma `EnergyType`;
  - Esse tipo EnergyType é correspondente ao tipo de energia que este arquétipo deve ter. *(`mana` ou `stamina`)*
  - Cada arquétipo vai ter seu tipo de energia **e isto será feito dentro de suas classes especializadas**;
  - Na `classe abstrata Archetype` **deve conter apenas a assinatura do método**;

<br>

> :warning: **Atenção**:
> - Para que os testes funcionem corretamente, a classe `Archetype` deve ser exportada de forma padrão ( com `export default`).
> - Um arquivo `index.ts` deve ser criado dentro do diretório `src/Archetypes/`.
> - A classe `Archetype` deve ser importada dentro deste arquivo e exportada também de forma padrão, como feito com `Race`.

<br>


<details close>
  <summary>O que será verificado:</summary>
  <br>

  > :dragon_face: Para a classe Archetype:
  - A classe `Archetype` existe;
  - A classe `Archetype` é abstrata;
  - O atributo `name` da classe `Archetype` pode ser lido;
  - O atributo `name` da classe `Archetype` não pode ser alterado;
  - O atributo `special` da classe `Archetype` pode ser lido;
  - O atributo `cost` da classe `Archetype` pode ser lido;
  - O tipo do retorno do método `energyType` é `EnergyType`;
</details>

---

### 5 - Crie classes que herdam de `Archetype`

Como você pode imaginar, há diversos arquétipos diferentes no mundo de *Trybers and Dragons*, cada um com suas peculiaridades e alinhamentos.
Agora, chegou a hora de você conhecer alguns deles e o que poderia ser melhor para isso do que criar classes para eles? Mas antes, tenha atenção às seguintes instruções:

- Os arquivos devem ser criados no diretório `src/Archetypes/`;
- Todos os arquétipos devem estender da `classe abstrata Archetype`;
- No momento, vamos nos ater a quatro arquétipos muito comuns nos seres deste universo: (eles devem estar em quatro arquivos com os mesmos nomes)
  - `Mage` 🧙‍♀️;
  - `Necromancer` ☠️; 
  - `Warrior` ⚔️;
  - `Ranger` 🍃;
- Cada arquétipo possui a habilidade de causar danos em seus inimigos de forma diferente e esta deve ser inicializada em seu **construtor**
  - Os arquétipos `Mage`🧙‍♀️ e `Necromancer`☠️ causam dano por meio de magia, através do uso de `mana`;
  - Os arquétipos `Warrior` ⚔️ e `Ranger` 🍃 causam dano por meio de sua força, usando `stamina`;
- Não se esqueça de implementar o(s) método(s) necessário(s) após estender a `classe abstrata Archetype`;
- Não se esqueça de fazer a sobrescrita (`override`) do(s) método(s) necessário(s);

<br>

> :warning: **Atenção**:
> - Assim como no requisito anterior, cada uma das classes criadas (`Mage`, `Necromancer`, `Warrior` e `Ranger`) para este requisito deve ser exportada de forma padrão ( com `export default`).
> - Novamente, dentro de `src/Archetypes/index.ts` as classes (`Mage`, `Necromancer`, `Warrior` e `Ranger`) devem ser importadas, porém estas, agora devem ser exportadas de forma normal (`export { class1, class2, classN }`).

<br>

<details close>
  <summary>O que será verificado:</summary>
  <br>

  > :dragon_face: Para as classes que herdam de Archetype:
  - A classe `Mage` existe;
  - A classe `Mage` herda de `Archetype`;
  - O atributo `name` da classe `Mage` pode ser lido;
  - O método `energyType` da Classe `Mage` existe e retorna um `EnergyType`;
  - O método `createdArchetypeInstances` deve retornar o número correto de instâncias criadas da classe `Mage`;
  - A classe `Necromancer` existe;
  - A classe `Necromancer` herda de `Archetype`;
  - O atributo `name` da classe `Necromancer` pode ser lido;
  - O atributo `energyType` da classe `Necromancer` pode ser lido;
  - O método `createdArchetypeInstances` deve retornar o número correto de instâncias criadas da classe `Necromancer`;
  - A classe `Ranger` existe;
  - A classe `Ranger` herda de `Archetype`;
  - O atributo `name` da classe `Ranger` pode ser lido;
  - O atributo `energyType` da classe `Ranger` pode ser lido;
  - O método `createdArchetypeInstances` deve retornar o número correto de instâncias criadas da classe `Ranger`;
  - A classe `Warrior` existe;
  - A classe `Warrior` herda de `Archetype`;
  - O atributo `name` da classe `Warrior` pode ser lido;
  - O atributo `energyType` da classe `Warrior` pode ser lido;
  - O método `createdArchetypeInstances` deve retornar o número correto de instâncias criadas da classe `Warrior`;
</details>

---

### 6 - Crie a interface `Fighter`

Um universo tão rico e cheio de diferentes seres, com diferentes alinhamentos, convicções e personalidades pode não ser um lugar sempre amigável. Por isso, seus habitantes têm que ser capazes de se defender ou de inventar artimanhas para se livrarem de brigas, confusões e armadilhas. Sendo assim, podemos dizer que todos os seres de T&D são, em essência, lutadores.

Para fixar bem esse conceito, preparamos para você a missão especial de criar a interface `Fighter`, mas não se preocupe! Não deixaremos você dar mais nem um passo sem as informações necessárias para tirar isso de letra! Observe:

- Crie uma `interface` chamada `Fighter`;
- O arquivo `Fighter.ts` deve ser criado no diretório `src/Fighter/`;
- A interface deverá possuir os atributos:
  - `lifePoints` é do tipo `number`;
  - `strength` é do tipo `number`;
  - `defense` é do tipo `number`;
  - `energy` é do tipo `Energy`; ✨✨
- A interface deverá possuir os métodos:
  - `attack()` que recebe um `enemy` do tipo `Fighter` como parâmetro e não possui retorno (`void`);
  - `special()` que recebe um `enemy` do tipo `Fighter` como parâmetro e não possui retorno (`void`);
  - `levelUp()` que não recebe parâmetro e não possui retorno (`void`);
  - `receiveDamage()` que recebe um `attackPoints` do tipo `number` como parâmetro e não possui retorno (`void`);

✨ Dica de mestre: ✨
- Para declarar o atributo `energy`, este deve ser opcional;
  - Pesquise sobre: `Optional Properties` ou `Optional parameters` em interfaces;
- Agora você pode descomentar os trechos de código dos arquivos do diretório `Battle`; (`Battle.ts` e `index.ts`)

<br>

> :warning: **Atenção**:
> - Para que os testes funcionem corretamente, a interface `Fighter` deve ser exportada de forma padrão (com `export default`).
> - Um arquivo chamado `index.ts` deve ser criado dentro do diretório `src/Fighter/`.
> - A interface `Fighter` deve ser importada dentro deste arquivo e exportada também de forma padrão, como feito em requisitos anteriores.

<br>

<details close>
  <summary>O que será verificado:</summary>
  <br>

  > :dragon_face: Para a interface Fighter:
  - A interface `Fighter` existe;
  - A interface `Fighter` pode ser implementada corretamente;
  - A interface `Fighter` possui o atributo `lifePoints`;
  - A interface `Fighter` possui o atributo `strength`;
  - A interface `Fighter` possui o atributo `defense`;
  - A interface `Fighter` possui o método `attack()`, que recebe um `enemy` do tipo `Fighter`;
  - A interface `Fighter` possui o método `special()`, que recebe um `enemy` do tipo `Fighter`
  - A interface `Fighter` possui o método `receiveDamage()`, que recebe um `attackPoints` do tipo number;
  - O atributo `energy` deverá ser do tipo `Energy`, definido no arquivo `src/Energy.ts`;
  - A interface `Fighter` possui o método `levelUp()`, que não recebe parâmetros nem retorna nada;
</details>

---

### 7 - Crie a classe `Character`

Maravilha! Agora já temos tanto nossas raças quanto nossos arquétipos e interfaces definidos, mas antes de sair por aí entrando em tavernas e calabouços, temos outra *quest*: **criar um personagem**!

Cada personagem será composto tanto por uma raça quanto por um arquétipo. Essa classe reunirá um conjunto de características que terão o poder de fazer deste ser o mais único possível. Além disso, personagens devem possuir tudo o que se espera de alguém que luta.

As dicas para completar essa *quest* são: 

- O arquivo deve ser criado na raiz do diretório `src/` e se chamar `Character.ts`;
- A classe implementa a interface `Fighter`;
- A classe `Character` deve ter os atributos privados: `race`, `archetype`, `maxLifePoints`, `lifePoints`, `strength`, `defense`, `dexterity` e `energy`, todos inicializados em seu **construtor**;
  - O atributo `race` deve ser do tipo `Race`;
  - O atributo `archetype` deve ser do tipo `Archetype`;
  - O atributo `maxLifePoints` deve ser do tipo `number`;
  - O atributo `lifePoints` deve ser do tipo `number`;
  - O atributo `strength` deve ser do tipo `number`;
  - O atributo `defense` deve ser do tipo `number`;
  - O atributo `dexterity` deve ser do tipo `number`;
  - O atributo `energy` deve ser do tipo `Energy`;
  - Deve-se receber um parâmetro `name` no construtor, este será usado para dar nome ao seu personagem;
  - Devem ser inicializados no construtor:
    - `race` por padrão com uma instância de `Elf` - inicializada com o `name` recebido e o valor 10 para `dexterity`;
    - `archetype` por padrão com uma instância de `Mage`;
    - `maxLifePoints` por padrão com metade do `maxLifePoints` da raça instanciada;
    - `lifePoints` por padrão com o mesmo valor de `maxLifePoints` da classe;
    - `strength`, `defense` com valores aleatórios de no mínimo 1 e no máximo 10 pontos; ✨✨
    - `dexterity` por padrão com a mesma destreza da raça instanciada;
    - `energy` por padrão:
      - `type_` com o mesmo valor do arquétipo instanciado;
      - `amount` com um valor aleatório de no mínimo 1 e no máximo 10 pontos; ✨✨
- Os atributos da classe `Character` podem ser lidos mas não podem ser alterados:
  - `race` deve retornar o tipo `Race`
  - `archetype` deve retornar o tipo `Archetype`
  - `lifePoints` deve retornar o tipo `number`;
  - `strength` deve retornar o tipo `number`;
  - `defense` deve retornar o tipo `number`;
  - `dexterity` deve retornar o tipo `number`;
  - `energy` deve retornar o tipo `Energy`;
- A classe `Character` também deve implementar os métodos estendidos da `interface Fighter`;
  - **`receiveDamage 😵`** este método recebe por parâmetro um valor (`attackPoints`) e as regras são:
    - Este valor deve ser decrescido de sua defesa (`defense`), assim causando um dano (`damage`);
    - Se o dano for maior que `0`, você perde pontos de vida (`lifePoints`);
    - Ao receber o ataque e perder pontos de vida (`lifePoints`), e se sua vida chegar a `0` ou menos, você deve fixá-la com o valor `-1`;
    - Ao final sempre retorne o valor atualizado de seus pontos de vida;
  - **`attack 🪄`** este método recebe por parâmetro uma pessoa inimiga (`enemy`) e as regras são:
    - Toda vez que acontecer um ataque, o inimigo recebido por parâmetro recebe um dano;
    - Este dano deve ser equivalente a força (`strength`) de quem ataca;
  - **`levelUp 🆙`** este método não recebe parâmetro e as regras são:
    - Sempre que este método for chamado os atributos `maxLifePoints`, `strength`, `dexterity` e `defense` terão um incremento de no mínimo 1 e no máximo 10 pontos; ✨✨
    - Assim como os atributos anteriores o montante de energia (`amount` dentro de `energy`) deve ser alterado também, ele deve ficar cheio, valendo exatamente `10`;
    - O atributo `maxLifePoints` do Character **nunca poderá ser maior** que o `maxLifePoints` de sua raça (`race`). Se, ao incrementar o valor de `maxLifePoints` do Character esse valor ficar maior do que o `maxLifePoints` da raça, ele deve receber o valor igual ao do da raça. Exemplo: se o `maxLifePoints`da raça é 100, e o do Character é 95, e ao fazer o levelUp ele ficaria 8 pontos maior, isso daria 103, que é maior do que o da raça, portanto você deveria deixar em 100.
    - Ao final, o atributo `lifePoints` também deve ser atualizado, recebendo o novo valor de `maxLifePoints` (de acordo com as regras anteriores);
  - **`special ⚡`** este método não recebe parâmetro e as regras é você quem decide:
    - Aqui você pode expandir sua mente e realizar a lógica que achar mais interessante para um ataque especial, use tudo que aprendeu no mundo de T&D! :dragon_face:
    - Esta parte do requisito não esta sendo avalida é apenas para você se divertir aprendendo. 💚

✨ Dica de mestre: ✨
- Para gerar valores aleatórios:
  - Utilize a função `getRandomInt` para gerar um dinamismo; (fornecida no arquivo `src/utils.ts`)

<br>

> :warning: **Atenção**:
> - Para que os testes funcionem corretamente, a classe `Character` deve ser exportada de forma padrão ( com `export default`).

<br>

<details close>
  <summary>O que será verificado:</summary>
  <br>

  > :dragon_face: Para a classe Character:
  - A classe `Character` existe;
  - A classe `Character` implementa a interface `Fighter`;
  - `Character` possui uma `Race`;
  - `Character` possui um `Archetype`;
  - `Character` possui um atributo `lifePoints`, que pode ser lido, mas não pode ser setado;
  - `Character` possui um atributo `strength`, que pode ser lido, mas não pode ser setado;
  - `Character` possui um atributo `defense`, que pode ser lido, mas não pode ser setado;
  - `Character` possui um atributo `energy`, que pode ser lido, mas não pode ser setado nem ter um de seus valores internos alterados;
  - `Character` possui um atributo `dexterity`, que pode ser lido, mas não pode ser setado;
  - `Character` pode subir de nível através do método `levelUp`, e seus atributos (`amount`, `maxLifePoints`, `strength`, `dexterity`, `defense`) terão um incremento;
  - `Character` pode receber danos através do método `receiveDamage`;
  - `Character1` pode atacar `Character2`;
</details>

---

### 8 - Crie a interface `SimpleFighter`

Uau, nosso universo de T&D está ficando fabuloso! No entanto, nem todo mundo que luta é possui capacidades avançadas, como ter uma defesa ou realizar ataques especiais. Dito isto, vamos para mais uma *quest*, **criar a interface lutador simples**

As dicas para completar essa *quest* são:

- Crie uma `interface` chamada `SimpleFighter`;
- O arquivo `SimpleFighter.ts` deve ser criado no diretório `src/Fighter/`;
- A interface deverá possuir os atributos:
  - `lifePoints` é do tipo `number`;
  - `strength` é do tipo `number`;
- A interface deverá possuir os métodos:
  - `attack()` que recebe um `enemy` do tipo `SimpleFighter` como parâmetro e não possui retorno (`void`);
  - `receiveDamage()` que recebe um `attackPoints` do tipo `number` como parâmetro e não possui retorno (`void`);
- Aqui é um bom momento para treinarmos algumas skills deste bloco e aplicar uma refatoração. Utilize a segregação de interfaces, volte e observe nossa `interface Fighter`;

<br>

> :warning: **Atenção**:
> - Para que os testes funcionem corretamente, a interface `SimpleFighter` deve ser exportada de forma padrão (com `export default`).
> - Novamente dentro de `src/Fighter/index.ts` a interface (`SimpleFighter`) deve ser importada, porém esta, agora deve ser exportada de forma normal (`export { SimpleFighter }`), como feito em requisitos anteriores.

<br>

<details close>
  <summary>O que será verificado:</summary>
  <br>

  > :dragon_face: Para a interface SimpleFighter:
  - A interface `SimpleFighter` existe;
  - A interface `SimpleFighter` possui o atributo `lifePoints`;
  - A interface `SimpleFighter` possui o atributo `strength`;
  - A interface `SimpleFighter` possui o método `attack`, que recebe um `enemy` do tipo `SimpleFighter`;
  - A interface `SimpleFighter` possui o método `receiveDamage`, que recebe um `attackPoints` do tipo `number`;
</details>

---

### 9 - Crie a classe `Monster`

Se existem seres que implementam a `interface Fighter`, deve existir seres que implementam a `interface SimpleFighter` também, não é ? Estes são os `Monsters`, criaturas bestiais que apenas atacam outros seres. Então sua próxima *quest* é **criar a classe Monster**!

O que você deve saber para seguir em frente:

- O arquivo deve ser criado na raiz do diretório `src/` e chamar `Monster.ts`;
- A classe implementa a interface `SimpleFighter`;
- A classe `Monster` deve ter os atributos privados: `lifePoints` e `strength`, ambos inicializados em seu **construtor**;
  - Os atributos `lifePoints` e `strength` devem ser do tipo `number`;
  - Devem ser inicializados no construtor:
    - `lifePoints` por padrão com o valor de `85`;
    - `strength` por padrão com o valor de `63`;
- Os atributos da classe `Monster` podem ser lidos mas não podem ser alterados:
  - `lifePoints` e `strength` devem retornar o tipo `number`;
- A classe `Monster` também deve implementar os métodos estendidos da `interface SimpleFighter`;
  - **`receiveDamage 😵`** este método recebe por parâmetro um valor (`attackPoints`) e as regras são:
    - Este valor deve ser decrescido de seus pontos de vida (`lifePoints`), assim causando um dano (`damage`);
    - Se o dano for maior que `0`, você perde pontos de vida (`lifePoints`);
    - Ao receber o ataque e perder pontos de vida, sua vida nunca poderá chegar a `0`, se isto acontecer seus `lifePoints` deve valer `-1`;
    - Ao final sempre retorne o valor atualizado de seus pontos de vida;
  - **`attack 🪄`** este método recebe por parâmetro uma pessoa inimiga (`enemy`) e as regras são:
    - Toda vez que acontecer um ataque, o inimigo recebido por parâmetro recebe um dano;
    - Este dano deve ser equivalente a força (`strength`) de quem ataca;

<br>

> :warning: **Atenção**:
> - Para que os testes funcionem corretamente, a classe `Monster` deve ser exportada de forma padrão ( com `export default`).

<br>

<details close>
  <summary>O que será verificado:</summary>
  <br>

  > :dragon_face: Para a classe Monster:
  - A classe `Monster` existe;
  - A classe `Monster` implementa a interface `SimpleFighter`;
  - `Monster` possui um atributo `lifePoints`, que pode ser lido, mas não pode ser setado;
  - `Monster` possui um atributo `strength`, que pode ser lido, mas não pode ser setado;
  - `Monster` pode receber danos através do método `receiveDamage`, fazendo com que seus `lifePoints` diminuam;
  - `Monster` pode atacar um `Character`, e o `Character` receberá dano;
  - `Character` pode atacar um `Monster`, e o `Monster` receberá de dano;
</details>

---

### 10 - Crie a classe `PVP`

A ideia do mundo de T&D ser completamente pacífico provavelmente já deve ter desaparecido de sua mente depois de suas últimas *quests*. 
Neste mundo, existem lutas, muitas delas inclusive épicas e aqui são denominadas `Battles` (batalhas). Sua representação abstrata já foi fornecida anteriormente, entretanto, existem tipos específicos de batalhas. Uma destas batalhas chamamos de `PVP`, batalhas entre personagens (ou *player versus player*), que só podem acontecer entre personagens lutadores (`Fighters`). 🧙‍♀️ ⚔️ 🧙‍♂️

Sua *quest* agora é justamente **criar a classe PVP**, então, você que lute ! 🗡️😂
Brincadeira! Estamos aqui para te ajudar e por isso, aqui vão algumas dicas preciosas para garantir sua vitória neste requisito:

- O arquivo deve ser criado no diretório `src/Battle/` e se chamar `PVP.ts`;
- A classe `PVP` deve herdar de `Battle`;
- A classe `Battle` já esta criada, dê uma espiada nela; 🧐
- Na criação de uma instância de `PVP` é esperado que em seu construtor sejam recebidos dois `Characters` lutadores, ambos inicializados lá;
- Não se esqueça de fazer a sobrescrita (`override`) do(s) método(s) necessário(s); ✨✨

✨ Dica de mestre: ✨
- Aqui ~~podemos~~ devemos sobrescrever o método `fight`;
  - No método `fight` sobrescrito, implemente uma lógica de ataque entre personagens lutadores da classe;
- Se necessário, refatore o que já foi feito com as interfaces `Fighter` e `SimpleFighter` para se adequarem melhor à sua nova implementação de batalha;
- Não esqueça de descomentar os trechos de código dos arquivos do diretório `Battle` como citado nas "Dica de mestre" do requisito 6 - Crie a interface `Fighter`;

<br>

> :warning: **Atenção**:
> - Para que os testes funcionem corretamente, a classe `PVP` deve ser exportada de forma padrão (com `export default`).
> - Novamente, dentro de `src/Battle/index.ts`, a classe (`PVP`) deve ser importada, porém esta deve ser exportada de forma normal (`export { PVP }`), como feito em requisitos anteriores.

<br>

<details close>
  <summary>O que será verificado:</summary>
  <br>

  > :dragon_face: Para a classe PVP:
  - A classe `PVP` existe e pode ser criada uma nova instância, passando dois `Characters` lutadores;
  - A classe `PVP` pode ser utilizada onde a classe `Battle` é esperada e um personagem que chamou várias vezes o levelUp e possui melhores atributos tem maiores chances de vencer;
  - A classe `PVP` pode receber tanto dois `Characters` quanto duas instâncias de uma implementação diferente de `Fighter`;
</details>

---

## Requisitos Bônus

### 11 - Criar a classe `PVE`

Nem todas as batalhas são entre personagens lutadores (`Character`), afinal, há perigos a solta que espreitam ao escurecer, em densas florestas ou em calabouços profundos.

Monstros representam alguns destes perigos, assim, temos as batalhas do tipo `PVE`(*player versus environment*), em que personagens (sempre do tipo `Fighter`) podem lutar contra um ou mais monstros assustadores (`SimpleFighter`). Parece interessante não é ? Tornar isso possível é a sua próxima *quest*! 🧙‍♀️ ⚔️ 👾👹👻

Antes de prosseguir para essa nova batalha, leia atentamente as dicas !!! Só assim obteremos sucesso e prosperidade:

- O arquivo deve ser criado no diretório `src/Battle/` e se chamar `PVE.ts`;
- A classe `PVE` deve herdar de `Battle`;
- Lembre-se a classe `Battle` já esta criada;
- Na criação de uma instância de `PVE.ts` é esperado que em seu construtor seja recebido uma pessoa personagem lutadora (`Character Fighter`) e um *array* com pelo menos um monstro (`Monster`), ambos inicializados no **construtor**;
  - Como estamos falando de uma batalha *player versus environment*, este *array* de monstros também aceita instâncias de pessoas personagens lutadoras sendo elas simples ou não; (`Fighter`, `SimpleFighter`)
- Não se esqueça de fazer a sobrescrita (`override`) do(s) método(s) necessário(s);
  - Como na "Dica de mestre" do requisito anterior (`PVP`), não esqueça de implementar uma lógica de luta para este requisito também. Lembre-se que aqui, a luta é de uma pessoa personagem lutadora contra apenas um oponete ou uma legião deles !!!

<br>

> :warning: **Atenção**:
> - Para que os testes funcionem corretamente, a classe `PVE` deve ser exportada de forma padrão (com `export default`).
> - Novamente dentro de `src/Battle/index.ts` a classe (`PVE`) deve ser importada, porém desta vez de forma normal (`export { PVP }`), como feito em requisitos anteriores.

<br>

<details close>
  <summary>O que será verificado:</summary>
  <br>

  > :dragon_face: Para a classe PVE:
  - A classe `PVE` existe e se pode ser criada uma nova instância, passando um `Character` e um array com um `Monster`;
  - A classe `PVE` pode ser utilizada onde a classe `Battle` é esperada. Além disso, um personagem (`Character`) que chamou várias vezes o método `levelUp` e possui melhores atributos tem maiores chances de vencer uma luta contra somente um `Monster`, enquanto um personagem com atributos menores perde uma luta contra diversos `Monsters`;
  - A classe `PVE` pode receber tanto `Character` e um array com um `Monster` quanto implementações diferentes de `Fighter` e `SimpleFighter` que não são `Character` nem `Monster`;
</details>

---

### 12 - Crie a classe `Dragon`

Seria muito estranho se este mundo se chamasse Trybers and Dragons e não existissem `Dragons`, não é mesmo?
Estes seres magníficos aqui são representados como monstros, mas com a característica especial de possuírem elevados valores de pontos de vida.

Nesta *quest*, você deve **criar a classe `Dragon`**, cuidando para garantir que:

- O arquivo deve ser criado na raiz de `src/` e se chamar `Dragon.ts`;
- A classe `Dragon` deve herdar de `Monster`;
- Como citado acima, um Dragão tem elevados valores de pontos de vida, então em seu construtor defina o valor de `_lifePoints` para algo como 999; :dragon_face::dragon_face:

:dragon_face: Dica de mestre: :dragon_face:
- Aqui é interessante voltar no conteúdo do course sobre **Herança e Interfaces** e relembrar um pouco de **Atributos protegidos**;

<br>

> :warning: **Atenção**:
> - Para que os testes funcionem corretamente, a classe `Dragon` deve ser exportada de forma padrão ( com `export default`).

<br>

<details close>
  <summary>O que será verificado:</summary>
  <br>

  > :dragon_face: Para a classe Dragon:
  - A classe `Dragon` existe;
  - A classe `Dragon` herda de `Monster`;
  - `Dragon` deve ter 999 no valor do atributo `lifePoints`;
</details>

---

### 13 - Crie objetos no arquivo `index`

Você já modelou todo o mundo de T&D, maravilha!

Agora repare que, por mais que a gente saiba o que são `Monster`, `Character`, `Dragon`, `PVE`, etc, nenhum desses foi visto em ação. Então sua última *quest* para completar essa aventura é dar vida ao seus personagens e criar algumas instâncias das classes criadas anteriormente. 🪄

Algumas dicas se fazem necessárias para completar sua última missão no mundo de T&D. Elas são:

- O arquivo deve ser criado na raiz de `src/` e se chamar `index.ts`;
- :warning: Preste bastante atenção nos nomes das variáves/métodos e nas exportações pedidadas deste último requisito; :wink:
- Crie `3` objetos do tipo `Character`:
  - As variáveis devem-se chamar `player1`, `player2` e `player3`;
  - Execute algumas vezes o método `levelUp` do `player1`;
  - Ao final do arquivo `index.ts` exporte `player1`, `player2` e `player3`;
- Crie `2` objetos do tipo `Monster`:
  - As variáveis devem se chamar `monster1` e `monster2`;
  - `monster1` deve ser um `Monster` e `monster2` deve ser um `Dragon`;
  - Ao final do arquivo `index.ts` exporte `monster1` e `monster2`;
- Crie um objeto do tipo `PVP`:
  - A variável deve se chamar `pvp`;
  - Como parâmetro do construtor passe `player2` e `player3`;
  - Ao final do arquivo `index.ts` exporte `pvp`;
  - **NÃO execute o método `pvp.fight`**;
- Crie um objeto do tipo `PVE`:
  - A variável deve se chamar `pve`;
  - Como parâmetro do construtor passe `player1` e um array contendo `monster1` e `monster2`;
  - Ao final do arquivo `index.ts` exporte `pve`;
  - **NÃO execute o método `pve.fight`**;
- Crie uma função chamada `runBattles`:
  - A função recebe por parâmetro um *array* de batalhas (`battles`) e este *array* é do tipo `Battle`; ✨✨
  - Dentro da função, crie uma repetição percorrendo este array e chame o método `fight`;
  - Ao final do arquivo `index.ts` exporte `runBattles`;

✨ Última dica de mestre: ✨
- Lembre-se `Battle` não pode ser instanciada, pois é uma classe abstrata;

<br>

> :warning: **Atenção**:
> - Para que os testes funcionem corretamente, os objetos/métodos criados em `src/index.ts` devem ser exportados como explicado no requsito;

<br>

<details close>
  <summary>O que será verificado:</summary>
  <br>

  > :dragon_face: Para a criação de objetos no arquivo index:
  - Existem 3 objetos do tipo `Character` no arquivo `index`, exportados como `player1`, `player2` e `player3` e o método `levelUp` foi chamado algumas vezes em `player1`
  - Existem 2 objetos do tipo `Monster` no arquivo `index`, exportados como `monster1`, `monster2`, sendo que o objeto `monster2` é um `Dragon`;
  - Existe um objeto do tipo `PVP` (com os `Characters` `player2` e `player3`), exportados no arquivo index como `pvp` e nele *NÃO* foi executado o método `pvp.fight`;
  - Existe um objeto do tipo `PVE` (com o `Character` `player1` e com os `Monsters` `monster1` e `monster2`), exportado no arquivo `index` como `pve` e nele *NÃO* foi executado o método `pve.fight`;
  - Existe uma função chamada `runBattles`, que recebe um `array de Battles` e chama em seu interior o método `battle.fight`;
</details>
