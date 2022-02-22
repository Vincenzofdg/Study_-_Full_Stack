const { callbackify } = require("util");

// Exercicios 01 e 02.
const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

/*01 -  Dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?
Resposta: 1° Mars, 2° Venus e 3° Jupiter*/

// console.log(planetDistanceFromSun(mars));
// console.log(planetDistanceFromSun(venus));
// console.log(planetDistanceFromSun(jupiter));

/*02 - Agora, dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas? 
Resposta: 1° Mars, 2° Jupiter e 3° Venus*/

// console.log(planetDistanceFromSun(mars));
// setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000);
// setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000);

/*03 - A função getPlanet abaixo imprime o planeta Marte de forma síncrona. Modifique getPlanet, 
de forma que Marte seja impresso assincronamente, depois de 4 segundos.*/
const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  // console.log('Returned planet:');
  // setTimeout(() => console.log(mars), 4000);
};

getPlanet(); // imprime Marte depois de 4 segundos


// Exercícios 04 e 05
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) => console.log(`Error getting temperature: ${errorReason}`);

/*04 - Suponha que você precise simular uma mensagem enviada do robô Curiosity de Marte para a Terra.
O Curiosity envia para a Terra a temperatura atual em Marte, gastando um tempo variável de até 5 segundos
para que termine o envio. Crie a função sendMarsTemperature , que imprime a temperatura em Marte.*/

// function sendMarsTemperature04() {
//   console.log('Mars temperature is:');
//   setTimeout(() => console.log(`${getMarsTemperature()} degree Celsius`), messageDelay());
// }
// sendMarsTemperature04();

/*05 - Agora que você fez a função que envia a temperatura de Marte, suponha que você consiga enviar para
o robô Curiosity o que você deseja fazer, uma vez obtida com sucesso a temperatura em Marte. Logo, adicione
na função sendMarsTemperature um callback que contenha as ações a serem tomadas em cima da temperatura.*/

const sendMarsTemperature05 = callback => {
  setTimeout(() => callback(getMarsTemperature()), messageDelay());
}
// sendMarsTemperature05(temperatureInFahrenheit);
// sendMarsTemperature05(greet);

/*06 - Por fim, o robô Curiosity tem uma taxa de sucesso de envio de mensagem de 60% devido ao fato de o robô já
estar muito ocupado com outras operações. Logo, adicione na função sendMarsTemperature um outro callback que
contenha as ações a serem tomadas em caso de falha.*/

const sendMarsTemperature06 = (callback01, callback02) => {
  const odds = Math.ceil(Math.random() * 10);
  return (odds > 6) ? (callback01(getMarsTemperature())) : (callback02('Robot is busy'));
}

sendMarsTemperature06(temperatureInFahrenheit, handleError);
sendMarsTemperature06(greet, handleError);