// No writeFile você pode especificar algumas opções na escrita de arquivos passando um terceiro parâmetro opcional seus métodos.
// A opção flag especifica como o arquivo deve ser aberto e manipulado. O padrão é 'w', que especifica que o arquivo deve ser aberto para escrita.
// Se o arquivo não existir, ele é criado. Caso contrário, ele é reescrito, ou seja, tem seu conteúdo apagado antes de o novo conteúdo ser escrito. A flag 'wx', por exemplo, funciona como 'w', mas lança um erro caso o arquivo já exista:

const { writeFile } = require('fs').promises;

writeFile('./meu-arquivo.txt', 'Eu estive aqui :eyes:', {
  flag: 'wx', // wx abre o arquivo para escrita **apenas** caso ele não exista. Caso o contrário, um erro será lançado
  })
  .then(() => console.log('Arquivo salvo'))
  .catch((err) => console.error('err')); // Se o arquivo existir, um erro é retornado 
