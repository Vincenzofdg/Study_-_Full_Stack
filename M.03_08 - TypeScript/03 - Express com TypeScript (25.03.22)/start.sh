#!/bin/bash

npm init -y

npm install -D typescript

echo '{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es6",
    "rootDir": "./",
    "outDir": "./dist",
    "esModuleInterop": true,
    "strict": true
  }
}' > tsconfig.json

npm install -D @types/node

npm install -D ts-node-dev

npm install express

npm install -D @types/express

npm install http-status-codes

echo "import express from 'express';
import { StatusCodes } from 'http-status-codes';

const app = express();

app.use(express.json());

const PORT = 8000;

app.get('/', (req, res) => res.status(StatusCodes.OK).send('Express + TypeScript'));

app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));" > index.ts