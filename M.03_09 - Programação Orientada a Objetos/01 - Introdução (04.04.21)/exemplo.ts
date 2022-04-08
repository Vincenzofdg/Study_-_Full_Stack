// 01. Crie uma classe chamada Tv, com os atributos:
// - brand: marca da TV;
// - size: tamanho em polegadas;
// - resolution: resolução da tela;
// - connections: conexões disponíveis(HDMI, Ethernet, etc.);
// - connectedTo: conexão atual Este atributo não precisa ser inicializado no construtor.
// 02. Dentro da classe Tv, crie o método turnOn, que imprimirá os atributos inicializados no construtor;
// 03. Instancie um objeto a partir da classe Tv, chame o método turnOn para imprimir seus atributos;
// 04. Altere a visibilidade dos atributos definidos na classe Tv para private;
// 05. Crie um método getter e um setter para o atributo _connectedTo, da classe Tv.
// - O setter deverá verificar se o valor definido está entre as conexões disponíveis (_connections) e:
// 		- Em caso positivo, definir este valor para o atributo _connectedTo;
// 		- Em caso negativo, imprimir no console a mensagem "Sorry, connection unavailable!"
// 06. Defina um valor para o atributo _connectedTo por meio do método setter criado e imprima seu valor.

class Tv {
	private _brand: string;
	private _size: number;
	private _resolution: string;
	private _connections: string[];
	private _connectedTo: string;

	constructor (a: string, b: number, c: string, d: string[]) {
		this._brand = a;
		this._size = b;
		this._resolution = c;
		this._connections = d;
		this._connectedTo = '';
	}

	turnOn(): void {
		const { _brand, _size, _resolution, _connections } = this
		console.log(`Tv: ${_brand}, ${_size}\nResolution: ${_resolution}\nConnections: ${_connections.join(', ')}`)
	}

	get connectedTo(): string {
		return this._connectedTo;
	}

	set connectedTo(value: string) {
	    if (this._connections.includes(value)) {
			this._connectedTo = value;
			console.log(this._connectedTo);
	    } else {
			console.log('Sorry, connection unavailable!');
	    }
	}
}

const myTV = new Tv('LG', 32, 'HD', ['HDMI', 'Ethernet', 'Wifi']);
myTV.turnOn();

myTV.connectedTo = 'Ethernet';
myTV.connectedTo;