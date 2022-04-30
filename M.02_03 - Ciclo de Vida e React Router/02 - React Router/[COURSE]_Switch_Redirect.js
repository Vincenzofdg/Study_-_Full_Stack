/* Exemplo de Switch:
Dada a URL atual da aplicação, o Switch procura de cima para baixo pelo primeiro Route que possuir correspondência entre seu
caminho definido na prop path do componente e a URL atual da aplicação. Ou seja, se tivermos um Switch com as rotas abaixo: */
<div>
  <Switch>
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/movies" component={Movies} />
    <Route path="/" component={Home} />
  </Switch>

{/* Exemplo com Redirect: */}
  <Switch>
    <Route path="/dashboard" component={Dashboard} />
    <Route exact path="/">
      {logado ? <Redirect to="/dashboard" /> : <Login />}
    </Route>
  </Switch>
</div>