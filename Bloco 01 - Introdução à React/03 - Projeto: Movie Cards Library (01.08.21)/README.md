### 1 - Crie um componente `<Header />`

Criar um componente que represente o cabeçalho da página.

**O que será verificado:**

  - Renderize o componente `<Header />`.

### 2 - Renderize um texto no `<Header />`

O texto deverá estar dentro de uma tag `h1`, que por sua vez deve estar dentro de uma tag `header`

**O que será verificado:**

  - Renderize o texto "Movie Cards Library" dentro de `<Header />`.

### 3 - Crie um componente `<MovieList />`

Crie um componente que represente toda a área com os cartões de filmes. `<MovieList />` deve receber uma prop `movies`, que é um array de objetos com informações de um filme.

**O que será verificado:**

  - Renderize o componente `<MovieList />`

### 4 - Renderize componentes `<MovieCard />` dentro de `<MovieList />`

`<MovieList />` deve renderizar um componente `<MovieCard />` para cada objeto contido no array recebido na prop `movies`.

**O que será verificado:**

  - Renderize componentes `<MovieCard />` dentro de `MovieList`.

### 5 - Passe uma key para cada `<MovieCard />` renderizado

`<MovieList />` deve renderizar `<MovieCard />`s de forma dinâmica. Ou seja, deve utilizar a função `map` para renderizar uma lista. Cada componente `<MovieCard />` deve receber uma prop `key` com o nome do filme.

**O que será verificado:**

 - Passe uma key para cada `<MovieCard />` renderizado.

### 6 - Crie um componente `<MovieCard />`

Crie um componente que represente um cartão de filme. `<MovieCard />` deve receber uma prop `movie`. Essa prop será um objeto, contendo as propriedades, `title`, `subtitle`, `storyline`, `imagePath` e `rating`.

**O que será verificado:**

  - Renderize o componente `<MovieCard />`.

### 7 - Renderize a imagem do filme dentro de uma tag `img`

`<MovieCard />` deve renderizar uma tag `img`, tendo como atributo `src` o valor da propriedade `imagePath` do objeto recebido como prop.

**O que será verificado:**

  - Renderize a imagem do filme dentro de uma tag `img`.


### 8 - Renderize o título do filme dentro de uma tag `h4`

`<MovieCard />` deve renderizar o título do filme dentro de uma tag `h4`. O título está contido na propriedade `title` do objeto recebido como prop.

**O que será verificado:**

  - Renderize o título do filme dentro de uma tag `h4`.

### 9 - Renderize o subtítulo do filme dentro de uma tag `h5`

`<MovieCard />` deve renderizar o subtítulo do filme dentro de uma tag `h5`. O subtítulo está contido na propriedade `subtitle` do objeto recebido como prop.

**O que será verificado:**

  - Renderize o subtítulo do filme dentro de uma tag `h5`.

### 10 - Renderize a sinopse do filme dentro de uma tag `p`

`<MovieCard />` deve renderizar a sinopse do filme dentro de uma tag `p`. A sinopse está contida na propriedade `storyline` do objeto recebido como prop.

**O que será verificado:**

  - Renderize a sinopse do filme dentro de uma tag `p`.

### 11 - Crie um componente `<Rating />`

Crie um componente que represente a avaliação de um filme.

**O que será verificado:**

  - Renderize o componente `<Rating />`.

### 12 - Renderize a nota de um filme dentro de `Rating`

`<Rating />` deve renderizar a nota do filme recebido na prop `rating` dentro de um elemento com a classe `rating`.

**O que será verificado:**

  - Renderize a nota de um filme dentro de `Rating`.

### 13 - Renderize o componente `<Rating />` dentro de `<MovieCard />`

`<MovieCard />` deve renderizar um componente `<Rating />`.

**O que será verificado:**

  - Renderize o componente `<Rating />` dentro de `<MovieCard />`.

### 14 - Passe como prop para o componente `<Rating />` o atributo `rating`

`<MovieCard />` deve passar para o componente `<Rating />` uma prop chamada `rating`. O valor dessa prop é a propriedade `rating` do objeto recebido na prop `movie`.

**O que será verificado:**

  - Passe como prop para o componente `<Rating />` o atributo `rating`.

  - O valor da *prop* `rating` é a propriedade `rating` do filme.

  - Rating deve ter uma classe `rating`.

### 15 - Crie um componente `<App />`

O componente `<App />` deve renderizar um componente `<Header />`.

**O que será verificado:**

  - Renderize `<Header />` dentro do componente `<App />`.

### 16 - Renderize `<MovieList />` dentro do componente `<App />`

O componente `<App />` deve renderizar um componente `<MovieList />`, passando como prop `movies` a lista de filmes contida no arquivo `data.js`. Para isso, você precisará importar `data.js` dentro de `App.js`.

**O que será verificado:**

  - Renderize `<MovieList />` dentro do componente `<App />`

### 17 - Adicione PropTypes a todos os componentes

Todos os componentes que recebem props devem ter suas proptypes corretamente declaradas. O ESLint checa automaticamente declaração de proptypes, portanto seu Pull Request deverá passar pela verificação do linter para satisfazer esse requisito.
