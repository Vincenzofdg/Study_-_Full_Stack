toBe: 
Esse matcher testa igualdade estrita entre o valor passado para expect e seu argumento. Isso significa, por exemplo, que um teste com o expectation abaixo falharia porque a string "5" não é igual ao número 5.

        expect(5).toBe("5")


toEqual:
        test('array and object equality', () => {
          const arr = [1, 2 ,3];
          const obj = { a: 1, b: 2, c: 3};

          expect(arr).toBe([1, 2, 3]); // fails
          expect(obj).toBe({ a: 1, b: 2, c: 3}); // fails
          expect(arr).toEqual([1, 2, 3]); // OK
          expect(obj).toEqual({ a: 1, b: 2, c: 3}); // OK
        });


Números:
Há matchers para as principais formas de comparar números. Leia aqui sobre esses matchers: https://jestjs.io/pt-BR/docs/using-matchers#n%C3%BAmeros


Strings:
Para comparar string com expressões regulares, utilize o matcher toMatch.


Arrays:
- toContain: Verificar se um array contém um item em particular;
- toContainEqual: Verificar que um item possui uma estrutura mais complexa;
- toHaveLength: Verificar o tamanho de um array ou de uma string.


Objetos:
- toHaveProperty: Verificar propriedades especificas.


Exeções:
          const multiplyByTwo = (number) => {
            if (!number) {
              throw new Error('number é indefinido')
            }
            return number * 2;
          };
          multiplyByTwo(4);

          test('testa se multiplyByTwo retorna o resultado da multiplicação', () => {
            expect(multiplyByTwo(4)).toBe(8);
          });
          test('testa se é lançado um erro quando number é indefinido', () => {
            expect(() => { multiplyByTwo() }).toThrow();
          });
          test('testa se a mensagem de erro é "number é indefinido"', () => {
            expect(() => { multiplyByTwo() }).toThrowError(new Error('number é indefinido'));
          });


not: Testar o oposto de algo.
          const workDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
          const weekDays = ['Sunday', ...workDays, 'Saturday'];

          test('Sunday is a week day', () => {
            expect(weekDays).toContain('Sunday');
          });

          test('Sunday is not a workday', () => {
            expect(workDays).not.toContain('Sunday');
          });