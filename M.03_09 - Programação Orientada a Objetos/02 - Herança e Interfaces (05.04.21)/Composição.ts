// 01. Crie uma interface Logger;
// 02. Logger deve possuir um método log, que recebe um parâmetro do tipo string e não retorna nada (void).
interface Logger {
  log(param: string): void;
}

// 03. Crie uma classe ConsoleLogger que implementa Logger. Você deve imaginar como o método log deve ser implementado;
class ConsoleLogger implements Logger {
  log(param: string): void { console.log(param); }
}

// 04. Crie uma classe ConsoleLogger2 igual à classe anterior, apenas a título de exemplo;
class ConsoleLogger2 implements Logger {
  log(param: string): void {
    // 05. No console.log dentro do método log, diferencie o ConsoleLogger2 do ConsoleLogger;
    console.log('Logger2: ' + param);
  }
}

// 06. Crie uma interface Database;
interface Database {
  // 07. Database deve possuir um atributo do tipo Logger;
  logger: Logger;
  // 08. Database deve possuir um método save, que recebe dois parâmetros, key e value, ambos strings, e não retorna nada (void).
  save(key: string, value: string): void;
}

// 09. Crie uma classe ExampleDatabase que implementa Database;
class ExampleDatabase implements Database {
  // 10. ExampleDatabase deve receber o Logger como parâmetro do construtor, e possuir como valor padrão um ConsoleLogger;
  constructor(public logger: Logger = new ConsoleLogger()) { }

  // 11. Dentro do método save, chame a função log do Logger passado para o database para fazer o log dos parâmetros passados para a save;
  save(key: string, value: string): void {
    this.logger.log(`Salvando o valor ${value} na chave ${key}`);
  }
}

// 12. Crie um objeto de cada um dos Loggers;
const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

// 13. Crie três objetos da ExampleDatabase, cada um dos dois primeiros recebendo um dos Loggers, e o último não recebendo nenhum;
const database1 = new ExampleDatabase(logger1);
const database2 = new ExampleDatabase(logger2);
const database3 = new ExampleDatabase();

// 14. Utilize todos eles para salvar um conteúdo fictício.
database1.save('chave 1', 'valor 1');
database1.save('chave 2', 'valor 2');
database1.save('chave 3', 'valor 3');