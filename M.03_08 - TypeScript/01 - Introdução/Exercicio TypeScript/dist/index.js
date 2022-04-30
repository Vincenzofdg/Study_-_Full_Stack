"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Exercise = __importStar(require("./exercises"));
console.log(Exercise.greeter('Maria'));
console.log(Exercise.personAge('Maria', 40));
console.log(`A soma do array é igual a ${Exercise.sumArray([3, 6, 9])}`);
console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.triangle(10, 25)}cm²`);
console.log(`Triângulo de base 5cm e altura 30cm: ${Exercise.triangle(5, 30)}cm²`);
console.log(`Triângulo de base 100cm e altura 200cm: ${Exercise.triangle(10, 25)}cm²`);
console.log(`Quadrado de lado 10cm: ${Exercise.square(10)}cm²`);
console.log(`Quadrado de lado 5cm: ${Exercise.square(5)}cm²`);
console.log(`Quadrado de lado 100cm: ${Exercise.square(10)}cm²`);
console.log(`Retângulo de base 10cm e altura 25cm: ${Exercise.rectangle(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm: ${Exercise.rectangle(5, 30)}cm²`);
console.log(`Retângulo de base 100cm e altura 200cm: ${Exercise.rectangle(10, 25)}cm²`);
// Implementação
console.log('-------------------------------------------------------');
console.log(`Losango com diâmetro maior 32cm e menor 18cm: ${Exercise.losango(32, 18)}cm²`);
console.log(`Losango com diâmetro maior 200cm e menor 50cm: ${Exercise.losango(200, 50)}cm²`);
console.log(`Losango com diâmetro maior 75cm e menor 25cm: ${Exercise.losango(75, 25)}cm²`);
console.log('-------------------------------------------------------');
console.log(`Trapézio com base maior 100cm e base menor 70cm e altura de 50cm: ${Exercise.trapezio(100, 70, 50)}cm²`);
console.log(`Trapézio com base maior 75cm e base menor 50cm e altura de 35cm: ${Exercise.trapezio(75, 50, 35)}cm²`);
console.log(`Trapézio com base maior 150cm e base menor 120cm e altura de 80cm: ${Exercise.trapezio(150, 120, 80)}cm²`);
console.log('-------------------------------------------------------');
console.log(`Circulo com raio igual a 25cm: ${Exercise.circulo(25)}cm²`);
console.log(`Circulo com raio igual a 100cm: ${Exercise.circulo(100)}cm²`);
console.log(`Circulo com raio igual a 12.5cm: ${Exercise.circulo(12.5)}cm²`);
