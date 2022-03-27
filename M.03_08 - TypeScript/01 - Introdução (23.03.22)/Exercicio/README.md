### Preparação para o Exercício:
- Crie uma pasta e entre nela `mkdir nome_pasta && cd nome_pasta`;
- Inicie o npm `npm init -y`;
- Instale os pacotes:
  - `npm install -D @tsconfig/node14 @types/node typescript`
  - `touch tsconfig.json`

```js
{
  "extends": "@tsconfig/node14/tsconfig.json", // estendemos a configuração base para o Node 14
  "compilerOptions": {
    "outDir": "./dist", // pasta onde nossos arquivos compilados serão salvos
  },
}
```

## Exercicio 01
Crie um script para converter unidades de medida de comprimento:

- Esse script deverá se chamar length.ts;
- Esse script deverá possuir uma função chamada convert que recebe como parâmetro:
  - valor: number
  - unidade base: string
  - unidade para conversão: string

### Tabela de Conversão:
| Nome                     | Símbolo | Valor   |
|:------------------------:|:-------:|:-------:|
| Quilômetro               | km      | 1000m   |
| Hectômetro               | hm      | 100m    |
| Decâmetro                | dam     | 10m     |
| Metro                    | m       | 1m      |
| Decímetro                | dm      | 0,1m    |
| Centímetro               | cm      | 0,01m   |
| Milímetro                | mm      | 0,001m  |

## Exercicio 02
Crie um script para converter unidades de medida de massa:

- Esse script deverá se chamar mass.ts;
- Esse script deverá possuir uma função chamada convert que recebe como parâmetro:
  - valor: number
  - unidade base: string
  - unidade para conversão: string

### Tabela de Conversão:
| Nome                     | Símbolo | Valor   |
|:------------------------:|:-------:|:-------:|
| Quilograma               | kg      | 1000g   |
| Hectograma               | hg      | 100g    |
| Decagrama                | dag     | 10g     |
| Grama                    | g       | 1g      |
| Decigrama                | dg      | 0,1g    |
| Centigrama               | cg      | 0,01g   |
| Miligrama                | mg      | 0,001g  |

## Exercicio 03
Crie um script para converter unidades de medida de capacidade:

- Esse script deverá se chamar capacity.ts;
- Esse script deverá possuir uma função chamada convert que recebe como parâmetro:
  - valor: number
  - unidade base: string
  - unidade para conversão: string

### Tabela de Conversão:
| Nome                     | Símbolo | Valor   |
|:------------------------:|:-------:|:-------:|
| Quilolitro               | kl      | 1000l   |
| Hectolitro               | hl      | 100l    |
| Decalitro                | dal     | 10l     |
| Litro                    | l       | 1l      |
| Decilitro                | dl      | 0,1l    |
| Centilitro               | cl      | 0,01l   |
| Mililitro                | ml      | 0,001l  |

## Exercicio 04
Crie um script para converter unidades de medida de área:

- Esse script deverá se chamar area.ts;
- Esse script deverá possuir uma função chamada convert que recebe como parâmetro:
  - valor: number
  - unidade base: string
  - unidade para conversão: string

### Tabela de Conversão:
| Nome                     | Símbolo | Valor   |
|:------------------------:|:-------:|:-------:|
| Quilômetro quadrado      | km²     | 10⁶ m²  |
| Hectômetro quadrado      | hm²     | 10⁴ m²  |
| Decâmetro quadrado       | dam²    | 10² m²  |
| Metro quadrado           | m²      | 1m²     |
| Decímetro quadrado       | dm²     | 10⁻² m² |
| Centímetro quadrado      | cm²     | 10⁻⁴ m² |
| Milímetro quadrado       | mm²     | 10⁻⁶ m² |

## Exercicio 05
Crie um script para converter unidades de medida de volume:

- Esse script deverá se chamar volume.ts;
- Esse script deverá possuir uma função chamada convert que recebe como parâmetro:
  - valor: number
  - unidade base: string
  - unidade para conversão: string

### Tabela de Conversão:
| Nome                     | Símbolo | Valor   |
|:------------------------:|:-------:|:-------:|
| Quilômetro cúbico        | km³     | 10⁹ m³  |
| Hectômetro cúbico        | hm³     | 10⁶ m³  |
| Decâmetro cúbico         | dam³    | 10³ m³  |
| Metro cúbico             | m³      | 1m³     |
| Decímetro cúbico         | dm³     | 10⁻³ m³ |
| Centímetro cúbico        | cm³     | 10⁻⁶ m³ |
| Milímetro cúbico         | mm³     | 10⁻⁹ m³ |

## Exercicio 06
Temos um array characters que agrupa dados de jogadores em um MMORPG (“Jogo de representação de papéis online, multijogador em massa”) usado para manter o registro de uma guilda (grupo de jogadores) no acompanhamento da evolução do grupo. Esses dados foram adicionados sem se atentar para sua correta tipagem, o que pode ocasionar um bug no futuro. Faça a correta tipagem do array através da tipo character e da função usada para imprimir as informações básicas de todos os jogadores.
```js
type character = any;

const characters: any = [
  {
    nickname: 'xKillerx',
    class: 'warrior',
    stats: { agi: 50, str: 100, int: 25, hp: 1000, mp: 300 },
    createdAt: new Date('2003-10-1')
  },
  {
    nickname: 'jainaProud',
    class: 'mage',
    stats: { agi: 80, str: 40, int: 150, hp: 630, mp: 1100 },
    createdAt: new Date('2003-10-2')
  },
  {
    nickname: 'catIn',
    class: 'hunter',
    stats: { agi: 150, str: 90, int: 80, hp: 800, mp: 600 },
    createdAt: new Date('2003-10-15')
  },
]

function printCharacter(character: any, index: number) {
  const { nickname, class: cls, createdAt } = character;

  console.log(`\n\n===== Character: ${index + 1} ========`);
  console.log(`nickname: ${nickname}
class: ${cls}
createdAt: ${createdAt}`);
}

characters.forEach(printCharacter);
```

## Exercicio 07
Vamos tornar nossos scripts mais interativos! Vamos adicionar input de quem usa o script. Para isso utilize o pacote readline-sync.
Crie em cada script uma função chamada exec que:

- Pegará as entradas da pessoa usuária via terminal;
- Chamará a função de conversão passando as entradas da pessoa usuária como parâmetro.
- Exibirá uma mensagem com o resultado. Ex: "1km é igual a 1000m.";
- Não se esqueça de chamar a função exec ao final do script.

## Exercicio 08
Crie um arquivo index.ts que pergunta qual conversão a pessoa usuária deseja realizar, e chama o script correspondente:

- O script deve ser acionado através do comando npm start no package.json;
- Utilize o readline-sync para realizar o input de dados;
- Quando executado, o script deve exibir uma lista numerada dos scripts disponíveis;
- Você pode utilizar o require para executar o script em questão.

## Exercicio 09
Crie uma enum que represente os meses do ano.

## Exercicio 10
Crie uma enum que represente as estações climáticas do ano.

## Exercicio 11
Utilizando as enums criadas nos exercícios anteriores e o pacote readline-sync, que cria uma interface para ler o que for inserido no console (mais informações, veja a documentação), crie um programa que quando a pessoa usuária escolher o mês do ano e o hemisfério no terminal:

- Retorne em que estação aquele mês se encontra;
- Caso seja um mês que possua duas estações retorne ambas.

### Estações do Ano no Hemisfério Norte
| Estação   | Início         | Término        |
|:---------:|:--------------:|:--------------:|
| Outono    | 23 de setembro | 21 de dezembro |
| Inverno   | 21 de dezembro | 20 de março    |
| Primavera | 20 de março    | 21 de junho    |
| Verão     | 21 de junho    | 23 de setembro |

### Estações do Ano no Hemisfério Sul
| Estação   | Início         | Término        |
|:---------:|:--------------:|:--------------:|
| Outono    | 20 de março    | 21 de junho    |
| Inverno   | 21 de junho    | 22 de setembro |
| Primavera | 22 de setembro | 21 de dezembro |
| Verão     | 21 de dezembro | 20 de março    |
