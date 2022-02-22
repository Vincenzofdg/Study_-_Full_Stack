# Checklist do react-redux

## ***Antes de começar***

- [ ] *pensar o quer fazer? uma SPI com ou sem rotas? telas, pages, componentes e seus estados*
- [ ] *pensar como será o *formato* do seu estado global*
- [ ] *pensar quais actions serão necessárias na sua aplicação*

*Se for Instalação nova: React / Redux / Router*
   - [ ] **React**: npx create-react-app my-app-redux;
   - [ ] **Redux**: npm install --save redux react-redux;
   - [ ] **Router**: npm install react-router-dom;
   - [ ] Se usar rotas, lembrar das estruturas do BrowserRouter / Switch / Route
   - [ ] npm install.

## ***Receita de bolo Redux***

**1.** *Criar dentro do diretório **src**:*
- [ ] diretório actions;
- [ ] diretório reducers;
- [ ] diretório store.

**2.** *Criar dentro do diretório **actions**:*
- [ ] arquivo `index.js`.

**3.** *Criar dentro do diretório **reducers**:*
- [ ] arquivo `index.js`.

**4.** *Criar dentro do diretório **store**:*
- [ ] arquivo `index.js`.

**5.** *No arquivo **`App.js`**:*
- [ ] definir o Provider, `<Provider store={ store }>`, para fornecer os estados à todos os componentes encapsulados em `<App />`. `import { Provider } from  'react-redux'`;

**6.** *No arquivo **store/index.js**:*
- [ ] importar o rootReducer e criar a store
- [ ] configurar o [Redux DevTools]
- [ ] *Se precisar instalar o Redux DevTools:* `npm install --save redux-devtools-extension` 
[Redux DevTools ](https://github.com/reduxjs/redux-devtools)
```

import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from  '../reducer';

const store = createStore(rootReducer, composeWithDevTools());
export default store;
```
**7.** *Na pasta **reducers**:*
- [ ] criar os reducers necessários
```
import { MY_CASE } from  '../action';
import anyData from  '../data';

const  INITIAL_STATE = {
// myKey1: myValue,
// myKey2: someValueFromData,
// ....
};
const  myReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
	case MY_CASE_ACTION_X:
		return {
			...state,
			myKey1: action.payload.myKey1,
			myKey2: action.payload.myKey2,			
	};
	default:
		return state;
	}
};
export default myReducer;
```
- [ ] configurar os exports do arquivo **`src/reducers/index.js`**
```
import { combineReducers } from  'redux';
import myReducer from  './myReducer';

const  rootReducer  =  combineReducers({
	mySemanticKey: myReducer,
});

export default rootReducer;
```
**8.** *Na pasta **actions**:*
- [ ] criar os *actionTypes*
- [ ] criar os *actions creators* necessários
- [ ] `src/actions/index.js`:
```
const MY_CASE_ACTION_X = 'MY_CASE_ACTION_X';
export const myActionFunction = (myKey1, myKey2) => ({
	type: MY_CASE_ACTION_X,
	payload: {
		myKey1,
		myKey2,
	},
});
```
**9.** *Nos componentes:*
- [ ] **import** no component:
```
import { connect } from 'react-redux';
import { myActionFunction as callbackAction } from '../action';
```
- [ ] criar a função **`mapStateToProps`**
```
const  mapStateToProps  = (state) => ({
	myKey1: state.mySemanticKey.myKey1,
	myKey2: state.mySemanticKey.myKey2,
// ...
});
```
- [ ] criar a função **`mapDispatchToProps`**
```
const mapDispatchToProps = (dispatch) => ({
	myActionFunction: (myKey1, myKey2) => dispatch(callbackAction(myKey1, myKey2)),
});
```
- [ ] fazer o **`connect`**
```
export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);
```

> Written with [StackEdit](https://stackedit.io/).
