**Use o Banco de Dados model_DB.sql**

1. Crie um modelo Book e defina o método getAll para retornar a lista de todos os livros;
2. Crie uma rota /books para trazer a lista de todos os livros;
3. Crie um método getByAuthorId no modelo Book, para retornar apenas livros associados com um determinado author_id. E altere o middleware da rota books criado no passo 2 para receber uma query string com a chave author_id, e retornar apenas os livros associados;
4. Crie uma rota /books/:id e retorne o livro de acordo com o id passado por parâmetro; Se não existir, retorne um json no seguinte formato { message: 'Not found' }.
5. Ainda usando a tabela books como referência crie uma rota books do tipo POST. Faça as seguintes validações:
    - Título não pode ser vazio;
    - Título precisa ter pelo menos três caracteres;
    - O campo author_id não pode ser vazio;
    - O campo author_id só é válido se existir uma pessoa autora com esse id.

Se algum dos requisitos anteriores não for atendido, retornar um json no seguinte formato { message: 'Dados inválidos' } com status 400 . Caso contrário, insira o livro na tabela books e retorne o json { message: 'Livro criado com sucesso! '} com o status 201.
