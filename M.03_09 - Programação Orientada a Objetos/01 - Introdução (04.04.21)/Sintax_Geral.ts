class Person {
  name: string;
  height: number;
  weight: number;

  constructor(n: string, h: number, w: number) {
    console.log(`Creating person ${n}`);
    this.name = n;
    this.height = h;
    this.weight = w;
  }

  sleep() {
    console.log(`${this.name}: zzzzzzz`);
  }
}

const p1 = new Person('Maria', 171, 58); // Creating person Maria
const p2 = new Person('João', 175, 66); // Creating person João
console.log(p1.name, p1.height, p1.weight); // Maria 171 58
console.log(p2.name, p2.height, p2.weight); // João 175 66
p1.sleep(); // Maria: zzzzzzz
p2.sleep(); // João: zzzzzzz
