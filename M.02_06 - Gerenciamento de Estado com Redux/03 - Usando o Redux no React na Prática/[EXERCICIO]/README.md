**1 - Crie uma pasta chamada `pages`, e, dentro dela, 3 arquivos:**

- PersonalForm.jsx
- ProfessionalForm.jsx
- FormDataDisplay.jsx

**2 - Crie as rotas dentro de `App.js` para renderizar as páginas:**

- `PersonalForm` será renderizada na página principal, com a rota `'/'`.
- `ProfessionalForm` será renderizada ao acessar a rota `'/professionalForm'`.
- `FormDataDisplay` será renderizada ao acessar a rota `'/formDisplay'`.

**3 - Crie um `fieldset` que contenha os seguintes `inputs` e os renderize em `PersonalForm.jsx` salvando os estados no componente:**

- Nome - Texto
- Email - Texto
- CPF - Texto
- Endereço - Texto
- Cidade - Texto
- Estado - Select com todos os estados do Brasil
- Um botão com o texto `Enviar` e que redireciona para a página `ProfessionalForm`

**4 - Crie um `fieldset` que contenha os seguintes inputs e os renderize em `ProfessionalForm.jsx` salvando os estados no componente:**

- Resumo do currículo - TextArea
- Cargo - Texto
- Descrição do cargo - TextArea
- Um botão com o texto `Enviar` e que redireciona para a página `FormDataDisplay`

**5 - Implemente o Redux:**

- Dentro da pasta "redux", crie as pastas "actions", "reducers" e "store".
- Dentro de "actions" crie um arquivo chamado `action.js`.
- Dentro de "reducers" crie um arquivo chamado `reducer.js` e, caso necessário, um arquivo `index.js` para usar o `combineReducers`.
- Dentro de "store" crie um arquivo chamado `store.js`.
- Implemente o `reducer`.
- Implemente a `store`.
- Implemente as `actions`.

**6 - Salve as informações das páginas `PersonalForm` e `ProfessionalForm` na `store`.**

**7 - Renderize, em `FormDataDisplay`, todas as informações que estão salvas na `store`.**

-------------------------------------------------------------------------

# Checklist do react-redux

*Antes de começar*
- [ ] pensar como será o *formato* do seu estado global
- [ ] pensar quais actions serão necessárias na sua aplicação

*Instalação*
- [ ] npx create-react-app my-app-redux;
- [ ] npm install --save redux react-redux;
- [ ] npm install.

*Criar dentro do diretório src:*
- [ ] diretório actions;
- [ ] diretório reducers;
- [ ] diretório store.

*Criar dentro do diretório actions:*
- [ ] arquivo index.js.

*Criar dentro do diretório reducers:*
- [ ] arquivo index.js.

*Criar dentro do diretório store:*
- [ ] arquivo index.js.

*No arquivo App.js:*
- [ ] definir o Provider, `<Provider store={ store }>`, para fornecer os estados à todos os componentes encapsulados em `<App />`.

*No arquivo store/index.js:*
- [ ] importar o rootReducer e criar a store
- [ ] configurar o [Redux DevTools](https://github.com/reduxjs/redux-devtools)

*Na pasta reducers:*
- [ ] criar os reducers necessários
- [ ] configurar os exports do arquivo index.js

*Na pasta actions:*
- [ ] criar os actionTypes, por exemplo: `const ADD_TO_CART = 'ADD_TO_CART';`
- [ ] criar os actions creators necessários

*Nos componentes:*
- [ ] criar a função mapStateToProps
- [ ] criar a função mapDispatchToProps
- [ ] fazer o connect