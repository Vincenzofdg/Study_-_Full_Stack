![Fluxo REdux](fluxo-react-redux.gif)

1. Um Store é criado para armazenar todos o estado da aplicação;
2.  O Store é disponibilizado através do Provider para todos os componentes da aplicação;
3.  Os componentes usam o connect para conectarem-se ao Store ;
4.  As pessoas que utilizam a aplicação interagem com ela e disparam eventos;
5.  Estes eventos têm o nome de Actions e são enviadas ao Store através de um dispatch ;
6.  Os Reducers recebem essas Actions e alteram o estado da aplicação (criando um novo estado) e salvando no Store ;
7.  Os componentes conectados ao Store "ouvem" estas mudanças e atualizam a View (visualização).