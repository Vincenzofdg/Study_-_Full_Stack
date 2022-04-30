COOKIES: São dados salvos em pequenos arquivos de texto no computador da pessoa que utiliza a Internet.

	- São salvos no formato chave-valor.
	
Para criar um cookie, você só precisa atribuir à propriedade document.cookie uma string contendo o nome e o valor do que se pretende armazenar:

	document.cookie = "email=vincenzo@email.com";
	
Por definição, o cookie é deletado quando fechamos o navegador. Para que isso não aconteça, você pode adicionar uma data para expiração como no exemplo abaixo:

	document.cookie = "email=vincenzo@email.com; expires=Thu, 17 Dec 2020 12:00:00 UTC";
	
Você pode adicionar também o parâmetro path que dirá ao navegador qual caminho o cookie que você criou pertence. Por padrão, o cookie pertence à página atual.

	document.cookie = "email=vincenzo@email.com; expires=Thu, 17 Dec 2020 12:00:00 UTC; path=/";
	

-------------------------------------------------------------------------------

const myCookie = document.cookie;
console.log(myCookie) // email=vincenzo@email.com

-------------------------------------------------------------------------------

Para deletar o cookie, você não precisa especificar o valor que pretende deletar. Você pode deletá-lo passando uma data que já expirou:

	document.cookie = "email=; expires=Tue, 01 Dec 2020 12:00:00 UTC;"
	
	obs: quando temos mais de um par chave-valor, a variável armazenará em uma única string os pares separados por ponto-vírgula.



-------------------------------------------------------------------------------


LOCAL E SESSION STORAGE:

HTML Web Storage provê dois objetos para armazenamento de dados no cliente: cheve-valor

	* sessionStorage - Salva os dados no navegador, ou seja assim que fechar o navegador os dados serão deletados.
	* localStorage - Salva os dados sem data de expiração . Os dados não serão removidos quando o browser for fechado.

Os mesmo comando sao tanto pra localStorage quanto pra serverStorage
	
Salvando no localStorage 			===> 		localStorage.setItem("name", "Vincenzo [DEV]");

Pegar valor do localStorage 			===>		localStorage.getItem('name');
								let usarname = localStorage.getItem('name'); // Vincenzo [DEV]

Removendo valor do localStorage			===>		localStorage.removeItem('name');

Limpar tudo que esta é localStorage		===>		localStorage.clear();

Mudando o valor de uma chave ja existente	===>		localStorage.nome_da_chave = "novo valor";


-------------------------------------------------------------------------------


É muito mais simples utilizar localStorage e sessionStorage do que Cookies , mas o uso de Cookies não é totalmente dispensável.
Em regra geral, utilizamos Cookies quando precisamos dos dados no cliente (browser) e no servidor, pois os Cookies são enviados para o servidor a cada requisição. Caso contrário, utilizamos localStorage e sessionStorage.

Exemplo: Estará no arquivo [COURSE].EXEMPLO

	
