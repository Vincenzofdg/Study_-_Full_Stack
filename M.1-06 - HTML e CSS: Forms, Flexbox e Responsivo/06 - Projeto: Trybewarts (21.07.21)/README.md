### 1. Crie uma barra verde na parte superior da página

  Pontos importantes:
  * Esta barra deve possuir a classe `header`
  * A classe `header` deve determinar que o elemento é um flex container
  * A classe header deve possuir a propriedade `background-color: rgb(50, 167, 145)`

  #### O que será verificado:

  - Existe um elemento com a classe `header`
  - O elemento possui a propriedade CSS `display: flex`
  - O elemento possui a propriedade CSS `background-color: rgb(50, 167, 145)`

### 2. Adicione o logotipo da Trybewarts com a classe `trybewarts-header-logo` no canto esquerdo da barra superior

  Pontos importantes:
  * Deve existir um elemento img com a classe `trybewarts-header-logo`
  * O logotipo deve estar alinhado à esquerda dentro da barra verde
  * O atributo `src` do logotipo deve apontar para `images/trybewarts-header-logo.svg`

  #### O que será verificado:

  - Existe um elemento `img` com a classe `trybewarts-header-logo`
  - O elemento está alinhado à esquerda da barra
  - O elemento possui o atributo `src` apontando para `images/trybewarts-header-logo.svg`

### 3. Acrescente um formulário de autenticação no canto direito da barra superior contendo os inputs de login, de senha e um botão de entrar

  Pontos importantes:
  * O formulário deve ter a classe `trybewarts-login`
  * O alinhamento à direita deve ser feito usando a propriedade flex que faz os elementos terem o espaçamento máximo *entre* eles dentro de um determinado container
  * Existem dois inputs e um botão dentro do formulário
  * Os inputs deverão conter placeholders com as palavras *'Login'* e *'Senha'*,
  * O formulário deve ser um flex container
  * O formulário deve aceitar como padrão o login 'tryber@teste.com' e a senha '123456'
    - Caso o login ou a senha sejam **diferentes** do padrão, ao clicar no botão deverá ser emitido um alerta contendo o texto *'Login ou senha inválidos.'*
    - Caso o login ou a senha sejam **as mesmas** definidas por padrão, ao clicar no botão deverá ser emitido um alerta contendo o texto *'Olá, Tryber!'*

  #### O que será verificado:

  - Existe um elemento `form` com a classe `trybewarts-login`
  - O elemento está alinhado à direita dentro da barra verde
  - Existem dois inputs e um botão dentro do formulário
  - Os inputs de login e senha possuem, respectivamente, os _placeholders_ `Login` e `Senha`
  - O formulário possui a propriedade CSS `display: flex`
  - O click no botão de login dispara um alert com o texto "Login ou senha inválidos", no caso de erro de preenchimento dos dados
  - O click no botão de login dispara um alert com o texto "Olá, Tryber!", no caso de preenchimento correto dos dados.

### 4. Crie um título com o texto 'Trybewarts' centralizado dentro do 'Header'

Pontos importantes:
  * Deve existir um elemento `<h1>` com o id `trybewarts-header-title`
  * O elemento deve possuir o texto "Trybewarts"
  * O título deverá estar centralizado na barra verde
    - O header deve ter exatamente três elementos filhos
    - O filho do meio deve ser o título

  #### O que será verificado:

  - Existe um elemento `h1` com o id `trybewarts-header-title`
  - O elemento possui um conteúdo de texto `Trybewarts`
  - O elemento com a classe `header` deve possuir exatos `3` elementos filhos
  - O filho do meio do elemento com a classe `header` deve ser o título h1 `Trybewarts`

### 5. Adicione um formulário no corpo da página, posicionado ao lado esquerdo

  Pontos importantes:
  * Deve existir um formulário com o id `evaluation-form`
  * O formulário deve estar inserido na tag `main` do HTML
  * Tanto o formulário quanto o `main` devem ser flex containers
  * O formulário deve ter uma largura de 675px

  #### O que será verificado:

  - Existe um elemento `form` com o id `evaluation-form`
  - O elemento está dentro da tag `main`
  - O elemento `main` e o `form` possuem a propriedade CSS `display: flex`
  - O elemento `form` possui a propriedade CSS `width: 675px`

### 6. Faça com que o formulário do requisito 5 seja um container flex com o eixo principal vertical

  Ponto importante:
  * Alinhe o eixo principal dessa classe para ser o eixo vertical

  #### O que será verificado:

  - Existe um elemento com o ID `evaluation-form`
  - O elemento possui a propriedade CSS `display: flex`
  - O elemento possui a propriedade CSS `flex-direction: column`

### 7. Adicione a logo da Trybewarts no lado direito da página

  Pontos importantes:
  * Deve possuir o id ``trybewarts-forms-logo``
  * O atributo `src` do logotipo deve apontar para ``images/trybewarts-colored.svg``
  * A imagem deve possuir um `height` de `500px`

  #### O que será verificado:

  - Existe um elemento `img` com o id `trybewarts-forms-logo`
  - O elemento possui o atributo `src` apontando para `images/trybewarts-colored.svg`

### 8.Acrescente no formulário os inputs de 'Nome:', 'Sobrenome:' e 'Email:'

  Pontos importantes:
  * Inputs de *'Nome'*, *'Sobrenome'* e *'Email'* deverão ser criados
  * Os inputs devem possuir os ids 'input-name', 'input-lastname' e 'input-email'
  * Os inputs deverão conter um placeholder com *'Nome'*, *'Sobrenome'* e *'Email'* em seus respectivos campos

  #### O que será verificado:

  - Existe 3 elementos inputs com os IDs `input-name`, `input-lastname` e `input-email`
  - Os inputs de nome, sobrenome e email devem possuir, respectivamente, o atributo de `placeholder` com os valores `Nome`, `Sobrenome` e `Email`

### 9. Crie um select 'Casa' contendo quatro options

  Pontos importantes:
  * O select deverá conter o id ``house``
  * Deverá conter a opção com text e value `Gitnória` e com o id ``gitnoria-house``
  * Deverá conter a opção com text e value `Reactpuff` e com o id ``reactpuff-house``
  * Deverá conter a opção com text e value `Corvinode` e com o id ``corvinode-house``
  * Deverá conter a opção com text e value `Pytherina` e com o id ``pytherina-house``

  #### O que será verificado:
  
  - Existe um elemento `select` com o id `house`
  - Existe um elemento `option` com o id `gitnoria-house`
  - Existe um elemento `option` com o id `reactpuff-house`
  - Existe um elemento `option` com o id `corvinode-house`
  - Existe um elemento `option` com o id `pytherina-house`

### 10. Alinhe os campos de 'Nome' e 'Sobrenome' para que fiquem em linha

  Pontos importantes:
  * Os campos de *'Nome'* e *'Sobrenome'* devem estar lado a lado

  #### O que será verificado:

  - O campo de `Sobrenome` está à direita do campo de `Nome`

### 11. Alinhe os campos de 'Email' e 'Casa' para que fiquem em linha

  Pontos importantes:
  * Os campos de *'Email'* e *'Casa'* devem estar abaixo dos de *'Nome'* e *'Sobrenome'*
  * Os campos de *'Email'* e *'Casa'* devem estar lado a lado
  * O campo *'Casa'* deve possuir o `id="house"`

  #### O que será verificado:

  - O campo de `Casa` está à direita do campo de `Email`

### 12. Crie um campo de entrada para qual família a pessoa estudante se identifica

  Pontos importantes:
  * Um elemento com o id `label-family` e o texto *"Qual sua família?"* deverá ser criado
  * O campo deve ser formado por três radio buttons com os valores *"Frontend"*, *"Backend"* e *"FullStack"*
  * Os radio buttons devem ter o atributo `name` com o valor *"family"*
  * Posicione os radio buttons para ficar abaixo um do outro
  * Posicione os radio buttons abaixo do label

  #### O que será verificado:

  - Existe um elemento `label` com o id `label-family` que possui um conteúdo de texto `Qual sua família?`
  - Existe um elemento `input` com o atributo `value="Frontend"`
  - Existe um elemento `input` com o atributo `value="Backend"`
  - Existe um elemento `input` com o atributo `value="FullStack"`
  - Existem 3 elementos `input` do tipo `radio` com o atributo `name="family"`
  - Os inputs do tipo `radio` estão um abaixo do outro
  - Os 3 inputs do tipo `radio` estão abaixo do texto da label

### 13. Crie campos de entrada do tipo 'checkbox' contendo seis opções

  Pontos importantes:
  * Um elemento com o id `label-content` e o texto *"Qual conteúdo você está com mais vontade de aprender?"* deverá ser criado
  * O campo deve ser formado por seis checkbox com as seguintes opções (seguindo esta ordem): *HoFs*, *Jest*, *Promises*, *React*, *SQL* e *Python*
  * Os valores (`value`) dos campos são, respectivamente: *HoFs*, *Jest*, *Promises*, *React*, *SQL*, *Python*
  * As classes (`class`) dos campos devem ser `subject`
  * Posicione as checkbox para ficar lado a lado
  * Posicione as checkbox a abaixo do label

  #### O que será verificado:

  - Existe um elemento `label` com o id `label-content` que possui um conteúdo de texto `Qual conteúdo você está com mais vontade de aprender?`
  - Existe um `input` com o atributo `value="HoFs"`
  - Existe um `input` com o atributo `value="Jest"`
  - Existe um `input` com o atributo `value="Promises"`
  - Existe um `input` com o atributo `value="React"`
  - Existe um `input` com o atributo `value="SQL"`
  - Existe um `input` com o atributo `value="Python"`
  - Os elementos checkbox então posicionados abaixo da label

### 14. Crie campo de entrada para avaliar de 1 a 10 o nível de satisfação com a Trybewarts

  Pontos importantes:
  * Um elemento com o id `label-rate` e o texto *"Como você avalia a Trybewarts?"* deverá ser criado
  * O campo deve ser formado por dez radio buttons, contendo as opções de 1 a 10
  * Os radio buttons devem ter o atributo `value` com o valor de suas opções de 1 a 10.
  * Os radio buttons devem ter o atributo `name` com o valor *"rate"*
  * Posicione os radio buttons para ficar lado a lado
  * Posicione os radio buttons à direita da label

  #### O que será verificado:

  - Existe um elemento `label` com o id `label-rate` que possui um conteúdo de texto `Como você avalia a Trybewarts?`
  - Existem 10 `radio-buttons` com o atributo `name="rate"`
  - Existem 10 `radio-buttons` contendo o atributo `value` de 1 a 10  
  - Os `radio-buttons` estão à direita do texto da label

### 15. Crie uma textarea com o id 'textarea' e uma label com a classe 'textarea' contendo o número máximo de caracteres igual à 500

  Pontos importantes:
  * Uma label com a classe `textarea` e o texto *"Deixe seu comentário:"* deverá ser criado
  * O campo `textarea` deverá ter o máximo de 500 caracteres

  #### O que será verificado:

  - Existe uma `label` com a classe `textarea` e o texto `Deixe seu comentário:`
  - O elemento `textarea` possui um limite de 500 caracteres

### 16. Crie um campo de entrada do tipo 'checkbox' com o id 'agreement' para validar as informações

  Pontos importantes:
  * Um rótulo (label) com o id `label-infos` e o texto *"Você concorda com o uso das informações acima?"* deverá ser criado
  * O campo deve ser formado por um checkbox
  * O campo de 'checkbox' deve possuir o ID `agreement`
  * Posicione a checkbox ao lado da label

  #### O que será verificado:

  - Existe uma label com o id `label-infos` que possui o texto `Você concorda com o uso das informações acima?`
  - Existe um input do tipo `checkbox` com o id `agreement`

### 17. Crie um botão de Enviar para submeter o formulário

  Pontos importantes:
  * Um botão do tipo `submit` deverá ser criado
  * O botão deve possuir o ID `submit-btn`
  * Deverá conter o texto *'Enviar'*

  #### O que será verificado:

  - Existe um botão do tipo `submit` com o id `submit-btn` e o texto `Enviar`

### 18. Faça com que o botão 'Enviar' seja habilitado somente após a checkbox do requisito 16 ser selecionada

  Pontos importantes:
  * O botão deverá estar desabilitado caso a checkbox não esteja selecionada
  * O botão deverá ser habilitado caso a checkbox seja selecionada

  #### O que será verificado:

  - O botão está inicialmente desabilitado
  - O botão torna-se habilitado, ao marcar o campo com id `agreement`

### 19. Crie um rodapé no final da página

  Pontos importantes:
  * O rodapé deverá conter o texto *"Direitos reservados à Trybewarts©"*

  #### O que será verificado:

  - Existe um elemento `footer` deve possuir o texto `Direitos reservados à Trybewarts©`

## Lista de requisitos bônus:

### 20. Crie um contador com o ID 'counter' contendo o número de caracteres disponíveis no textarea, variando de 500 até 0, que deverá ser atualizado a medida que algo for digitado na textarea

  Pontos importantes:
  * O contador deverá possuir o ID `counter`
  * O contador inicialmente deve possuir o valor `500`
  * O contador deverá decrementar a medida que algo for escrito no campo `textarea`
  * O contador deverá incrementar a medida que algo for deletado no campo `textarea`
  * O elemento `textarea` deverá possuir `id="textarea"`

  #### O que será verificado:

  - Existe um elemento com o id `counter`
  - Existe um elemento com o id `textarea`
  - O preenchimento do campo de `textarea` altera o número apresentado no elemento `#counter`

### 21. Faça com que ao clicar no botão 'Enviar', o conteúdo do formulário seja substituído pelas informações preenchidas
  Pontos importantes:
  * Todos os campos do formulário devem ser substituídos.
  * Deve haver um campo com o formato "Nome: Alguem Aqui"
  * Deve haver um campo com o formato "Email: email@mail.com"
  * Deve haver um campo com o formato "Casa: Casa Escolhida"
  * Deve haver um campo com o formato "Família: Família Escolhida"
  * Deve haver um campo com o formato "Matérias: Matérias, Marcadas, Aqui"
  * Deve haver um campo com o formato "Avaliação: NotaAqui"
  * Deve haver um campo com o formato "Observações: Observações aqui"

  #### O que será verificado:

  - Os `inputs` tipo `checkbox` referentes à lista de conteúdo possuem `class="subject"`
  - Ao clicar no botão de enviar, existe um texto no formato `Nome: -Nome- -Sobrenome-`
  - Ao clicar no botão de enviar, existe um texto no formato `Email: -Email-`
  - Ao clicar no botão de enviar, existe um texto no formato `Casa: -Casa-`
  - Ao clicar no botão de enviar, existe um texto no formato `Família: -Família-`
  - Ao clicar no botão de enviar, existe um texto no formato `Matérias: -Matérias Selecionadas-`
  - Ao clicar no botão de enviar, existe um texto no formato `Avaliação: -Avaliação-`
  - Ao clicar no botão de enviar, existe um texto no formato `Observações: -Observações-`
