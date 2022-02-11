const setTimeoutPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log('2. O tempo passou'));
    }, 1);
  });
};

async function main() {
  console.log('1. Início da função main!');
  await setTimeoutPromise();
  console.log('3. Fim da função main!');
}

main();

console.log('4. termina do módulo');
