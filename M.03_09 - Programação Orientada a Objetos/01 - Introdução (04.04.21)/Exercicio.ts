/* Exercício 01:
Vamos modelar algumas partes de um software de uma escola. Escreva uma classe cujos objetos representarão
pessoas estudantes matriculadas em uma disciplina. Cada objeto dessa classe deve conter os seguintes dados:
- matrícula;
- nome;
- 4 notas de prova;
- 2 notas de trabalho.
*/
/* Exercício 02:
Agora vamos adicionar à nossa classe de pessoa estudante os comportamentos. Para isso adicione dois métodos: 
- Um que calcula a soma das notas da pessoa estudante;
- Um que calcula a média das notas da pessoa estudante.
*/

class Student {
  private _enrollment: string;
  private _name: string = String();
  private _exams: number[];
  private _works: number[];

  constructor(enrollment: string, name: string) {
    this._enrollment = enrollment;
    this._name = name;
    this._exams = [];
    this._works = [];
  }

  get enrollment(): string { return this._enrollment; }
  get name(): string { return this._name; }
  get exams(): number[] { return this._exams; }
  get works(): number[] { return this._works; }

  set enrollment(value: string) { this._enrollment = value; }

  set name(value: string) {
    if (value.length < 3) throw new Error('O nome deve conter no mínimo 3 caracteres.');
    this._name = value;
  }

  set exams(value: number[]) {
    if (value.length > 4) throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
    this._exams = value;
  }

  set works(value: number[]) {
    if (value.length > 2) throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.');
    this._works = value;
  }

	sum(): number {
	 	const array = [...this._exams, ...this._works]
	 	return array.reduce((prev, acc) => acc + prev, 0);
	}

	averageGrade(): number {
		const { _exams, _works } = this;
		return Math.round(this.sum() / (_exams.length + _works.length));
	}
}

const studant01 = new Student('123161', 'Vincenzo');

studant01.exams = [10, 10, 8, 6];
studant01.works = [8.5, 7.5];

console.log(studant01);
console.log(`Soma das notas: ${studant01.sum()}`);
console.log(`Média das notas: ${studant01.averageGrade()}`);


/* Exercício 03:
Vamos mudar um pouco nosso contexto para um sistema de vendas de uma lanchonete. Crie uma classe que represente
uma pessoa cliente da lanchonete, uma classe que represente um pedido e uma que represente um item do pedido.
- A pessoa cliente deverá conter o nome;
- O item do pedido deve conter o nome do pedido (ex. "Batatas fritas"; "Açaí") e o preço;
- O pedido deve conter o cliente, os itens consumidos, a forma de pagamento (ex: "cartão", "dinheiro") e o 
  percentual em decimal de desconto para o pedido (ex: 0.1 para 10%, 0.3 para 30%), o pedido pode ou não
  possuir desconto.
*/
/* Exercício 04:
Agora vamos adicionar às nossas classes do exercício anterior os comportamentos. A classe que representa o
pedido deverá ter dois métodos: um que calcula o total do pedido e outro que calcula o total aplicando o valor
de desconto.
*/

class Client {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string { return this._name; }

  set name(value: string) {
    if (value.length < 3) throw new Error('O nome deve conter no mínimo 3 caracteres.');
    this._name = value;
  }
}

class OrderItem {
  private _name: string = String();
  private _price: number = Number();

  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
  }

  get name(): string { return this._name; }
  get price(): number { return this._price; }

  set name(value: string) {
    if (value.length < 3) throw new Error('O nome deve conter no mínimo 3 caracteres.');
    this._name = value;
  }

  set price(value: number) {
    if (value < 0) throw new Error('O preço deve ser positivo.');
    this._price = value;
  }
}

class Order {
  private _client: Client;
  private _items: OrderItem[];
  private _paymentMethod: string;
  private _discount: number = 0;

  constructor(client: Client, items: OrderItem[], paymentMethod: string, discount: number) {
    this._client = client;
    this._items = items;
    this._paymentMethod = paymentMethod;
    this._discount = discount;
  }

  get client(): Client { return this._client; }
  get items(): OrderItem[] { return this._items; }
  get paymentMethod(): string { return this._paymentMethod; }
  get discount(): number { return this._discount; }

  set client(value: Client) { this._client = value; }

  set items(value: OrderItem[]) {
    if (value.length === 0) throw new Error('O pedido deve ter pelo meno um item.');
    this._items = value;
  }

  set paymentMethod(value: string) { this._paymentMethod = value; }

  set discount(value: number) {
    if (value < 0) throw new Error('O disconto não pode ser um valor negatívo.');
    this._discount = value;
  }

  calculateTotal(): number {
    const { items } = this;
    return items.reduce((acc, prev) => acc + prev.price, 0);
  }

  calculateTotalWithDiscount(): number {
    return this.calculateTotal() * (1 - this.discount);
  }
}

const client = new Client('Vincenzo');

const sandwiche = new OrderItem('Sandwiche Natural', 5.00);
const juice = new OrderItem('Suco de Abacaxí', 5.00);
const dessert = new OrderItem('Gelatina de Uva', 2.50);

const order = new Order(client, [sandwiche, juice, dessert], 'dinheiro', 0.10);

console.log(order);
console.log('Valor normal: ', order.calculateTotal());
console.log('Valor com desconto: ', order.calculateTotalWithDiscount());

/* Exercício 05:
Escreva uma classe Data cuja instância represente uma data. Esta classe deverá conter três atributos:
- dia;
- mês;
- ano.
*/

/* Exercício 06:
Vamos adicionar à nossa classe de Data do exercicio anterior os comportamentos. Essa classe deverá
conter os seguintes métodos:
- constructor: deverá verificar se a data passada por parâmetro é uma data válida, caso não esteja
  deverá criar uma data com valor "01/01/1900";
- getMonthName: retorna o mês da data por extenso;
- isLeapYear: retorna verdadeiro se o ano é bissexto e falso caso não seja;
- compare: recebe como parâmetro um outro objeto da classe Data, compara com a data corrente e retorna:
	- 0 se as datas forem iguais;
	- 1 se a data corrente for posterior à data do parâmetro;
	- -1 se a data do parâmetro for posterior à data corrente.
- format: recebe como parâmetro um formato de dia mês e ano e retorna a data formatada.
	- Legenda:
		- aaaa = ano com quatro dígitos
		- aa = ano com dois dígitos
		- mm = mês com 2 digitos
		- M = mês por extenso.
		- dd = dia com 2 digitos
	- Exemplos:
		- "dd/mm/aaaa" = 01/01/1900
		- "aaaa-mm-dd" = 1900-01-01
		- "dd de M de aa" = 01 de janeiro de 90
		- "dd, M de aaaa" = 01, janeiro de 1990
*/


class Data {
  private _day: number;
  private _month: number;
  private _year: number;

  constructor(day: number, month: number, year: number) {
    const dateStr = `${year}-${month}-${day}`;
    if (!this.validateDate(day, month, year)) {
      day = 1;
      month = 1;
      year = 1900;
    }
    this._day = day;
    this._month = month;
    this._year = year;
  }


  get day(): number { return this._day; }
  get month(): number { return this._month; }
  get year(): number { return this._year; }

  set day(value: number) { this._day = value; }
  set month(value: number) { this._month = value; }
  set year(value: number) { this._year = value; }

  getMonthName(): string {
    const months = [ 'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro' ];
    return months[this.month - 1];
  }

  isLeapYear(): boolean { return this._year % 4 === 0; }

  compare(date: Data): number {
    const currentDateStr = `${this.year}-${this.month}-${this.day}`;
    const dateStr = `${date.year}-${date.month}-${date.day}`;

    if (new Date(currentDateStr) > new Date(dateStr)) return 1;
    if (new Date(currentDateStr) < new Date(dateStr)) return -1;

    return 0;
  }

  format(formatting: string): string {
    const conditions: boolean[] = [
      (!formatting.match(/a{2,4}/g)), // verifica se possui o ano na formatação
      (!formatting.match(/m{2}/g) && !formatting.match(/M{1}/g)), // verifica se tem o mês na formatação
      (!formatting.match(/d{2}/g)) // verifica se tem o dia na formatação
    ];

    if (conditions.every(cond => cond)) throw new Error(`O formato passado é inválido: ${formatting}`);

    const day = this.day > 9 ? this.day.toString() : `0${this.day.toString()}`;
    const month = this.month > 9 ? this.month.toString() : `0${this.month.toString()}`;
    const year = this.year.toString();

    const dateFormatting = formatting
      .replace('dd', day)
      .replace('mm', month)
      .replace('M', this.getMonthName())
      .replace('aaaa', year)
      .replace('aa', year.substr(-2));

    return dateFormatting;
  }

  private validateDate(day: number, month: number, year: number): boolean {
    const dateStr = `${year}-${month}-${day}`;

    if (new Date(dateStr).getDate() !== day) return false;
    return true
  }
}

const testDate = new Data(29, 1, 1989);

console.log(testDate);
console.log('Dia: ', testDate.day);
console.log('Mês: ', testDate.month);
console.log('Mês por extenso: ', testDate.getMonthName());
console.log('Ano: ', testDate.year);
console.log('É ano bissexto: ', testDate.isLeapYear() ? 'Sim' : 'Não');
console.log(testDate.format('dd/mm/aaaa'));
console.log(testDate.format('dd-mm-aaaa'));
console.log(testDate.format('aaaa/mm/dd'));
console.log(testDate.format('aaaa-mm-dd'));
console.log(testDate.format('dd de M de aa'));
console.log(testDate.format('dd, M de aaaa'));

const otherDate = new Data(30, 1, 2021);

const compared = testDate.compare(otherDate);

const compareStates = ['anterior', 'igual', 'posterior'];

console.log(`A primeira data é ${compareStates[compared + 1]} a segunda.`);

// data inválida
const invalidDate = new Data(31, 2, 2021);
console.log('Teste data inválida: ', invalidDate)

// formato inválido
console.log(invalidDate.format('a m d'));
