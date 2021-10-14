// const sleep = sleepDuration => {
//     const now = new Date().getTime();
//     while(new Date().getTime() < now + sleepDuration);
// };
console.log('LANCHES');

const timer = Math.random() * 10000;

const funcao1 = (time01, callback) => {
    setTimeout(() => {
        console.log('1 - Big Mac');
        callback(time01);
    }, time01);
}

const funcao2 = (timer02) => {
    setTimeout(() => {
        console.log('2 - Big Tasty');
    }, timer02);
}

funcao1(timer ,funcao2);
console.log('Liberado pra passear......');
  