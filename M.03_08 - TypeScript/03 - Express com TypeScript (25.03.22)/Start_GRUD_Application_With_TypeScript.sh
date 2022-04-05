#!/bin/bash

npm init -y

npm install -D typescript

npm install -D @types/node

npm install -D ts-node-dev

npm install express

npm install -D @types/express

npm install http-status-codes

npm install express-async-errors

npm install restify-errors @types/restify-errors

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

echo "import express, { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import 'express-async-errors';

const app = express();

app.use(express.json());

const PORT = 8000;

app.get('/', (req: Request, res: Response) => res.status(StatusCodes.OK).send('Express + TypeScript'));

app.use((err: Error , req: Request, res: Response, next: NextFunction) => {
  const { name, message, details } = err as any;
  console.log('name: {name}');

  switch(name) {
    case 'ValidationError':
      res.status(400).json({ message: details[0].message });
      break;
    case 'NotFoundError':
      res.status(404).json({ message });
      break;
    case 'ConflitError':
      res.status(409).json({ message });
      break;
    default:
      console.error(err);
      res.sendStatus(500);
  }

  next()
});

app.listen(PORT, () => console.log('Server is running at http://localhost:{PORT}'));" > index.ts

clear

echo "Application With TypeScript Created '-'"