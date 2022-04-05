## Configurando Node + TypeScript

1. `npm init -y`
2. `npm install -D typescript`
3. **Criar o tsconfig.json com a seguinte configuração:**
```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es6",
    "rootDir": "./",
    "outDir": "./dist",
    "esModuleInterop": true,
    "strict": true
  }
}
```
4. `npm install -D @types/node`
5. `npm install -D ts-node-dev`

**Em um único comando:** `npm install -D typescript @types/node ts-node-dev`

6. `npm install express`
7. `npm install -D @types/express`
8. `npm install http-status-codes` (lidar com os status HTTP)
9. Criar o arquivo `index.ts`
```js
import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const app = express();

app.use(express.json());

const PORT = 8000;

app.get('/', (req: Request, res: Response) => res.status(StatusCodes.OK).send('Express + TypeScript'));

app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));
```
10. Dentro do `package.json`
```json
"scripts": {
    "start": "npm run build && node ./dist/index.js",
    "dev": "tsnd index.ts",
    "build": "tsc"
 },
```
- **start:** executa o build da aplicação e depois roda o arquivo compilado dentro da pasta dist;
- **dev:** executa a aplicação em modo de desenvolvimento utilizando o ts-node-dev;
- **build:** executa a compilação do projeto utilizando o TSC.

11. Instalar uma lib que faz o tratamento de erros disparar diretamente o middleware de erro sem a nescessidade de colocar try/catch
- `npm install express-async-errors`
12. `npm install restify-errors @types/restify-errors`